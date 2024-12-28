import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHockeyPuck, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './FieldHockeyDashboard.module.css';

// Mock data for field hockey matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    event: 'FIH Pro League',
    competition: 'Men\'s Division',
    isBookmarked: true,
    matchInfo: {
      period: '3rd Quarter',
      time: '42:15',
      venue: 'Wagener Stadium',
      surface: 'Artificial Turf'
    },
    score: {
      home: '3',
      away: '2',
      quarters: [
        { home: '1', away: '1' },
        { home: '1', away: '0' },
        { home: '1', away: '1' }
      ]
    },
    statistics: {
      penaltyCorners: { home: '5/7', away: '3/5' },
      shots: { home: '12', away: '9' },
      possession: { home: '55%', away: '45%' },
      cards: { 
        home: { green: '1', yellow: '0' },
        away: { green: '2', yellow: '1' }
      }
    },
    teams: [
      {
        name: 'Netherlands',
        country: 'Netherlands',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Belgium',
        country: 'Belgium',
        rank: '2',
        odds: { back: 2.30, lay: 2.32 }
      }
    ],
    markets: [
      {
        name: 'Total Goals',
        options: [
          { name: 'Over 6.5', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Under 6.5', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 14:00',
    event: 'EuroHockey Championship',
    competition: 'Women\'s Division',
    isBookmarked: false,
    matchInfo: {
      venue: 'Lee Valley Hockey Centre',
      surface: 'Water-Based Turf'
    },
    teams: [
      {
        name: 'Germany',
        country: 'Germany',
        rank: '3',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'England',
        country: 'England',
        rank: '4',
        odds: { back: 2.00, lay: 2.02 }
      }
    ],
    markets: [
      {
        name: 'Match Winner',
        options: [
          { name: 'Germany', odds: { back: 1.85, lay: 1.87 } },
          { name: 'England', odds: { back: 2.00, lay: 2.02 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    event: 'Olympics',
    competition: 'Semi-Finals',
    isBookmarked: true,
    matchInfo: {
      venue: 'Oi Hockey Stadium',
      surface: 'Water-Based Turf'
    },
    teams: [
      {
        name: 'Australia',
        country: 'Australia',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'India',
        country: 'India',
        rank: '5',
        odds: { back: 2.15, lay: 2.17 }
      }
    ],
    markets: [
      {
        name: 'First Quarter Winner',
        options: [
          { name: 'Australia', odds: { back: 1.90, lay: 1.92 } },
          { name: 'India', odds: { back: 1.90, lay: 1.92 } }
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

const FieldHockeyDashboard = () => {
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
          Field Hockey
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
                    <span>Penalty Corners</span>
                    <span>{match.statistics.penaltyCorners.home} - {match.statistics.penaltyCorners.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Shots</span>
                    <span>{match.statistics.shots.home} - {match.statistics.shots.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Possession</span>
                    <span>{match.statistics.possession.home} - {match.statistics.possession.away}</span>
                  </div>
                  <div className={styles.cards}>
                    <div className={styles.cardItem}>
                      <span className={styles.greenCard}>Green: {match.statistics.cards.home.green} - {match.statistics.cards.away.green}</span>
                      <span className={styles.yellowCard}>Yellow: {match.statistics.cards.home.yellow} - {match.statistics.cards.away.yellow}</span>
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

export default FieldHockeyDashboard;
