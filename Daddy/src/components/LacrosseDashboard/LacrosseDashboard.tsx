import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHockeyPuck, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './LacrosseDashboard.module.css';

// Mock data for lacrosse matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    event: 'Premier Lacrosse League',
    competition: 'Championship Series',
    isBookmarked: true,
    matchInfo: {
      period: '3rd Quarter',
      time: '8:45',
      venue: 'Homewood Field',
      surface: 'Natural Grass'
    },
    score: {
      home: '12',
      away: '9',
      quarters: [
        { home: '4', away: '3' },
        { home: '3', away: '2' },
        { home: '5', away: '4' }
      ]
    },
    statistics: {
      shots: { home: '28', away: '24' },
      faceoffs: { home: '14/22', away: '8/22' },
      groundBalls: { home: '32', away: '28' },
      penalties: { 
        home: { number: '3', minutes: '2.5' },
        away: { number: '4', minutes: '3.0' }
      }
    },
    teams: [
      {
        name: 'Whipsnakes LC',
        location: 'USA',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Chaos LC',
        location: 'USA',
        rank: '3',
        odds: { back: 2.10, lay: 2.12 }
      }
    ],
    markets: [
      {
        name: 'Total Goals',
        options: [
          { name: 'Over 24.5', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Under 24.5', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 16:00',
    event: 'National Lacrosse League',
    competition: 'Regular Season',
    isBookmarked: false,
    matchInfo: {
      venue: 'KeyBank Center',
      surface: 'Indoor Turf'
    },
    teams: [
      {
        name: 'Buffalo Bandits',
        location: 'Buffalo',
        rank: '2',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'Toronto Rock',
        location: 'Toronto',
        rank: '4',
        odds: { back: 2.00, lay: 2.02 }
      }
    ],
    markets: [
      {
        name: 'Match Winner',
        options: [
          { name: 'Buffalo Bandits', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Toronto Rock', odds: { back: 2.00, lay: 2.02 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 19:00',
    event: 'NCAA Division I',
    competition: 'Championship',
    isBookmarked: true,
    matchInfo: {
      venue: 'Maryland Stadium',
      surface: 'Natural Grass'
    },
    teams: [
      {
        name: 'Maryland Terrapins',
        location: 'Maryland',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Virginia Cavaliers',
        location: 'Virginia',
        rank: '2',
        odds: { back: 2.25, lay: 2.27 }
      }
    ],
    markets: [
      {
        name: 'First Quarter Winner',
        options: [
          { name: 'Maryland', odds: { back: 1.80, lay: 1.82 } },
          { name: 'Virginia', odds: { back: 2.10, lay: 2.12 } }
        ]
      }
    ],
    isLocked: true
  }
];

const OddsButton = ({ odds, isLocked }) => {
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
      <button className={`${styles.oddsValue} ${styles.back}`}>
        {odds.back.toFixed(2)}
      </button>
      <button className={`${styles.oddsValue} ${styles.lay}`}>
        {odds.lay.toFixed(2)}
      </button>
    </div>
  );
};

const LacrosseDashboard = () => {
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
          <FontAwesomeIcon icon={faHockeyPuck} className={styles.sportIcon} />
          Lacrosse
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
              <div className={styles.matchInfo}>
                <span className={styles.event}>{match.event}</span>
                <span className={styles.competition}>{match.competition}</span>
                <div className={styles.venueInfo}>
                  <span className={styles.venue}>{match.matchInfo.venue}</span>
                  {match.matchInfo.surface && (
                    <span className={styles.surface}>{match.matchInfo.surface}</span>
                  )}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${match.isBookmarked ? styles.active : ''}`}
              />
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.status}>{match.status}</div>
              {match.score && (
                <div className={styles.scoreBoard}>
                  <div className={styles.currentScore}>
                    <span>{match.score.home}</span>
                    <span>-</span>
                    <span>{match.score.away}</span>
                  </div>
                  <div className={styles.quarterScores}>
                    {match.score.quarters.map((quarter, index) => (
                      <div key={index} className={styles.quarterScore}>
                        Q{index + 1}: {quarter.home} - {quarter.away}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {match.statistics && (
                <div className={styles.statistics}>
                  <div className={styles.statItem}>
                    <span>Shots</span>
                    <span>{match.statistics.shots.home} - {match.statistics.shots.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Face-offs</span>
                    <span>{match.statistics.faceoffs.home} - {match.statistics.faceoffs.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Ground Balls</span>
                    <span>{match.statistics.groundBalls.home} - {match.statistics.groundBalls.away}</span>
                  </div>
                  <div className={styles.penalties}>
                    <div className={styles.penaltyItem}>
                      <span>Penalties: {match.statistics.penalties.home.number} ({match.statistics.penalties.home.minutes}m) - 
                        {match.statistics.penalties.away.number} ({match.statistics.penalties.away.minutes}m)</span>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.teams}>
                {match.teams.map((team, index) => (
                  <div key={index} className={styles.team}>
                    <div className={styles.teamInfo}>
                      <span className={styles.teamName}>{team.name}</span>
                      <div className={styles.teamDetails}>
                        <span className={styles.location}>{team.location}</span>
                        <span className={styles.rank}>Rank: {team.rank}</span>
                      </div>
                    </div>
                    <OddsButton odds={team.odds} isLocked={match.isLocked} />
                  </div>
                ))}
              </div>
              {match.markets && (
                <div className={styles.markets}>
                  {match.markets.map((market, index) => (
                    <div key={index} className={styles.market}>
                      <div className={styles.marketName}>{market.name}</div>
                      <div className={styles.options}>
                        {market.options.map((option, optIndex) => (
                          <div key={optIndex} className={styles.option}>
                            <span className={styles.optionName}>{option.name}</span>
                            <OddsButton odds={option.odds} isLocked={match.isLocked} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LacrosseDashboard;
