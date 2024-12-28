import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './FantasySports.module.css';
import { FaSearch, FaTimes, FaStar, FaTrophy, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const FantasySports: React.FC = () => {
    const [activeTab, setActiveTab] = useState('cricket');
    const [searchQuery, setSearchQuery] = useState('');
    const { currentUser, isDemo } = useAuth();

    const games = [
        { id: 'cricket', name: 'Cricket', count: 25, icon: '🏏' },
        { id: 'football', name: 'Football', count: 30, icon: '⚽' },
        { id: 'basketball', name: 'Basketball', count: 20, icon: '🏀' },
        { id: 'baseball', name: 'Baseball', count: 15, icon: '⚾' },
        { id: 'kabaddi', name: 'Kabaddi', count: 10, icon: '🎮' }
    ];

    const matches = {
        cricket: [
            {
                id: 1,
                tournament: 'IPL Fantasy Game',
                team1: 'Mumbai Indians',
                team2: 'Chennai Super Kings',
                startTime: '2024-12-23T14:00:00',
                prizePool: '₹10,00,000',
                entryFee: '₹49',
                totalTeams: 1000,
                joinedTeams: 750,
                featured: true,
                image: '/fantasy/cricket1.jpg'
            },
            {
                id: 2,
                tournament: 'Big Bash Fantasy',
                team1: 'Melbourne Stars',
                team2: 'Sydney Sixers',
                startTime: '2024-12-23T16:30:00',
                prizePool: '₹5,00,000',
                entryFee: '₹29',
                totalTeams: 500,
                joinedTeams: 300,
                featured: false,
                image: '/fantasy/cricket2.jpg'
            }
        ],
        football: [
            {
                id: 3,
                tournament: 'Premier League Fantasy',
                team1: 'Manchester United',
                team2: 'Liverpool',
                startTime: '2024-12-23T18:00:00',
                prizePool: '₹8,00,000',
                entryFee: '₹39',
                totalTeams: 800,
                joinedTeams: 600,
                featured: true,
                image: '/fantasy/football1.jpg'
            }
        ]
    };

    return (
        <div className={styles.container}>
            {/* Left Sidebar */}
            <div className={styles.sidebar}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchBox}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search games..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className={styles.clearButton}
                                onClick={() => setSearchQuery('')}
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>

                <div className={styles.gamesMenu}>
                    {games.map(game => (
                        <button
                            key={game.id}
                            className={`${styles.gameButton} ${activeTab === game.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(game.id)}
                        >
                            <span className={styles.gameIcon}>{game.icon}</span>
                            <span>{game.name}</span>
                            <span className={styles.matchCount}>{game.count}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2>Fantasy {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Games</h2>
                        <div className={styles.filters}>
                            <button className={`${styles.filterButton} ${styles.active}`}>
                                <FaStar className={styles.filterIcon} />
                                Featured
                            </button>
                            <button className={styles.filterButton}>
                                <FaTrophy className={styles.filterIcon} />
                                Tournaments
                            </button>
                            <button className={styles.filterButton}>
                                <FaUsers className={styles.filterIcon} />
                                Practice
                            </button>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <button className={styles.sortButton}>
                            <FaMoneyBillWave className={styles.sortIcon} />
                            Prize Pool
                        </button>
                    </div>
                </div>

                <div className={styles.matchesGrid}>
                    {matches[activeTab]?.map(match => (
                        <div key={match.id} className={`${styles.matchCard} ${match.featured ? styles.featured : ''}`}>
                            <div className={styles.cardImage}>
                                <img src={match.image} alt={match.tournament} />
                                {match.featured && (
                                    <div className={styles.featuredBadge}>
                                        <FaStar /> Featured
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.tournament}>
                                    <h3>{match.tournament}</h3>
                                    <span className={styles.timeRemaining}>
                                        {new Date(match.startTime).toLocaleTimeString()}
                                    </span>
                                </div>
                                <div className={styles.teams}>
                                    <span>{match.team1}</span>
                                    <span className={styles.vs}>vs</span>
                                    <span>{match.team2}</span>
                                </div>
                                <div className={styles.prizeInfo}>
                                    <div className={styles.prizePool}>
                                        <span>Prize Pool</span>
                                        <strong>{match.prizePool}</strong>
                                    </div>
                                    <div className={styles.entryFee}>
                                        <span>Entry</span>
                                        <strong>{match.entryFee}</strong>
                                    </div>
                                </div>
                                <div className={styles.progress}>
                                    <div 
                                        className={styles.progressBar}
                                        style={{ width: `${(match.joinedTeams / match.totalTeams) * 100}%` }}
                                    ></div>
                                    <span className={styles.progressText}>
                                        {match.joinedTeams}/{match.totalTeams} teams
                                    </span>
                                </div>
                                {!currentUser && !isDemo ? (
                                    <button className={styles.loginButton}>Login to Join</button>
                                ) : (
                                    <button className={styles.joinButton}>Create Team</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FantasySports;
