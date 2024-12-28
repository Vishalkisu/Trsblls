import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './FootballDashboard.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBetSlipStore } from '../../store/betSlipStore';

// Mock data for football matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    competition: 'Premier League',
    isBookmarked: true,
    odds: {
      home: { back: 1.87, lay: 1.89 },
      draw: { back: 3.35, lay: 3.40 },
      away: { back: 6.00, lay: 6.20 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Tomorrow 20:45',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    competition: 'La Liga',
    isBookmarked: true,
    odds: {
      home: { back: 2.10, lay: 2.12 },
      draw: { back: 3.50, lay: 3.55 },
      away: { back: 4.20, lay: 4.25 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:30',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    competition: 'Bundesliga',
    isBookmarked: false,
    odds: {
      home: { back: 1.75, lay: 1.77 },
      draw: { back: 3.80, lay: 3.85 },
      away: { back: 5.50, lay: 5.60 },
      isLocked: true
    }
  },
  {
    id: 4,
    status: 'LIVE',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    competition: 'Ligue 1',
    isBookmarked: true,
    odds: {
      home: { back: 1.55, lay: 1.57 },
      draw: { back: 4.20, lay: 4.30 },
      away: { back: 7.50, lay: 7.70 },
      isLocked: false
    }
  },
  {
    id: 5,
    status: 'Tomorrow 21:00',
    homeTeam: 'AC Milan',
    awayTeam: 'Inter Milan',
    competition: 'Serie A',
    isBookmarked: false,
    odds: {
      home: { back: 2.40, lay: 2.45 },
      draw: { back: 3.25, lay: 3.30 },
      away: { back: 3.10, lay: 3.15 },
      isLocked: true
    }
  }
];

interface OddsButtonProps {
  type: 'home' | 'draw' | 'away';
  odds: {
    back: number;
    lay: number;
  };
  isLocked: boolean;
  match: {
    id: string | number;
    homeTeam: string;
    awayTeam: string;
    competition: string;
  };
}

const OddsButton = ({ type, odds, isLocked, match }: OddsButtonProps) => {
  const { addSelection } = useBetSlipStore();

  const handleClick = () => {
    if (isLocked) return;
    
    const selection = {
      id: String(match.id),
      matchId: String(match.id),
      matchName: `${match.homeTeam} vs ${match.awayTeam}`,
      selection: type === 'home' ? match.homeTeam : type === 'away' ? match.awayTeam : 'Draw',
      market: type === 'home' ? match.homeTeam : type === 'away' ? match.awayTeam : 'Draw',
      odds: odds.back,
      stake: 0,
      competition: match.competition,
      type: 'back' as const
    };
    
    addSelection(selection);
  };

  return (
    <div className={styles.oddsContainer}>
      <button 
        className={`${styles.oddsButton} ${styles.backOdds} ${isLocked ? styles.locked : ''}`}
        onClick={handleClick}
        disabled={isLocked}
      >
        {isLocked ? <FontAwesomeIcon icon={faLock} /> : odds.back}
      </button>
      <button 
        className={`${styles.oddsButton} ${styles.layOdds} ${isLocked ? styles.locked : ''}`}
        onClick={handleClick}
        disabled={isLocked}
      >
        {isLocked ? <FontAwesomeIcon icon={faLock} /> : odds.lay}
      </button>
    </div>
  );
};

const FootballDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [filteredMatches, setFilteredMatches] = useState(matches);

  // Parse filter from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam) {
      setFilter(filterParam);
    }
  }, [location]);

  // Update filtered matches when filter changes
  useEffect(() => {
    switch (filter) {
      case 'live':
        setFilteredMatches(matches.filter(match => match.status === 'LIVE'));
        break;
      case 'today':
        setFilteredMatches(matches.filter(match => !match.status.includes('Tomorrow')));
        break;
      case 'upcoming':
        setFilteredMatches(matches.filter(match => match.status.includes('Tomorrow')));
        break;
      default:
        setFilteredMatches(matches);
    }
  }, [filter]);

  // Handle filter change from banner or other components
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    navigate(`?filter=${newFilter}`);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faFutbol} className={styles.titleIcon} />
          <h1>Football</h1>
        </div>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Match Details</th>
              <th>
                <div className={styles.oddsHeader}>
                  <span>Back</span>
                  <span>Lay</span>
                </div>
                1
              </th>
              <th>
                <div className={styles.oddsHeader}>
                  <span>Back</span>
                  <span>Lay</span>
                </div>
                X
              </th>
              <th>
                <div className={styles.oddsHeader}>
                  <span>Back</span>
                  <span>Lay</span>
                </div>
                2
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMatches.map(match => (
              <tr 
                key={match.id} 
                className={`${styles.matchRow} ${match.status === 'LIVE' ? styles.liveMatch : ''}`}
              >
                <td className={styles.matchInfo}>
                  <div className={styles.status}>
                    <span className={`${styles.statusBadge} ${match.status === 'LIVE' ? styles.live : styles.upcoming}`}>
                      {match.status}
                    </span>
                    {match.isBookmarked && (
                      <span className={styles.bookmarkBadge}>
                        <FontAwesomeIcon icon={faBookmark} /> BM
                      </span>
                    )}
                  </div>
                  <div className={styles.teams}>
                    {match.homeTeam} v {match.awayTeam}
                  </div>
                  <div className={styles.competition}>
                    {match.competition}
                  </div>
                </td>
                <td className={styles.oddsCell}>
                  <OddsButton 
                    type="home" 
                    odds={match.odds.home} 
                    isLocked={match.odds.isLocked} 
                    match={match}
                  />
                </td>
                <td className={styles.oddsCell}>
                  <OddsButton 
                    type="draw" 
                    odds={match.odds.draw} 
                    isLocked={match.odds.isLocked}
                    match={match}
                  />
                </td>
                <td className={styles.oddsCell}>
                  <OddsButton 
                    type="away" 
                    odds={match.odds.away} 
                    isLocked={match.odds.isLocked}
                    match={match}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FootballDashboard;
