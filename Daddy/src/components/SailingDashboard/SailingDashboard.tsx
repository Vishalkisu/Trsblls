import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './SailingDashboard.module.css';

// Mock data for sailing events
const events = [
  {
    id: 1,
    status: 'LIVE',
    event: 'America\'s Cup',
    competition: 'Final Race',
    isBookmarked: true,
    matchInfo: {
      race: 'Race 7',
      leg: 'Upwind Leg 3',
      venue: 'Auckland Harbor',
      course: 'Windward/Leeward'
    },
    conditions: {
      windSpeed: '15-18 knots',
      windDirection: '225°',
      seaState: 'Moderate',
      current: '0.8 knots'
    },
    raceInfo: {
      distance: '6.8nm',
      currentLeg: '3/6',
      splits: [
        { position: 'Mark 1', times: ['+0.00', '+12.45'] },
        { position: 'Gate 2', times: ['+8.23', '+19.67'] }
      ]
    },
    statistics: {
      speed: {
        current: ['24.5', '23.8'],
        average: ['22.8', '22.3']
      },
      tacks: ['8', '9'],
      gybes: ['6', '7']
    },
    teams: [
      {
        name: 'Emirates Team New Zealand',
        country: 'NZL',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Luna Rossa Prada Pirelli',
        country: 'ITA',
        rank: '2',
        odds: { back: 2.20, lay: 2.22 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Emirates Team New Zealand', odds: { back: 1.75, lay: 1.77 } },
          { name: 'Luna Rossa Prada Pirelli', odds: { back: 2.20, lay: 2.22 } }
        ]
      },
      {
        name: 'Winning Margin',
        options: [
          { name: 'Under 30 seconds', odds: { back: 2.50, lay: 2.52 } },
          { name: '30-60 seconds', odds: { back: 2.20, lay: 2.22 } },
          { name: 'Over 60 seconds', odds: { back: 2.80, lay: 2.82 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 15:30',
    event: 'SailGP',
    competition: 'Sydney Event',
    isBookmarked: false,
    matchInfo: {
      race: 'Fleet Race 3',
      venue: 'Sydney Harbor',
      course: 'Harbor Course'
    },
    conditions: {
      windSpeed: '12-15 knots',
      windDirection: '180°',
      seaState: 'Light',
      current: '0.5 knots'
    },
    teams: [
      {
        name: 'Australia SailGP Team',
        country: 'AUS',
        rank: '1',
        odds: { back: 1.90, lay: 1.92 }
      },
      {
        name: 'Great Britain SailGP Team',
        country: 'GBR',
        rank: '2',
        odds: { back: 2.10, lay: 2.12 }
      },
      {
        name: 'United States SailGP Team',
        country: 'USA',
        rank: '3',
        odds: { back: 3.50, lay: 3.52 }
      }
    ],
    markets: [
      {
        name: 'Race Winner',
        options: [
          { name: 'Australia SailGP Team', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Great Britain SailGP Team', odds: { back: 2.10, lay: 2.12 } },
          { name: 'United States SailGP Team', odds: { back: 3.50, lay: 3.52 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 10:00',
    event: 'Ocean Race',
    competition: 'Leg Start',
    isBookmarked: true,
    matchInfo: {
      leg: 'Leg 4',
      venue: 'Cape Town',
      course: 'Southern Ocean'
    },
    teams: [
      {
        name: '11th Hour Racing',
        country: 'USA',
        rank: '1',
        odds: { back: 2.00, lay: 2.02 }
      },
      {
        name: 'Team Malizia',
        country: 'MON',
        rank: '2',
        odds: { back: 2.20, lay: 2.22 }
      }
    ],
    markets: [
      {
        name: 'Leg Winner',
        options: [
          { name: '11th Hour Racing', odds: { back: 2.00, lay: 2.02 } },
          { name: 'Team Malizia', odds: { back: 2.20, lay: 2.22 } }
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

const SailingDashboard = () => {
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
          Sailing
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
              {event.conditions && (
                <div className={styles.conditions}>
                  <div className={styles.conditionItem}>
                    <span>Wind Speed</span>
                    <span>{event.conditions.windSpeed}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Direction</span>
                    <span>{event.conditions.windDirection}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Sea State</span>
                    <span>{event.conditions.seaState}</span>
                  </div>
                  <div className={styles.conditionItem}>
                    <span>Current</span>
                    <span>{event.conditions.current}</span>
                  </div>
                </div>
              )}
              {event.raceInfo && (
                <div className={styles.raceInfo}>
                  <div className={styles.raceStatus}>
                    <span>Distance: {event.raceInfo.distance}</span>
                    <span>Leg: {event.raceInfo.currentLeg}</span>
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
                    <span className={styles.statTitle}>Speed (knots)</span>
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
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Tacks</span>
                    <div className={styles.statValues}>
                      {event.statistics.tacks.map((tacks, index) => (
                        <span key={index}>{tacks}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.statGroup}>
                    <span className={styles.statTitle}>Gybes</span>
                    <div className={styles.statValues}>
                      {event.statistics.gybes.map((gybes, index) => (
                        <span key={index}>{gybes}</span>
                      ))}
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

export default SailingDashboard;
