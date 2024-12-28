import React, { useState, useCallback } from 'react';
import './RandomBetDashboard.css';
import { BettingOption } from '../Lottery/Lottery';
import { IoRefreshSharp, IoChevronDown, IoTicketOutline, IoArrowBack, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface RandomBetDashboardProps {
  selectedBet: BettingOption;
  onBack: () => void;
  otherLotteries: BettingOption[];
}

interface BetDetails {
  betNumber: string;
  multiplier: number;
  price: number;
  lotteryId: number;
  lotteryTitle: string;
  date: string;
}

const RandomBetDashboard: React.FC<RandomBetDashboardProps> = ({
  selectedBet,
  onBack,
  otherLotteries
}) => {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState<string>('1');
  const [multiplier, setMultiplier] = useState<string>('1X');
  const [showMultiplierDropdown, setShowMultiplierDropdown] = useState(false);
  const [displayCount, setDisplayCount] = useState<number>(3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [betSuccess, setBetSuccess] = useState(false);
  const [ticketId, setTicketId] = useState<string>('');

  const generateRandomNumber = useCallback(() => {
    const random = Math.floor(Math.random() * 10).toString();
    setSelectedNumber(random);
  }, []);

  const handleMakeBet = async () => {
    try {
      setError(null);
      setIsSubmitting(true);

      const multiplierValue = parseInt(multiplier);
      const bet: BetDetails = {
        betNumber: selectedNumber,
        multiplier: multiplierValue,
        price: selectedBet.price * multiplierValue,
        lotteryId: selectedBet.id,
        lotteryTitle: selectedBet.title,
        date: new Date().toISOString()
      };

      // Validate bet
      if (!selectedNumber || isNaN(multiplierValue)) {
        throw new Error('Invalid bet details');
      }

      // Here you would make an API call to submit the bet
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate ticket ID
      const newTicketId = `TKT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setTicketId(newTicketId);

      // Store bet in local storage for history
      const existingBets = JSON.parse(localStorage.getItem('bettingHistory') || '[]');
      const newBet = {
        id: Date.now(),
        gameName: selectedBet.title,
        betAmount: bet.price,
        result: 'pending',
        date: bet.date,
        ticketId: newTicketId,
        betNumber: bet.betNumber,
        multiplier: bet.multiplier
      };
      localStorage.setItem('bettingHistory', JSON.stringify([newBet, ...existingBets]));

      // Show success state
      setBetSuccess(true);
      setShowConfirmation(true);

      // Reset form after successful bet
      generateRandomNumber();
      setMultiplier('1X');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to place bet');
      setBetSuccess(false);
      setShowConfirmation(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setBetSuccess(false);
    setError(null);
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + 3);
  };

  const handleOtherLotteryClick = (bet: BettingOption) => {
    navigate(`/lottery/${bet.id}`);
  };

  const multiplierOptions = Array.from({ length: 10 }, (_, i) => `${i + 1}X`);
  const displayedLotteries = otherLotteries.slice(0, displayCount);
  const hasMore = displayCount < otherLotteries.length;

  return (
    <div className="random-bet-dashboard-container">
      <div className="random-bet-dashboard-new">
        <div className="dashboard-header">
          <button className="back-button" onClick={onBack}>
            <IoArrowBack />
          </button>
          <div className="header-content">
            <h1>{selectedBet.title}</h1>
            <div className="date-range">
              Date: {selectedBet.startDate} - {selectedBet.endDate}
            </div>
          </div>
        </div>

        <div className="price-section">
          <span className="label">Price:</span>
          <span className="value">{selectedBet.price} PTS</span>
        </div>

        <div className="win-amounts">
          <h2>Win amounts:</h2>
          <div className="amount-row">
            <span className="label">1 numbers correct:</span>
            <span className="value">1000 PTS</span>
          </div>
        </div>

        <div className="random-bets">
          <h2>Random bets:</h2>
          <div className="bet-row">
            <div className="bet-number">1</div>
            <div className="bet-description">
              Last digit of 5 over total score of 1st inning.
            </div>
            <div className="bet-input">
              <div className="number-badge">{selectedNumber}</div>
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="action-buttons">
          <button 
            className="make-bet-button" 
            onClick={handleMakeBet}
            disabled={isSubmitting}
          >
            <IoTicketOutline className="button-icon" />
            <span>{isSubmitting ? 'Placing bet...' : 'Make bet'}</span>
          </button>
          <button 
            className="refresh-button" 
            onClick={generateRandomNumber}
            disabled={isSubmitting}
          >
            <IoRefreshSharp className="refresh-icon" />
            <span className="sr-only">Refresh number</span>
          </button>
          <div className="multiplier-dropdown">
            <button 
              className="multiplier-button"
              onClick={() => setShowMultiplierDropdown(!showMultiplierDropdown)}
              disabled={isSubmitting}
            >
              {multiplier} <IoChevronDown />
            </button>
            {showMultiplierDropdown && (
              <div className="dropdown-content">
                {multiplierOptions.map((option) => (
                  <div
                    key={option}
                    className="dropdown-item"
                    onClick={() => {
                      setMultiplier(option);
                      setShowMultiplierDropdown(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="total-price">
          <span className="label">Total Price:</span>
          <span className="value">
            {selectedBet.price * parseInt(multiplier)} PTS
          </span>
        </div>
      </div>

      <div className="other-lotteries-section">
        <h3>Other lotteries</h3>
        <div className="lottery-grid">
          {displayedLotteries.map((bet) => (
            <div 
              key={bet.id} 
              className="lottery-card"
              onClick={() => handleOtherLotteryClick(bet)}
            >
              <div className="card-image">
                <img src={bet.image} alt={bet.title} />
                <div className="status-badge">{bet.status}</div>
              </div>
              <div className="card-content">
                <div className="date">
                  <i className="far fa-calendar"></i>
                  {bet.startDate}
                </div>
                <h4>{bet.title}</h4>
                <div className="price">
                  <i className="fas fa-coins"></i>
                  Price: {bet.price} PTS
                </div>
                <button className="place-bet">
                  Place a bet
                </button>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseConfirmation}>
              <IoCloseCircle />
            </button>
            {betSuccess ? (
              <>
                <div className="success-icon">
                  <IoCheckmarkCircle />
                </div>
                <h3>Bet Placed Successfully!</h3>
                <p>Your ticket ID: {ticketId}</p>
                <div className="bet-details">
                  <div>Number: {selectedNumber}</div>
                  <div>Multiplier: {multiplier}</div>
                  <div>Total Price: {selectedBet.price * parseInt(multiplier)} PTS</div>
                </div>
              </>
            ) : (
              <>
                <div className="error-icon">
                  <IoCloseCircle />
                </div>
                <h3>Failed to Place Bet</h3>
                <p>{error}</p>
              </>
            )}
            <button className="modal-button" onClick={handleCloseConfirmation}>
              {betSuccess ? 'Continue Betting' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBetDashboard;
