import React, { useState, useEffect } from 'react';
import { useBetSlipStore } from '../../store/betSlipStore';
import useWalletStore from '../../stores/useWalletStore';
import { useBetHistoryStore } from '../../store/betHistoryStore';
import { FaTimes, FaChevronDown, FaChevronUp, FaWallet } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import styles from './BetSlip.module.css';

const BetSlip: React.FC = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isPlacingBet, setIsPlacingBet] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const {
        selections,
        totalStake,
        potentialWinnings,
        removeSelection,
        updateStake,
        clearSlip,
        calculatePotentialWinnings,
    } = useBetSlipStore();

    const { 
        balance,
        withdrawFunds, 
        isLoading 
    } = useWalletStore();

    const { addBet } = useBetHistoryStore();

    useEffect(() => {
        calculatePotentialWinnings();
    }, [selections, calculatePotentialWinnings]);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleStakeChange = (id: string, value: string) => {
        const stake = parseFloat(value) || 0;
        if (stake >= 0) {
            if (stake > balance) {
                setError('Insufficient balance');
                updateStake(id, balance);
            } else {
                updateStake(id, stake);
            }
        }
    };

    const handlePlaceBet = async () => {
        try {
            setError(null);

            if (selections.length === 0) {
                setError('Please add selections to your bet slip');
                return;
            }

            // Check if all selections have stakes
            const hasEmptyStakes = selections.some(s => !s.stake || s.stake <= 0);
            if (hasEmptyStakes) {
                setError('Please enter stakes for all selections');
                return;
            }

            if (totalStake <= 0) {
                setError('Please enter a stake amount');
                return;
            }

            // Check if user has sufficient balance
            if (totalStake > balance) {
                setError('Insufficient balance');
                return;
            }

            setIsPlacingBet(true);

            // Deduct stake from wallet
            const success = await withdrawFunds(totalStake);
            
            if (!success) {
                throw new Error('Failed to process bet payment');
            }

            // Add each selection to bet history
            selections.forEach(selection => {
                addBet({
                    id: uuidv4(),
                    type: 'sports',
                    eventName: selection.matchName,
                    marketName: selection.selection,
                    selection: selection.type === 'back' ? 'Back' : 'Lay',
                    odds: selection.odds,
                    stake: selection.stake,
                    potentialWinnings: selection.stake * selection.odds,
                    status: 'pending',
                    placedDate: new Date().toISOString(),
                    nation: 'International' // You can update this based on actual match data
                });
            });

            // Clear the bet slip
            clearSlip();
            toast.success('Bet placed successfully!');
        } catch (err) {
            setError(err.message || 'Failed to place bet');
            toast.error('Failed to place bet');
        } finally {
            setIsPlacingBet(false);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(amount);
    };

    if (selections.length === 0) {
        return null;
    }

    return (
        <div className={`${styles.betSlip} ${isMinimized ? styles.minimized : ''}`}>
            <div className={styles.header} onClick={() => setIsMinimized(!isMinimized)}>
                <h3>Bet Slip ({selections.length})</h3>
                <button className={styles.minimizeBtn}>
                    {isMinimized ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>

            {!isMinimized && (
                <>
                    {error && (
                        <div className={styles.error}>
                            {error}
                        </div>
                    )}
                    
                    <div className={styles.selections}>
                        {selections.map((selection) => (
                            <div key={selection.id} className={styles.selection}>
                                <div className={styles.selectionHeader}>
                                    <span className={styles.matchName}>{selection.matchName}</span>
                                    <button 
                                        className={styles.removeBtn}
                                        onClick={() => removeSelection(selection.id)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className={styles.selectionDetails}>
                                    <span className={styles.pick}>{selection.selection}</span>
                                    <span className={styles.odds}>{selection.odds}</span>
                                </div>
                                <div className={styles.stakeContainer}>
                                    <input
                                        type="number"
                                        value={selection.stake || ''}
                                        onChange={(e) => handleStakeChange(selection.id, e.target.value)}
                                        placeholder="Stake"
                                        className={styles.stakeInput}
                                        min="0"
                                        step="0.01"
                                        disabled={isPlacingBet}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summary}>
                        <div className={styles.walletInfo}>
                            <FaWallet />
                            <span>Balance: {formatCurrency(balance)}</span>
                        </div>
                        <div className={styles.totalStake}>
                            <span>Total Stake:</span>
                            <span>{formatCurrency(totalStake)}</span>
                        </div>
                        <div className={styles.potentialWinnings}>
                            <span>Potential Winnings:</span>
                            <span>{formatCurrency(potentialWinnings)}</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.clearBtn}
                            onClick={clearSlip}
                            disabled={isPlacingBet}
                        >
                            Clear All
                        </button>
                        <button
                            className={styles.placeBetBtn}
                            onClick={handlePlaceBet}
                            disabled={isPlacingBet || isLoading || totalStake <= 0 || totalStake > balance}
                        >
                            {isPlacingBet ? 'Placing Bet...' : 'Place Bet'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BetSlip;
