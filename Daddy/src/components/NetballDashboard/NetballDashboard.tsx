import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyball, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './NetballDashboard.module.css';

// Mock data for netball matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    event: 'Suncorp Super Netball',
    competition: 'Regular Season',
    isBookmarked: true,
    matchInfo: {
      period: '3rd Quarter',
      time: '8:45',
      venue: 'Melbourne Arena',
      court: 'Main Court'
    },
    score: {
      home: '42',
      away: '38',
      quarters: [
        { home: '14', away: '12' },
        { home: '13', away: '14' },
        { home: '15', away: '12' }
      ]
    },
    statistics: {
      goals: { 
        home: { attempts: '48/52', percentage: '92%' },
        away: { attempts: '43/50', percentage: '86%' }
      },
      centrePassConversion: { home: '85%', away: '82%' },
      turnovers: { home: '12', away: '14' },
      intercepts: { home: '8', away: '6' }
    },
    teams: [
      {
        name: 'Melbourne Vixens',
        country: 'Australia',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'NSW Swifts',
        country: 'Australia',
        rank: '2',
        odds: { back: 2.10, lay: 2.12 }
      }
    ],
    markets: [
      {
        name: 'Total Goals',
        options: [
          { name: 'Over 115.5', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Under 115.5', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 16:00',
    event: 'ANZ Premiership',
    competition: 'Semi-Finals',
    isBookmarked: false,
    matchInfo: {
      venue: 'TSB Arena',
      court: 'Centre Court'
    },
    teams: [
      {
        name: 'Central Pulse',
        country: 'New Zealand',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Northern Stars',
        country: 'New Zealand',
        rank: '3',
        odds: { back: 2.25, lay: 2.27 }
      }
    ],
    markets: [
      {
        name: 'Match Winner',
        options: [
          { name: 'Central Pulse', odds: { back: 1.65, lay: 1.67 } },
          { name: 'Northern Stars', odds: { back: 2.25, lay: 2.27 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 19:00',
    event: 'Vitality Netball Superleague',
    competition: 'Final',
    isBookmarked: true,
    matchInfo: {
      venue: 'Copper Box Arena',
      court: 'Show Court'
    },
    teams: [
      {
        name: 'Manchester Thunder',
        country: 'England',
        rank: '1',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'Loughborough Lightning',
        country: 'England',
        rank: '2',
        odds: { back: 1.95, lay: 1.97 }
      }
    ],
    markets: [
      {
        name: 'First Quarter Winner',
        options: [
          { name: 'Manchester Thunder', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Loughborough Lightning', odds: { back: 1.90, lay: 1.92 } }
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

const NetballDashboard = () => {
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
          <FontAwesomeIcon icon={faVolleyball} className={styles.sportIcon} />
          Netball
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
                  {match.matchInfo.court && (
                    <span className={styles.court}>{match.matchInfo.court}</span>
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
                    <span>Goals</span>
                    <span>{match.statistics.goals.home.attempts} ({match.statistics.goals.home.percentage}) - 
                          {match.statistics.goals.away.attempts} ({match.statistics.goals.away.percentage})</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Centre Pass Conversion</span>
                    <span>{match.statistics.centrePassConversion.home} - {match.statistics.centrePassConversion.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Turnovers</span>
                    <span>{match.statistics.turnovers.home} - {match.statistics.turnovers.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Intercepts</span>
                    <span>{match.statistics.intercepts.home} - {match.statistics.intercepts.away}</span>
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

export default NetballDashboard;
