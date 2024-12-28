import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './SurfingDashboard.module.css';

// Mock data for surfing events
const events = [
  {
    id: 1,
    status: 'LIVE',
    event: 'World Surf League Championship',
    competition: 'Men\'s Final',
    isBookmarked: true,
    matchInfo: {
      round: 'Final',
      heat: 'Heat 1',
      venue: 'Pipeline',
      location: 'Oahu, Hawaii'
    },
    conditions: {
      waveHeight: '6-8ft',
      wind: '10-15 knots',
      direction: 'Offshore',
      tide: 'Rising'
    },
    scores: {
      current: [
        { surfer: 'John John Florence', waves: ['9.50', '8.75'], total: '18.25' },
        { surfer: 'Gabriel Medina', waves: ['8.90', '8.60'], total: '17.50' },
      ],
      timeRemaining: '12:30'
    },
    statistics: {
      waves: {
        caught: ['8', '7'],
        priority: ['1', '2']
      },
      averageScore: ['8.45', '8.20']
    },
    surfers: [
      {
        name: 'John John Florence',
        country: 'USA',
        rank: '1',
        odds: { back: 1.85, lay: 1.87 }
      },
      {
        name: 'Gabriel Medina',
        country: 'BRA',
        rank: '2',
        odds: { back: 2.10, lay: 2.12 }
      }
    ],
    markets: [
      {
        name: 'Heat Winner',
        options: [
          { name: 'John John Florence', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Gabriel Medina', odds: { back: 2.10, lay: 2.12 } }
        ]
      },
      {
        name: 'Highest Single Wave Score',
        options: [
          { name: 'Over 9.5', odds: { back: 2.20, lay: 2.22 } },
          { name: 'Under 9.5', odds: { back: 1.70, lay: 1.72 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 15:00',
    event: 'Rip Curl Pro',
    competition: 'Women\'s Quarter Finals',
    isBookmarked: false,
    matchInfo: {
      venue: 'Bells Beach',
      location: 'Victoria, Australia'
    },
    conditions: {
      waveHeight: '4-6ft',
      wind: '5-10 knots',
      direction: 'Cross-shore',
      tide: 'Low'
    },
    surfers: [
      {
        name: 'Carissa Moore',
        country: 'USA',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Tyler Wright',
        country: 'AUS',
        rank: '3',
        odds: { back: 2.20, lay: 2.22 }
      }
    ],
    markets: [
      {
        name: 'Heat Winner',
        options: [
          { name: 'Carissa Moore', odds: { back: 1.75, lay: 1.77 } },
          { name: 'Tyler Wright', odds: { back: 2.20, lay: 2.22 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 08:00',
    event: 'Billabong Pro',
    competition: 'Men\'s Round of 16',
    isBookmarked: true,
    matchInfo: {
      venue: 'Teahupo\'o',
      location: 'Tahiti'
    },
    conditions: {
      waveHeight: '8-10ft',
      wind: '12 knots',
      direction: 'Cross-offshore',
      tide: 'Mid'
    },
    surfers: [
      {
        name: 'Italo Ferreira',
        country: 'BRA',
        rank: '2',
        odds: { back: 1.90, lay: 1.92 }
      },
      {
        name: 'Filipe Toledo',
        country: 'BRA',
        rank: '1',
        odds: { back: 1.95, lay: 1.97 }
      }
    ],
    markets: [
      {
        name: 'Heat Winner',
        options: [
          { name: 'Italo Ferreira', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Filipe Toledo', odds: { back: 1.95, lay: 1.97 } }
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

const SurfingDashboard = () => {
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
          <FontAwesomeIcon icon={faWater} className={styles.sportIcon} />
          Surfing
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
                  <span className={styles.location}>{event.matchInfo.location}</span>
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
                    <span>Wave Height</span>
                    <span>{event.conditions.waveHeight}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Wind</span>
                    <span>{event.conditions.wind}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Direction</span>
                    <span>{event.conditions.direction}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Tide</span>
                    <span>{event.conditions.tide}</span>
                  </div>
                </div>
              )}
              {event.scores && (
                <div className={styles.scoreBoard}>
                  <div className={styles.scores}>
                    {event.scores.current.map((score, index) => (
                      <div key={index} className={styles.surferScore}>
                        <span className={styles.surferName}>{score.surfer}</span>
                        <div className={styles.waves}>
                          {score.waves.map((wave, waveIndex) => (
                            <span key={waveIndex} className={styles.wave}>{wave}</span>
                          ))}
                        </div>
                        <span className={styles.total}>{score.total}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.timeRemaining}>
                    Time Remaining: {event.scores.timeRemaining}
                  </div>
                </div>
              )}
              {event.statistics && (
                <div className={styles.statistics}>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Waves Caught</span>
                    <div className={styles.statValues}>
                      {event.statistics.waves.caught.map((count, index) => (
                        <span key={index}>{count}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Priority</span>
                    <div className={styles.statValues}>
                      {event.statistics.waves.priority.map((priority, index) => (
                        <span key={index}>{priority}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Average Score</span>
                    <div className={styles.statValues}>
                      {event.statistics.averageScore.map((avg, index) => (
                        <span key={index}>{avg}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.surfers}>
                {event.surfers.map((surfer, index) => (
                  <div key={index} className={styles.surfer}>
                    <div className={styles.surferInfo}>
                      <span className={styles.surferName}>{surfer.name}</span>
                      <div className={styles.surferDetails}>
                        <span className={styles.country}>{surfer.country}</span>
                        <span className={styles.rank}>Rank: {surfer.rank}</span>
                      </div>
                    </div>
                    <OddsButton odds={surfer.odds} isLocked={event.isLocked} />
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

export default SurfingDashboard;
