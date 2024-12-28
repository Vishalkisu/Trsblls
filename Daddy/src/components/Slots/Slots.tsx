import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './Slots.module.css';
import sidebarStyles from './SlotsSidebar.module.css';
import maintenanceStyles from '../shared/Maintenance.module.css';
import { FaTools, FaClock } from 'react-icons/fa';

// Temporary image URLs (replace with local images later)
const slot1 = 'https://pragmaticplay.imgix.net/games/gates-of-olympus.png';
const slot2 = 'https://pragmaticplay.imgix.net/games/sweet-bonanza.png';
const slot3 = 'https://www.netent.com/en/wp-content/uploads/sites/6/2019/02/starburst-logo.png';
const slot4 = 'https://www.playngo.com/wp-content/uploads/2019/01/BookofDead_Logo.png';
const slot5 = 'https://pragmaticplay.imgix.net/games/buffalo-king-megaways.png';

const Slots: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeProvider, setActiveProvider] = useState('all');
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { currentUser, isDemo } = useAuth();

    const allFilters = [
        { id: 'new-slots', name: 'New Slots' },
        { id: '3reel', name: '3 REEL' },
        { id: '4reel', name: '4 REEL' },
        { id: '5reel', name: '5 REEL' },
        { id: '6reel', name: '6 REEL' },
        { id: '7reel', name: '7 REEL' },
        { id: 'fishing-games', name: 'Fishing Games' },
        { id: 'arcade-games', name: 'Arcade Games' }
    ];

    const providerFilters = {
        'bb-games': ['new-slots', '6reel'],
        'netent': ['new-slots'],
        'red-tiger': ['new-slots', '3reel', '4reel', '5reel', '6reel', '7reel'],
        '1x2-gaming': ['3reel', '5reel'],
        'booongo': ['3reel', '5reel', '6reel'],
        'blueprint-gaming': ['new-slots', '3reel', '5reel', '6reel'],
        'dragoon-soft': ['new-slots', 'fishing-games', 'arcade-games'],
        'pocket-game': ['new-slots']
    };

    const providers = [
        { 
            id: 'bb-games', 
            name: 'BB Games', 
            count: 60,
            filters: ['new-slots', '6reel']
        },
        { 
            id: 'netent', 
            name: 'NetEnt', 
            count: 200,
            filters: ['new-slots']
        },
        { 
            id: 'red-tiger', 
            name: 'Red Tiger', 
            count: 120,
            filters: ['new-slots', '3reel', '4reel', '5reel', '6reel', '7reel']
        },
        { 
            id: '1x2-gaming', 
            name: '1X2 Gaming', 
            count: 80,
            filters: ['3reel', '5reel']
        },
        { 
            id: 'booongo', 
            name: 'Booongo', 
            count: 90,
            filters: ['3reel', '5reel', '6reel']
        },
        { 
            id: 'blueprint-gaming', 
            name: 'Blueprint Gaming', 
            count: 110,
            filters: ['new-slots', '3reel', '5reel', '6reel']
        },
        { 
            id: 'dragoon-soft', 
            name: 'Dragoon Soft', 
            count: 70,
            filters: ['new-slots', 'fishing-games', 'arcade-games']
        },
        { 
            id: 'pocket-game', 
            name: 'Pocket Game', 
            count: 85,
            filters: ['new-slots']
        },
        { id: 'elk-studios', name: 'Elk Studios', count: 65 },
        { id: 'evoplay', name: 'Evoplay', count: 95 },
        { id: 'fantasma-games', name: 'Fantasma Games', count: 55 },
        { id: 'gamefish-global', name: 'Gamefish Global', count: 75 },
        { id: 'habanero', name: 'Habanero', count: 100 },
        { id: 'hacksaw-gaming', name: 'Hacksaw Gaming', count: 80 },
        { id: 'iron-dog-studio', name: 'Iron Dog Studio', count: 70 },
        { id: 'kalamba-games', name: 'Kalamba Games', count: 85 },
        { id: 'lady-luck', name: 'Lady Luck', count: 60 },
        { id: 'nolimit-city', name: 'Nolimit city', count: 95 },
        { id: 'omi-gaming', name: 'OMI Gaming', count: 50 },
        { id: 'onetouch', name: 'OneTouch', count: 75 },
        { id: 'play-n-go', name: 'Play & GO', count: 180 },
        { id: 'playpearls', name: 'PlayPearls', count: 65 },
        { id: 'push-gaming', name: 'Push Gaming', count: 90 },
        { id: 'quickspin', name: 'Quickspin', count: 110 },
        { id: 'relax-gaming', name: 'Relax Gaming', count: 120 },
        { id: 'rtg-slots', name: 'RTG Slots', count: 140 },
        { id: 'spearhead-studios', name: 'Spearhead Studios', count: 70 },
        { id: 'slotmill', name: 'Slotmill', count: 55 },
        { id: 'splitrock-gaming', name: 'Splitrock Gaming', count: 65 },
        { id: 'thunderkick', name: 'Thunderkick', count: 80 },
        { id: 'woohoo-games', name: 'Woohoo Games', count: 75 },
        { id: 'yggdrasil', name: 'Yggdrasil', count: 130 },
        { id: 'amatic', name: 'Amatic', count: 95 },
        { id: 'egt', name: 'Egt', count: 110 },
        { id: 'wazdan', name: 'Wazdan', count: 100 },
        { id: 'novomatic', name: 'Novomatic', count: 160 },
        { id: 'pragmatic', name: 'Pragmatic', count: 200 },
        { id: 'virtual-games', name: 'Virtual Games', count: 90 }
    ];

    const slotGames = [
        {
            id: 1,
            name: 'Gates of Olympus',
            provider: 'pragmatic-play',
            providerName: 'Pragmatic Play',
            image: slot1,
            category: 'popular',
            rtp: 96.5,
            volatility: 'High',
            minBet: 0.20,
            maxBet: 100
        },
        {
            id: 2,
            name: 'Sweet Bonanza',
            provider: 'pragmatic-play',
            providerName: 'Pragmatic Play',
            image: slot2,
            category: 'popular',
            rtp: 96.48,
            volatility: 'High',
            minBet: 0.20,
            maxBet: 125
        },
        {
            id: 3,
            name: 'Starburst',
            provider: 'netent',
            providerName: 'NetEnt',
            image: slot3,
            category: 'classic',
            rtp: 96.1,
            volatility: 'Low',
            minBet: 0.10,
            maxBet: 100
        },
        {
            id: 4,
            name: 'Book of Dead',
            provider: 'playngo',
            providerName: 'Play\'n GO',
            image: slot4,
            category: 'egyptian',
            rtp: 96.21,
            volatility: 'High',
            minBet: 0.10,
            maxBet: 100
        },
        {
            id: 5,
            name: 'Buffalo King Megaways',
            provider: 'pragmatic-play',
            providerName: 'Pragmatic Play',
            image: slot5,
            category: 'megaways',
            rtp: 96.52,
            volatility: 'High',
            minBet: 0.20,
            maxBet: 125
        }
    ];

    const handlePlayClick = (game: any) => {
        if (!currentUser && !isDemo) {
            setShowLoginPrompt(true);
            return;
        }
        // Add game launch logic here
        console.log('Launching slot game:', game.name);
    };

    const filteredGames = useMemo(() => {
        return slotGames.filter(game => {
            const matchesProvider = activeProvider === 'all' || game.provider === activeProvider;
            const matchesFilter = activeFilter === 'all' || 
                (activeProvider !== 'all' && providers.find(p => p.id === activeProvider)?.filters?.includes(activeFilter)) ||
                game.category === activeFilter;
            const matchesSearch = searchQuery === '' || 
                game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                game.providerName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesProvider && matchesFilter && matchesSearch;
        });
    }, [activeProvider, activeFilter, searchQuery]);

    return (
        <div className={styles.slotsContainer}>
            <div className={maintenanceStyles.maintenanceOverlay}>
                <div className={maintenanceStyles.maintenanceContent}>
                    <div className={maintenanceStyles.maintenanceIcon}>
                        <FaTools />
                    </div>
                    <h2 className={maintenanceStyles.maintenanceTitle}>Scheduled Maintenance</h2>
                    <p className={maintenanceStyles.maintenanceMessage}>
                        We're currently enhancing our Slots platform with exciting new features and improvements.
                        Our team is working diligently to bring you an even more thrilling gaming experience.
                        <br /><br />
                        Please check back later. We appreciate your patience and understanding.
                    </p>
                </div>
            </div>
            <div className={styles.mainContent}>
                {/* Sidebar */}
                <div className={sidebarStyles.sidebar}>
                    <h2 className={sidebarStyles.sidebarTitle}>Game Providers</h2>
                    <ul className={sidebarStyles.providerList}>
                        <li
                            className={`${sidebarStyles.providerItem} ${activeProvider === 'all' ? sidebarStyles.active : ''}`}
                            onClick={() => setActiveProvider('all')}
                        >
                            All Providers
                            <span className={sidebarStyles.gameCount}>{slotGames.length}</span>
                        </li>
                        {providers.map(provider => (
                            <li
                                key={provider.id}
                                className={`${sidebarStyles.providerItem} ${activeProvider === provider.id ? sidebarStyles.active : ''}`}
                                onClick={() => setActiveProvider(provider.id)}
                            >
                                {provider.name}
                                <span className={sidebarStyles.gameCount}>
                                    {provider.count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className={styles.gamesSection}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Slots</h1>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search slots or providers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            {searchQuery && (
                                <button 
                                    className={styles.clearSearch}
                                    onClick={() => setSearchQuery('')}
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            )}
                            <div className={styles.searchIcon}>🔍</div>
                        </div>
                    </div>

                    <div className={styles.filtersContainer}>
                        <button
                            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All Games
                        </button>
                        {allFilters.map(filter => {
                            // Only show filters that are relevant to the selected provider
                            const isFilterRelevant = activeProvider === 'all' || 
                                providers.find(p => p.id === activeProvider)?.filters?.includes(filter.id);
                            
                            if (!isFilterRelevant) return null;

                            return (
                                <button
                                    key={filter.id}
                                    className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className={styles.gamesGrid}>
                        {filteredGames.length > 0 ? (
                            filteredGames.map(game => (
                                <div key={game.id} className={styles.gameCard}>
                                    <div className={styles.gameImageWrapper}>
                                        <img src={game.image} alt={game.name} className={styles.gameImage} />
                                        <div className={styles.gameOverlay}>
                                            <button 
                                                className={styles.playButton}
                                                onClick={() => handlePlayClick(game)}
                                            >
                                                {!currentUser && !isDemo ? 'Login to Play' : 'Play Now'}
                                                <span className={styles.playIcon}>▶</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.gameInfo}>
                                        <h3>{game.name}</h3>
                                        <div className={styles.gameDetails}>
                                            <span className={styles.providerTag}>{game.providerName}</span>
                                            <div className={styles.gameStats}>
                                                <span className={styles.rtp}>RTP: {game.rtp}%</span>
                                                <span className={styles.volatility}>{game.volatility}</span>
                                            </div>
                                            <div className={styles.betLimits}>
                                                <span>₹{game.minBet} - ₹{game.maxBet}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noGamesMessage}>
                                No slots found for the selected filters
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showLoginPrompt && (
                <div className={styles.loginPromptOverlay} onClick={() => setShowLoginPrompt(false)}>
                    <div className={styles.loginPromptCard} onClick={e => e.stopPropagation()}>
                        <h2>Login Required</h2>
                        <p>Please log in or create an account to play slot games.</p>
                        <div className={styles.loginPromptButtons}>
                            <button onClick={() => setShowLoginPrompt(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slots;
