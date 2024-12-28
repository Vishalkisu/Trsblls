import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './ClimbingDashboard.module.css';

// Mock data for climbing events
const events = [
  {
    id: 1,
    status: 'LIVE',
    event: 'IFSC World Cup',
    competition: 'Lead Climbing Final',
    isBookmarked: true,
    matchInfo: {
      round: 'Final',
      category: 'Men\'s Lead',
      venue: 'Innsbruck Climbing Center',
      wall: 'Main Wall'
    },
    conditions: {
      temperature: '21°C',
      humidity: '45%',
      attempts: '8 minutes',
      difficulty: '8c+'
    },
    currentInfo: {
      climber: 'Adam Ondra',
      height: '35m',
      holds: '42/45',
      time: '4:23',
      attempts: [
        { climber: 'Adam Ondra', height: '35m', time: '4:23', score: '42+' },
        { climber: 'Jakob Schubert', height: '32m', time: '5:12', score: '39' },
        { climber: 'Alberto Ginés López', height: '30m', time: '4:45', score: '37+' }
      ]
    },
    statistics: {
      topouts: '1/8',
      averageHeight: '28m',
      highestPoint: '35m'
    },
    athletes: [
      {
        name: 'Adam Ondra',
        country: 'CZE',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Jakob Schubert',
        country: 'AUT',
        rank: '2',
        odds: { back: 2.20, lay: 2.22 }
      },
      {
        name: 'Alberto Ginés López',
        country: 'ESP',
        rank: '3',
        odds: { back: 4.50, lay: 4.52 }
      }
    ],
    markets: [
      {
        name: 'Event Winner',
        options: [
          { name: 'Adam Ondra', odds: { back: 1.65, lay: 1.67 } },
          { name: 'Jakob Schubert', odds: { back: 2.20, lay: 2.22 } },
          { name: 'Alberto Ginés López', odds: { back: 4.50, lay: 4.52 } }
        ]
      },
      {
        name: 'Top Achieved',
        options: [
          { name: 'Yes', odds: { back: 1.90, lay: 1.92 } },
          { name: 'No', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 16:00',
    event: 'IFSC World Cup',
    competition: 'Bouldering Semi-Finals',
    isBookmarked: false,
    matchInfo: {
      venue: 'Tokyo Climbing Center',
      wall: 'Boulder Wall'
    },
    conditions: {
      temperature: '23°C',
      humidity: '50%',
      attempts: '4 minutes per problem',
      difficulty: 'V10-V12'
    },
    athletes: [
      {
        name: 'Tomoa Narasaki',
        country: 'JPN',
        rank: '1',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'Nathaniel Coleman',
        country: 'USA',
        rank: '4',
        odds: { back: 2.50, lay: 2.52 }
      }
    ],
    markets: [
      {
        name: 'To Qualify',
        options: [
          { name: 'Tomoa Narasaki', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Nathaniel Coleman', odds: { back: 2.50, lay: 2.52 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 10:00',
    event: 'IFSC European Championship',
    competition: 'Speed Climbing Final',
    isBookmarked: true,
    matchInfo: {
      venue: 'Paris Climbing Arena',
      wall: 'Speed Wall'
    },
    athletes: [
      {
        name: 'Aleksandra Miroslaw',
        country: 'POL',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Aries Susanti Rahayu',
        country: 'IDN',
        rank: '2',
        odds: { back: 2.10, lay: 2.12 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Aleksandra Miroslaw', odds: { back: 1.75, lay: 1.77 } },
          { name: 'Aries Susanti Rahayu', odds: { back: 2.10, lay: 2.12 } }
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

const ClimbingDashboard = () => {
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
          <FontAwesomeIcon icon={faMountain} className={styles.sportIcon} />
          Climbing
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
                  {event.matchInfo.wall && (
                    <span className={styles.wall}>{event.matchInfo.wall}</span>
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
              {event.conditions && (
                <div className={styles.conditions}>
                  <div className={styles.conditionItem}>
                    <span>Temperature</span>
                    <span>{event.conditions.temperature}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Humidity</span>
                    <span>{event.conditions.humidity}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Time Limit</span>
                    <span>{event.conditions.attempts}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Grade</span>
                    <span>{event.conditions.difficulty}</span>
                  </div>
                </div>
              )}
              {event.currentInfo && (
                <div className={styles.currentInfo}>
                  <div className={styles.currentClimber}>
                    <span className={styles.climberName}>{event.currentInfo.climber}</span>
                    <div className={styles.climberStats}>
                      <span>Height: {event.currentInfo.height}</span>
                      <span>Holds: {event.currentInfo.holds}</span>
                      <span>Time: {event.currentInfo.time}</span>
                    </div>
                  </div>
                  <div className={styles.attempts}>
                    {event.currentInfo.attempts.map((attempt, index) => (
                      <div key={index} className={styles.attempt}>
                        <span className={styles.attemptClimber}>{attempt.climber}</span>
                        <span className={styles.attemptHeight}>{attempt.height}</span>
                        <span className={styles.attemptTime}>{attempt.time}</span>
                        <span className={styles.attemptScore}>{attempt.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {event.statistics && (
                <div className={styles.statistics}>
                  <div className={styles.statItem}>
                    <span>Tops</span>
                    <span>{event.statistics.topouts}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Average Height</span>
                    <span>{event.statistics.averageHeight}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Highest Point</span>
                    <span>{event.statistics.highestPoint}</span>
                  </div>
                </div>
              )}
              <div className={styles.athletes}>
                {event.athletes.map((athlete, index) => (
                  <div key={index} className={styles.athlete}>
                    <div className={styles.athleteInfo}>
                      <span className={styles.athleteName}>{athlete.name}</span>
                      <div className={styles.athleteDetails}>
                        <span className={styles.country}>{athlete.country}</span>
                        <span className={styles.rank}>Rank: {athlete.rank}</span>
                      </div>
                    </div>
                    <OddsButton odds={athlete.odds} isLocked={event.isLocked} />
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

export default ClimbingDashboard;
