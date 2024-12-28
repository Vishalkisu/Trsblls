import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './WaterPoloDashboard.module.css';

// Mock data for water polo matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    event: 'FINA World League',
    competition: 'Super Final',
    isBookmarked: true,
    matchInfo: {
      quarter: '3rd Quarter',
      time: '6:30',
      venue: 'Duna Arena',
      pool: 'Olympic Pool'
    },
    score: {
      home: '9',
      away: '7',
      quarters: [
        { home: '3', away: '2' },
        { home: '2', away: '3' },
        { home: '4', away: '2' }
      ]
    },
    statistics: {
      powerPlays: { home: '4/6', away: '3/5' },
      exclusions: { home: '3', away: '4' },
      penalties: { home: '1/1', away: '0/1' }
    },
    teams: [
      {
        name: 'Hungary',
        country: 'Hungary',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Croatia',
        country: 'Croatia',
        rank: '3',
        odds: { back: 2.30, lay: 2.32 }
      }
    ],
    markets: [
      {
        name: 'Total Goals',
        options: [
          { name: 'Over 22.5', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Under 22.5', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 14:00',
    event: 'LEN Champions League',
    competition: 'Quarter-Finals',
    isBookmarked: false,
    matchInfo: {
      venue: 'Piscina Sant Jordi',
      pool: 'Main Pool'
    },
    teams: [
      {
        name: 'Pro Recco',
        country: 'Italy',
        rank: '2',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Barceloneta',
        country: 'Spain',
        rank: '4',
        odds: { back: 2.15, lay: 2.17 }
      }
    ],
    markets: [
      {
        name: 'Match Winner',
        options: [
          { name: 'Pro Recco', odds: { back: 1.75, lay: 1.77 } },
          { name: 'Barceloneta', odds: { back: 2.15, lay: 2.17 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    event: 'Olympic Games',
    competition: 'Semi-Finals',
    isBookmarked: true,
    matchInfo: {
      venue: 'Tokyo Aquatics Centre',
      pool: 'Competition Pool'
    },
    teams: [
      {
        name: 'Serbia',
        country: 'Serbia',
        rank: '2',
        odds: { back: 1.90, lay: 1.92 }
      },
      {
        name: 'Montenegro',
        country: 'Montenegro',
        rank: '5',
        odds: { back: 1.90, lay: 1.92 }
      }
    ],
    markets: [
      {
        name: 'First Quarter Winner',
        options: [
          { name: 'Serbia', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Montenegro', odds: { back: 2.05, lay: 2.07 } }
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

const WaterPoloDashboard = () => {
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
          <FontAwesomeIcon icon={faWater} className={styles.sportIcon} />
          Water Polo
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
                  {match.matchInfo.pool && (
                    <span className={styles.pool}>{match.matchInfo.pool}</span>
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
                    <span>Power Plays</span>
                    <span>{match.statistics.powerPlays.home} - {match.statistics.powerPlays.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Exclusions</span>
                    <span>{match.statistics.exclusions.home} - {match.statistics.exclusions.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Penalties</span>
                    <span>{match.statistics.penalties.home} - {match.statistics.penalties.away}</span>
                  </div>
                </div>
              )}
              <div className={styles.teams}>
                {match.teams.map((team, index) => (
                  <div key={index} className={styles.team}>
                    <div className={styles.teamInfo}>
                      <span className={styles.teamName}>{team.name}</span>
                      <div className={styles.teamDetails}>
                        <span className={styles.country}>{team.country}</span>
                        <span className={styles.rank}>World Rank: {team.rank}</span>
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

export default WaterPoloDashboard;
