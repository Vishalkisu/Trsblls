import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './FantasyGames.module.css';
import maintenanceStyles from '../shared/Maintenance.module.css';
import { FaSearch, FaStar, FaTrophy, FaUsers, FaMoneyBillWave, FaTools, FaClock } from 'react-icons/fa';

const FantasyGames: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { currentUser, isDemo } = useAuth();

    const allFilters = [
        { id: 'featured', name: 'Featured Games' },
        { id: 'cricket', name: 'Cricket' },
        { id: 'football', name: 'Football' },
        { id: 'basketball', name: 'Basketball' },
        { id: 'tennis', name: 'Tennis' },
        { id: 'esports', name: 'ESports' },
        { id: 'kabaddi', name: 'Kabaddi' },
    ];

    const categories = [
        { 
            id: 'tournaments', 
            name: 'Tournaments', 
            count: 25,
            filters: ['featured', 'cricket', 'football']
        },
        { 
            id: 'practice', 
            name: 'Practice Games', 
            count: 30,
            filters: ['cricket', 'football', 'basketball']
        },
        { 
            id: 'head-to-head', 
            name: 'Head to Head', 
            count: 15,
            filters: ['cricket', 'football']
        },
        { 
            id: 'mega-contests', 
            name: 'Mega Contests', 
            count: 10,
            filters: ['featured', 'cricket', 'football']
        }
    ];

    const games = [
        {
            id: 1,
            name: 'IPL Fantasy League',
            category: 'tournaments',
            filters: ['featured', 'cricket'],
            image: '/fantasy/cricket1.jpg',
            prizePool: '₹10,00,000',
            entryFee: '₹49',
            totalTeams: 1000,
            joinedTeams: 750,
            startTime: '2024-12-23T14:00:00'
        },
        {
            id: 2,
            name: 'Premier League Fantasy',
            category: 'tournaments',
            filters: ['featured', 'football'],
            image: '/fantasy/football1.jpg',
            prizePool: '₹8,00,000',
            entryFee: '₹39',
            totalTeams: 800,
            joinedTeams: 600,
            startTime: '2024-12-23T18:00:00'
        },
        {
            id: 3,
            name: 'NBA Fantasy League',
            category: 'tournaments',
            filters: ['featured', 'basketball'],
            image: '/fantasy/basketball1.jpg',
            prizePool: '₹12,00,000',
            entryFee: '₹59',
            totalTeams: 1200,
            joinedTeams: 800,
            startTime: '2024-12-23T19:30:00'
        },
        {
            id: 4,
            name: 'PUBG Mobile Fantasy',
            category: 'tournaments',
            filters: ['featured', 'esports'],
            image: '/fantasy/esports1.jpg',
            prizePool: '₹7,00,000',
            entryFee: '₹35',
            totalTeams: 700,
            joinedTeams: 450,
            startTime: '2024-12-23T21:00:00'
        }
    ];

    const filteredGames = games.filter(game => {
        const matchesFilter = activeFilter === 'all' || game.filters.includes(activeFilter);
        const matchesCategory = activeCategory === 'all' || game.category === activeCategory;
        const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesCategory && matchesSearch;
    });

    return (
        <div className={styles.container}>
            <div className={maintenanceStyles.maintenanceOverlay}>
                <div className={maintenanceStyles.maintenanceContent}>
                    <div className={maintenanceStyles.maintenanceIcon}>
                        <FaTools />
                    </div>
                    <h2 className={maintenanceStyles.maintenanceTitle}>Platform Upgrade</h2>
                    <p className={maintenanceStyles.maintenanceMessage}>
                        We're upgrading our Fantasy Games platform to introduce new leagues, 
                        enhanced gameplay mechanics, and improved user experience.
                        <br /><br />
                        Please check back soon for an all-new fantasy gaming experience!
                    </p>
                </div>
            </div>
            <h1 className={styles.title}>Fantasy Games</h1>

            <div className={styles.searchContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className={styles.searchIcon} />
            </div>

            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <div className={styles.filterSection}>
                        <h3>Game Types</h3>
                        <div className={styles.filterList}>
                            <button
                                className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                                onClick={() => setActiveFilter('all')}
                            >
                                All Games
                            </button>
                            {allFilters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.filterSection}>
                        <h3>Categories</h3>
                        <div className={styles.filterList}>
                            <button
                                className={`${styles.filterButton} ${activeCategory === 'all' ? styles.active : ''}`}
                                onClick={() => setActiveCategory('all')}
                            >
                                All Categories
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.name}
                                    <span className={styles.count}>{category.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.gamesGrid}>
                    {filteredGames.map(game => (
                        <div key={game.id} className={styles.gameCard}>
                            <div className={styles.imageContainer}>
                                <img src={game.image} alt={game.name} />
                                {game.filters.includes('featured') && (
                                    <div className={styles.featuredBadge}>
                                        <FaStar /> Featured
                                    </div>
                                )}
                                <div className={styles.gameOverlay}>
                                    <div className={styles.gameInfo}>
                                        <h3>{game.name}</h3>
                                        <div className={styles.details}>
                                            <div className={styles.prizePool}>
                                                <FaMoneyBillWave />
                                                <span>Prize Pool</span>
                                                <strong>{game.prizePool}</strong>
                                            </div>
                                            <div className={styles.entryFee}>
                                                <FaTrophy />
                                                <span>Entry</span>
                                                <strong>{game.entryFee}</strong>
                                            </div>
                                        </div>
                                        <div className={styles.teamInfo}>
                                            <div className={styles.progress}>
                                                <div 
                                                    className={styles.progressBar}
                                                    style={{ width: `${(game.joinedTeams / game.totalTeams) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className={styles.teams}>
                                                <FaUsers />
                                                {game.joinedTeams}/{game.totalTeams} teams
                                            </span>
                                        </div>
                                    </div>
                                    {!currentUser && !isDemo ? (
                                        <button className={styles.loginButton}>Login to Join</button>
                                    ) : (
                                        <button className={styles.joinButton}>Create Team</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FantasyGames;
