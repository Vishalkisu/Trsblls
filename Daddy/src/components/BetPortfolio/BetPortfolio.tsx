import React, { useState, useEffect } from 'react';
import styles from './BetPortfolio.module.css';
import { useBetHistoryStore } from '../../store/betHistoryStore';
import { FaSearch, FaTrash, FaFileExport, FaHistory } from 'react-icons/fa';

const BetPortfolio: React.FC = () => {
    const { bets, clearHistory } = useBetHistoryStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTab, setSelectedTab] = useState('all');
    const [showEntries, setShowEntries] = useState(10);
    const [betType, setBetType] = useState('all');
    const [showDeleted, setShowDeleted] = useState(false);
    const [showDeletedHistory, setShowDeletedHistory] = useState(false);

    // Filter bets based on all criteria
    const filteredBets = bets.filter(bet => {
        const matchesSearch = bet.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bet.marketName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = selectedTab === 'all' || bet.type.toLowerCase() === selectedTab.toLowerCase();
        const matchesBetType = betType === 'all' || bet.type.toLowerCase() === betType.toLowerCase();
        const matchesDeleted = showDeleted ? true : !bet.isDeleted;
        const matchesDeletedHistory = showDeletedHistory ? bet.isDeleted : matchesDeleted;

        return matchesSearch && matchesTab && matchesBetType && matchesDeletedHistory;
    });

    // Calculate totals
    const totalBets = filteredBets.length;
    const totalAmount = filteredBets.reduce((sum, bet) => sum + bet.stake, 0);

    const handleExport = () => {
        const exportData = filteredBets.map(bet => ({
            type: bet.type,
            eventName: bet.eventName,
            marketName: bet.marketName,
            selection: bet.selection,
            odds: bet.odds,
            stake: `₹${bet.stake.toFixed(2)}`,
            potentialWinnings: `₹${bet.potentialWinnings.toFixed(2)}`,
            status: bet.status,
            placedDate: new Date(bet.placedDate).toLocaleString(),
            nation: bet.nation || '-'
        }));

        const csvContent = "data:text/csv;charset=utf-8," + 
            Object.keys(exportData[0]).join(",") + "\n" +
            exportData.map(row => Object.values(row).join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `betting_history_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDelete = (betId: string) => {
        const updatedBets = bets.map(bet => 
            bet.id === betId ? { ...bet, isDeleted: true } : bet
        );
        useBetHistoryStore.setState({ bets: updatedBets });
    };

    return (
        <div className={styles.betPortfolio}>
            <div className={styles.header}>
                <h1>Bet Portfolio</h1>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search by event or market name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className={styles.searchIcon} />
                </div>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${selectedTab === 'all' ? styles.active : ''}`}
                    onClick={() => setSelectedTab('all')}
                >
                    All
                </button>
                <button
                    className={`${styles.tab} ${selectedTab === 'sports' ? styles.active : ''}`}
                    onClick={() => setSelectedTab('sports')}
                >
                    Sports
                </button>
                <button
                    className={`${styles.tab} ${selectedTab === 'casino' ? styles.active : ''}`}
                    onClick={() => setSelectedTab('casino')}
                >
                    Casino
                </button>
            </div>

            <div className={styles.filterSection}>
                <div className={styles.filterGroup}>
                    <label>
                        <input
                            type="radio"
                            name="betType"
                            checked={betType === 'all'}
                            onChange={() => setBetType('all')}
                        />
                        All
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="betType"
                            checked={betType === 'back'}
                            onChange={() => setBetType('back')}
                        />
                        Back
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="betType"
                            checked={betType === 'lay'}
                            onChange={() => setBetType('lay')}
                        />
                        Lay
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <select
                        value={showEntries}
                        onChange={(e) => setShowEntries(Number(e.target.value))}
                    >
                        <option value={10}>Show 10</option>
                        <option value={25}>Show 25</option>
                        <option value={50}>Show 50</option>
                        <option value={100}>Show 100</option>
                    </select>
                </div>
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryItem}>
                    <span>Total Bets:</span>
                    <strong>{totalBets}</strong>
                </div>
                <div className={styles.summaryItem}>
                    <span>Total Amount:</span>
                    <strong>₹{totalAmount.toFixed(2)}</strong>
                </div>
            </div>

            <div className={styles.actions}>
                <button 
                    className={styles.actionButton} 
                    onClick={() => setShowDeletedHistory(!showDeletedHistory)}
                    title={showDeletedHistory ? "Show Active Records" : "Show Deleted Records"}
                >
                    {showDeletedHistory ? (
                        <>
                            <FaHistory /> Active Records
                        </>
                    ) : (
                        <>
                            <FaTrash /> Deleted Records
                        </>
                    )}
                </button>
                <button 
                    className={styles.actionButton} 
                    onClick={handleExport}
                    title="Export"
                >
                    <FaFileExport /> Export
                </button>
                <button 
                    className={styles.actionButton} 
                    onClick={clearHistory}
                    title="Clear History"
                >
                    <FaTrash /> Clear History
                </button>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Event Name</th>
                            <th>Market Name</th>
                            <th>Nation</th>
                            <th>Odds</th>
                            <th>Stake</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBets.length === 0 ? (
                            <tr className={styles.noRecords}>
                                <td colSpan={9}>No records found</td>
                            </tr>
                        ) : (
                            filteredBets.slice(0, showEntries).map((bet, index) => (
                                <tr key={index} className={bet.isDeleted ? styles.deletedRow : ''}>
                                    <td>{bet.type}</td>
                                    <td>{bet.eventName}</td>
                                    <td>{bet.marketName}</td>
                                    <td>{bet.nation || '-'}</td>
                                    <td>{bet.odds}</td>
                                    <td>₹{bet.stake.toFixed(2)}</td>
                                    <td>{new Date(bet.placedDate).toLocaleString()}</td>
                                    <td className={styles[bet.status]}>{bet.status}</td>
                                    <td>
                                        {!bet.isDeleted && (
                                            <button
                                                className={styles.deleteButton}
                                                onClick={() => handleDelete(bet.id)}
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BetPortfolio;
