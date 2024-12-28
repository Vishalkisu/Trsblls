import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './RugbyDashboard.module.css';

// Mock data for rugby matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'New Zealand',
    awayTeam: 'South Africa',
    competition: 'Rugby World Cup',
    isBookmarked: true,
    score: '24-21',
    additionalInfo: '65 mins',
    odds: {
      home: { back: 1.55, lay: 1.57 },
      draw: { back: 21.00, lay: 22.00 },
      away: { back: 2.80, lay: 2.85 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 20:00',
    homeTeam: 'England',
    awayTeam: 'Ireland',
    competition: 'Six Nations',
    isBookmarked: true,
    additionalInfo: 'Twickenham Stadium',
    odds: {
      home: { back: 2.10, lay: 2.15 },
      draw: { back: 23.00, lay: 24.00 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 15:30',
    homeTeam: 'Australia',
    awayTeam: 'Wales',
    competition: 'Autumn Internationals',
    isBookmarked: false,
    additionalInfo: 'Principality Stadium',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      draw: { back: 25.00, lay: 26.00 },
      away: { back: 2.25, lay: 2.30 },
      isLocked: true
    }
  },
  {
    id: 4,
    status: 'LIVE',
    homeTeam: 'France',
    awayTeam: 'Scotland',
    competition: 'Six Nations',
    isBookmarked: true,
    score: '17-17',
    additionalInfo: '72 mins',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      draw: { back: 12.00, lay: 12.50 },
      away: { back: 2.00, lay: 2.05 },
      isLocked: false
    }
  },
  {
    id: 5,
    status: 'Tomorrow 18:45',
    homeTeam: 'Argentina',
    awayTeam: 'Italy',
    competition: 'Autumn Internationals',
    isBookmarked: false,
    additionalInfo: 'Stadio Olimpico',
    odds: {
      home: { back: 1.45, lay: 1.47 },
      draw: { back: 28.00, lay: 29.00 },
      away: { back: 3.20, lay: 3.25 },
      isLocked: false
    }
  }
];

const OddsButton = ({ type, odds, isLocked }) => {
  if (isLocked) {
    return (
      <div className={styles.oddsBox}>
        <div className={`${styles.oddsValue} ${styles.locked}`}>
          <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.oddsBox}>
      <button className={`${styles.oddsValue} ${styles.back} ${styles[type]}`}>
        {odds.back.toFixed(2)}
      </button>
      <button className={`${styles.oddsValue} ${styles.lay} ${styles[type]}`}>
        {odds.lay.toFixed(2)}
      </button>
    </div>
  );
};

const RugbyDashboard = () => {
  const [filter, setFilter] = useState('all');

  const filteredMatches = matches.filter(match => {
    switch (filter) {
      case 'live':
        return match.status === 'LIVE';
      case 'today':
        return match.status.includes('Today');
      case 'upcoming':
        return match.status.includes('Tomorrow');
      default:
        return true;
    }
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>
          <FontAwesomeIcon icon={faFootball} className={styles.sportIcon} />
          Rugby
        </h1>
        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Matches
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'live' ? styles.active : ''}`}
            onClick={() => setFilter('live')}
          >
            Live
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'today' ? styles.active : ''}`}
            onClick={() => setFilter('today')}
          >
            Today
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'upcoming' ? styles.active : ''}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className={styles.matchesContainer}>
        {filteredMatches.map(match => (
          <div key={match.id} className={styles.matchCard}>
            <div className={styles.matchHeader}>
              <span className={styles.competition}>{match.competition}</span>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${match.isBookmarked ? styles.active : ''}`}
              />
            </div>
            <div className={styles.matchInfo}>
              <div className={styles.status}>{match.status}</div>
              <div className={styles.teams}>
                <div className={styles.team}>{match.homeTeam}</div>
                <div className={styles.team}>{match.awayTeam}</div>
              </div>
              {match.score && <div className={styles.score}>{match.score}</div>}
              {match.additionalInfo && (
                <div className={styles.additionalInfo}>{match.additionalInfo}</div>
              )}
            </div>
            <div className={styles.oddsContainer}>
              <div className={styles.oddsColumn}>
                <div className={styles.oddsHeader}>Home</div>
                <OddsButton type="home" odds={match.odds.home} isLocked={match.odds.isLocked} />
              </div>
              <div className={styles.oddsColumn}>
                <div className={styles.oddsHeader}>Draw</div>
                <OddsButton type="draw" odds={match.odds.draw} isLocked={match.odds.isLocked} />
              </div>
              <div className={styles.oddsColumn}>
                <div className={styles.oddsHeader}>Away</div>
                <OddsButton type="away" odds={match.odds.away} isLocked={match.odds.isLocked} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RugbyDashboard;
