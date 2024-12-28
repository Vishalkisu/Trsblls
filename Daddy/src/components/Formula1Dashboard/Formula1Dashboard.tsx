import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Formula1Dashboard.module.css';

// Mock data for F1 races
const races = [
  {
    id: 1,
    status: 'LIVE',
    event: 'Monaco Grand Prix',
    circuit: 'Circuit de Monaco',
    competition: 'Formula 1 2024',
    isBookmarked: true,
    raceInfo: {
      lap: '45/78',
      leader: 'Max Verstappen',
      gap: '+3.2s',
      fastestLap: '1:13.297'
    },
    topDrivers: [
      { position: '1', name: 'Max Verstappen', team: 'Red Bull Racing' },
      { position: '2', name: 'Charles Leclerc', team: 'Ferrari' },
      { position: '3', name: 'Lewis Hamilton', team: 'Mercedes' }
    ],
    odds: {
      race: {
        'Max Verstappen': { back: 1.45, lay: 1.47 },
        'Charles Leclerc': { back: 3.20, lay: 3.22 },
        'Lewis Hamilton': { back: 4.50, lay: 4.52 }
      },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 14:00',
    event: 'British Grand Prix',
    circuit: 'Silverstone Circuit',
    competition: 'Formula 1 2024',
    isBookmarked: true,
    additionalInfo: 'Qualifying Session',
    odds: {
      qualifying: {
        'Lewis Hamilton': { back: 2.10, lay: 2.12 },
        'Max Verstappen': { back: 1.90, lay: 1.92 },
        'George Russell': { back: 4.50, lay: 4.52 }
      },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    event: 'Italian Grand Prix',
    circuit: 'Monza',
    competition: 'Formula 1 2024',
    isBookmarked: false,
    additionalInfo: 'Practice Session 3',
    odds: {
      practice: {
        'Carlos Sainz': { back: 3.50, lay: 3.52 },
        'Charles Leclerc': { back: 3.20, lay: 3.22 },
        'Max Verstappen': { back: 1.80, lay: 1.82 }
      },
      isLocked: true
    }
  },
  {
    id: 4,
    status: 'LIVE',
    event: 'Singapore Grand Prix',
    circuit: 'Marina Bay Street Circuit',
    competition: 'Formula 1 2024',
    isBookmarked: true,
    raceInfo: {
      lap: '32/61',
      leader: 'Charles Leclerc',
      gap: '+1.8s',
      fastestLap: '1:45.623'
    },
    topDrivers: [
      { position: '1', name: 'Charles Leclerc', team: 'Ferrari' },
      { position: '2', name: 'Max Verstappen', team: 'Red Bull Racing' },
      { position: '3', name: 'Lando Norris', team: 'McLaren' }
    ],
    odds: {
      race: {
        'Charles Leclerc': { back: 1.75, lay: 1.77 },
        'Max Verstappen': { back: 2.20, lay: 2.22 },
        'Lando Norris': { back: 5.50, lay: 5.52 }
      },
      isLocked: false
    }
  },
  {
    id: 5,
    status: 'Tomorrow 13:00',
    event: 'Japanese Grand Prix',
    circuit: 'Suzuka Circuit',
    competition: 'Formula 1 2024',
    isBookmarked: false,
    additionalInfo: 'Sprint Race',
    odds: {
      sprint: {
        'Max Verstappen': { back: 1.65, lay: 1.67 },
        'Sergio Perez': { back: 3.80, lay: 3.82 },
        'Lewis Hamilton': { back: 4.20, lay: 4.22 }
      },
      isLocked: false
    }
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

const Formula1Dashboard = () => {
  const [filter, setFilter] = useState('all');

  const filteredRaces = races.filter(race => {
    switch (filter) {
      case 'live':
        return race.status === 'LIVE';
      case 'today':
        return race.status.includes('Today');
      case 'upcoming':
        return race.status.includes('Tomorrow');
      default:
        return true;
    }
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>
          <FontAwesomeIcon icon={faCar} className={styles.sportIcon} />
          Formula 1
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

      <div className={styles.racesContainer}>
        {filteredRaces.map(race => (
          <div key={race.id} className={styles.raceCard}>
            <div className={styles.raceHeader}>
              <div className={styles.raceInfo}>
                <span className={styles.competition}>{race.competition}</span>
                <span className={styles.event}>{race.event}</span>
                <span className={styles.circuit}>{race.circuit}</span>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${race.isBookmarked ? styles.active : ''}`}
              />
            </div>
            <div className={styles.raceDetails}>
              <div className={styles.status}>{race.status}</div>
              {race.raceInfo && (
                <div className={styles.liveInfo}>
                  <div className={styles.lap}>Lap {race.raceInfo.lap}</div>
                  <div className={styles.leader}>Leader: {race.raceInfo.leader}</div>
                  <div className={styles.gap}>Gap: {race.raceInfo.gap}</div>
                  <div className={styles.fastestLap}>Fastest Lap: {race.raceInfo.fastestLap}</div>
                </div>
              )}
              {race.topDrivers && (
                <div className={styles.standings}>
                  {race.topDrivers.map(driver => (
                    <div key={driver.position} className={styles.driver}>
                      <span className={styles.position}>P{driver.position}</span>
                      <span className={styles.driverName}>{driver.name}</span>
                      <span className={styles.team}>{driver.team}</span>
                    </div>
                  ))}
                </div>
              )}
              {race.additionalInfo && (
                <div className={styles.additionalInfo}>{race.additionalInfo}</div>
              )}
            </div>
            <div className={styles.oddsContainer}>
              {Object.entries(race.odds[Object.keys(race.odds)[0]]).map(([driver, odds]) => (
                <div key={driver} className={styles.oddsRow}>
                  <span className={styles.driverName}>{driver}</span>
                  <OddsButton odds={odds} isLocked={race.odds.isLocked} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formula1Dashboard;
