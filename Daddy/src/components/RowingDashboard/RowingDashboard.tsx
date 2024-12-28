import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './RowingDashboard.module.css';

// Mock data for rowing events
const events = [
  {
    id: 1,
    status: 'LIVE',
    event: 'World Rowing Championships',
    competition: 'Men\'s Eight Final',
    isBookmarked: true,
    matchInfo: {
      stage: 'Final',
      time: '500m',
      venue: 'Bosbaan',
      course: 'Olympic Course'
    },
    raceInfo: {
      distance: '2000m',
      currentPosition: '500m',
      splits: [
        { position: '500m', times: ['1:23.45', '1:23.89', '1:24.12'] },
        { position: '1000m', times: ['2:47.23', '2:48.01', '2:48.45'] }
      ]
    },
    statistics: {
      strokeRate: {
        current: ['36', '35', '34'],
        average: ['35.5', '34.8', '34.2']
      },
      speed: {
        current: ['5.8', '5.7', '5.6'],
        average: ['5.75', '5.65', '5.55']
      }
    },
    teams: [
      {
        name: 'Great Britain',
        country: 'GBR',
        rank: '1',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'Germany',
        country: 'GER',
        rank: '2',
        odds: { back: 2.10, lay: 2.12 }
      },
      {
        name: 'Netherlands',
        country: 'NED',
        rank: '3',
        odds: { back: 3.20, lay: 3.22 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Great Britain', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Germany', odds: { back: 2.10, lay: 2.12 } },
          { name: 'Netherlands', odds: { back: 3.20, lay: 3.22 } }
        ]
      },
      {
        name: 'Winning Margin',
        options: [
          { name: 'Under 1 second', odds: { back: 2.50, lay: 2.52 } },
          { name: '1-2 seconds', odds: { back: 2.20, lay: 2.22 } },
          { name: 'Over 2 seconds', odds: { back: 2.80, lay: 2.82 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 14:30',
    event: 'Henley Royal Regatta',
    competition: 'Women\'s Double Sculls',
    isBookmarked: false,
    matchInfo: {
      venue: 'River Thames',
      course: 'Henley Course'
    },
    teams: [
      {
        name: 'Australia',
        country: 'AUS',
        rank: '1',
        odds: { back: 1.95, lay: 1.97 }
      },
      {
        name: 'New Zealand',
        country: 'NZL',
        rank: '2',
        odds: { back: 2.05, lay: 2.07 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Australia', odds: { back: 1.95, lay: 1.97 } },
          { name: 'New Zealand', odds: { back: 2.05, lay: 2.07 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 09:00',
    event: 'European Rowing Championships',
    competition: 'Lightweight Men\'s Four',
    isBookmarked: true,
    matchInfo: {
      venue: 'Malta Lake',
      course: 'International Course'
    },
    teams: [
      {
        name: 'Italy',
        country: 'ITA',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Denmark',
        country: 'DEN',
        rank: '2',
        odds: { back: 2.15, lay: 2.17 }
      },
      {
        name: 'Ireland',
        country: 'IRL',
        rank: '3',
        odds: { back: 3.50, lay: 3.52 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Italy', odds: { back: 1.75, lay: 1.77 } },
          { name: 'Denmark', odds: { back: 2.15, lay: 2.17 } },
          { name: 'Ireland', odds: { back: 3.50, lay: 3.52 } }
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

const RowingDashboard = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = events.filter(event => {
    switch (filter) {
      case 'live':
        return event.status === 'LIVE';
      case 'today':
        return event.status.includes('Today');
      case 'upcoming':
        return event.status.includes('Tomorrow');
      default:
        return true;
    }
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>
          <FontAwesomeIcon icon={faShip} className={styles.sportIcon} />
          Rowing
        </h1>
        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Events
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

      <div className={styles.eventsContainer}>
        {filteredEvents.map(event => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <div className={styles.eventInfo}>
                <span className={styles.event}>{event.event}</span>
                <span className={styles.competition}>{event.competition}</span>
                <div className={styles.venueInfo}>
                  <span className={styles.venue}>{event.matchInfo.venue}</span>
                  {event.matchInfo.course && (
                    <span className={styles.course}>{event.matchInfo.course}</span>
                  )}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${event.isBookmarked ? styles.active : ''}`}
              />
            </div>
            <div className={styles.eventDetails}>
              <div className={styles.status}>{event.status}</div>
              {event.raceInfo && (
                <div className={styles.raceInfo}>
                  <div className={styles.distance}>
                    <span>Distance: {event.raceInfo.distance}</span>
                    <span>Current: {event.raceInfo.currentPosition}</span>
                  </div>
                  <div className={styles.splits}>
                    {event.raceInfo.splits.map((split, index) => (
                      <div key={index} className={styles.split}>
                        <span className={styles.position}>{split.position}</span>
                        <div className={styles.times}>
                          {split.times.map((time, timeIndex) => (
                            <span key={timeIndex}>{time}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {event.statistics && (
                <div className={styles.statistics}>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Stroke Rate</span>
                    <div className={styles.statValues}>
                      <div className={styles.current}>
                        {event.statistics.strokeRate.current.map((rate, index) => (
                          <span key={index}>{rate}</span>
                        ))}
                      </div>
                      <div className={styles.average}>
                        {event.statistics.strokeRate.average.map((rate, index) => (
                          <span key={index}>{rate}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Speed (m/s)</span>
                    <div className={styles.statValues}>
                      <div className={styles.current}>
                        {event.statistics.speed.current.map((speed, index) => (
                          <span key={index}>{speed}</span>
                        ))}
                      </div>
                      <div className={styles.average}>
                        {event.statistics.speed.average.map((speed, index) => (
                          <span key={index}>{speed}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.teams}>
                {event.teams.map((team, index) => (
                  <div key={index} className={styles.team}>
                    <div className={styles.teamInfo}>
                      <span className={styles.teamName}>{team.name}</span>
                      <div className={styles.teamDetails}>
                        <span className={styles.country}>{team.country}</span>
                        <span className={styles.rank}>Rank: {team.rank}</span>
                      </div>
                    </div>
                    <OddsButton odds={team.odds} isLocked={event.isLocked} />
                  </div>
                ))}
              </div>
              {event.markets && (
                <div className={styles.markets}>
                  {event.markets.map((market, index) => (
                    <div key={index} className={styles.market}>
                      <div className={styles.marketName}>{market.name}</div>
                      <div className={styles.options}>
                        {market.options.map((option, optIndex) => (
                          <div key={optIndex} className={styles.option}>
                            <span className={styles.optionName}>{option.name}</span>
                            <OddsButton odds={option.odds} isLocked={event.isLocked} />
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

export default RowingDashboard;
