import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHorse, faLock, faBookmark, faInfoCircle, faClock, faMapMarkerAlt, 
  faTrophy, faMoneyBillWave, faChartLine, faUserAlt, faCalendarAlt,
  faCloudSun, faRulerHorizontal, faFlag, faStopwatch, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useBetSlipStore } from '../../store/betSlipStore';
import styles from './HorseRacingDashboard.module.css';

interface Odds {
  back: number;
  lay: number;
}

interface Runner {
  position: string;
  number: string;
  name: string;
  jockey: string;
  trainer: string;
  age: string;
  weight: string;
  form: string;
  draw: string;
  ownerSilks: string;
  lastRan: string;
  courseForm: string;
  distanceForm: string;
  goingForm: string;
  odds: Odds;
  recentPerformance: {
    position: string;
    course: string;
    distance: string;
    going: string;
    date: string;
  }[];
}

interface RaceInfo {
  distance: string;
  going: string;
  class: string;
  purse: string;
  weather: string;
  temperature: string;
  surface: string;
  railPosition: string;
  penetrometer: string;
  trackCondition: string;
  raceType: string;
  ageRestriction: string;
  weights: string;
}

interface RaceStats {
  totalPrizePool: string;
  numberOfRunners: number;
  distanceRecord: string;
  lastYearWinner: string;
  courseBestTime: string;
}

interface Race {
  id: number;
  status: string;
  event: string;
  track: string;
  competition: string;
  featured: boolean;
  raceNumber: number;
  raceTime: string;
  raceInfo: RaceInfo;
  runners: Runner[];
  isLocked: boolean;
  nextRace: string;
  raceStats: RaceStats | null;
}

const initialRaces: Race[] = [
  {
    id: 1,
    status: 'LIVE',
    event: 'Royal Ascot',
    track: 'Ascot Racecourse',
    competition: 'Gold Cup Day',
    featured: true,
    raceNumber: 3,
    raceTime: '15:45',
    raceInfo: {
      distance: '2 miles 4 furlongs',
      going: 'Good to Firm',
      class: 'Group 1',
      purse: '₹500,000',
      weather: 'Sunny',
      temperature: '18°C',
      surface: 'Turf',
      railPosition: 'True',
      penetrometer: '3.2',
      trackCondition: 'Fast',
      raceType: 'Flat',
      ageRestriction: '4yo+',
      weights: 'Weight for Age'
    },
    runners: [
      { 
        position: '1',
        number: '7',
        name: 'Desert Crown',
        jockey: 'R. Moore',
        trainer: 'Sir M. Stoute',
        age: '4',
        weight: '9-0',
        form: '1-1121',
        draw: '3',
        ownerSilks: 'Purple, white star',
        lastRan: '14 days ago',
        courseForm: '112',
        distanceForm: '111',
        goingForm: '11212',
        odds: { back: 2.50, lay: 2.52 },
        recentPerformance: [
          { position: '1st', course: 'Ascot', distance: '2m', going: 'Good', date: '14 days ago' },
          { position: '1st', course: 'York', distance: '2m2f', going: 'Good to Firm', date: '35 days ago' }
        ]
      },
      {
        position: '2',
        number: '4',
        name: 'Emily Upjohn',
        jockey: 'F. Dettori',
        trainer: 'J. Gosden',
        age: '5',
        weight: '9-2',
        form: '2-1112',
        draw: '5',
        ownerSilks: 'Green, gold sash',
        lastRan: '21 days ago',
        courseForm: '121',
        distanceForm: '112',
        goingForm: '12211',
        odds: { back: 3.20, lay: 3.22 },
        recentPerformance: [
          { position: '2nd', course: 'York', distance: '2m', going: 'Good', date: '21 days ago' },
          { position: '1st', course: 'Newmarket', distance: '1m6f', going: 'Good to Firm', date: '45 days ago' }
        ]
      }
    ],
    isLocked: false,
    nextRace: '15:45',
    raceStats: {
      totalPrizePool: '₹750,000',
      numberOfRunners: 12,
      distanceRecord: '2:25.33',
      lastYearWinner: 'Golden Crown (4-1)',
      courseBestTime: '2:24.77'
    }
  }
];

const HorseRacingDashboard: React.FC = () => {
  const [races, setRaces] = useState(initialRaces);
  const [activeTab, setActiveTab] = useState('featured');
  const [selectedHorse, setSelectedHorse] = useState<string | null>(null);
  const addSelection = useBetSlipStore((state) => state.addSelection);
  const [selectedBets, setSelectedBets] = useState<{[key: string]: {type: 'back' | 'lay', odds: number}}>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setRaces(prevRaces => 
        prevRaces.map(race => ({
          ...race,
          runners: race.runners.map(runner => ({
            ...runner,
            odds: {
              back: Number((runner.odds.back + (Math.random() - 0.5) * 0.1).toFixed(2)),
              lay: Number((runner.odds.lay + (Math.random() - 0.5) * 0.1).toFixed(2)),
            }
          }))
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBetClick = (raceId: number, runner: any, type: 'back' | 'lay', odds: number) => {
    const betId = `${raceId}-${runner.name}-${type}`;
    setSelectedBets(prev => ({
      ...prev,
      [betId]: { type, odds }
    }));

    addSelection({
      id: betId,
      matchId: raceId.toString(),
      matchName: `${runner.name} - ${races.find(r => r.id === raceId)?.event || ''}`,
      selection: `${type === 'back' ? 'Back' : 'Lay'} ${runner.name}`,
      odds: odds,
      type: type
    });
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <div className={styles.mainTitle}>
          <FontAwesomeIcon icon={faHorse} className={styles.titleIcon} />
          <h1>Horse Racing</h1>
        </div>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'featured' ? styles.active : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured Races
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Races
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'results' ? styles.active : ''}`}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
        </div>
      </div>

      {races.map(race => (
        <div key={race.id} className={styles.raceCard}>
          <div className={styles.raceHeader}>
            <div className={styles.raceTitle}>
              <div className={styles.raceMeta}>
                <span className={styles.raceNumber}>Race {race.raceNumber}</span>
                <span className={styles.raceTime}>
                  <FontAwesomeIcon icon={faClock} /> {race.raceTime}
                </span>
                {race.status === 'LIVE' && (
                  <span className={styles.liveIndicator}>● LIVE</span>
                )}
              </div>
              <h2>{race.event}</h2>
              <div className={styles.venueInfo}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{race.track}</span>
                <span className={styles.raceClass}>{race.raceInfo.class}</span>
              </div>
            </div>

            <div className={styles.raceDetails}>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <FontAwesomeIcon icon={faRulerHorizontal} />
                  <span>{race.raceInfo.distance}</span>
                </div>
                <div className={styles.detailItem}>
                  <FontAwesomeIcon icon={faFlag} />
                  <span>{race.raceInfo.going}</span>
                </div>
                <div className={styles.detailItem}>
                  <FontAwesomeIcon icon={faCloudSun} />
                  <span>{race.raceInfo.weather} • {race.raceInfo.temperature}</span>
                </div>
                <div className={styles.detailItem}>
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <span>{race.raceInfo.purse}</span>
                </div>
              </div>
              <div className={styles.detailsRow}>
                <div className={styles.detailItem}>
                  <span>Surface: {race.raceInfo.surface}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Age: {race.raceInfo.ageRestriction}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Type: {race.raceInfo.raceType}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Weights: {race.raceInfo.weights}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.runnersTable}>
            <table>
              <thead>
                <tr>
                  <th>Draw</th>
                  <th>Horse</th>
                  <th>Jockey & Trainer</th>
                  <th>Form</th>
                  <th>Info</th>
                  <th>Back</th>
                  <th>Lay</th>
                </tr>
              </thead>
              <tbody>
                {race.runners.map(runner => {
                  const backBetId = `${race.id}-${runner.name}-back`;
                  const layBetId = `${race.id}-${runner.name}-lay`;
                  const isSelected = selectedHorse === runner.number;

                  return (
                    <tr 
                      key={runner.number} 
                      className={`${styles.runnerRow} ${isSelected ? styles.selected : ''}`}
                      onClick={() => setSelectedHorse(isSelected ? null : runner.number)}
                    >
                      <td className={styles.drawNumber}>{runner.draw}</td>
                      <td className={styles.horseInfo}>
                        <div className={styles.horseName}>
                          <span className={styles.number}>{runner.number}</span>
                          {runner.name}
                        </div>
                        <div className={styles.silks}>{runner.ownerSilks}</div>
                      </td>
                      <td className={styles.connections}>
                        <div className={styles.jockey}>
                          <FontAwesomeIcon icon={faUserAlt} /> {runner.jockey}
                        </div>
                        <div className={styles.trainer}>
                          <small>T: {runner.trainer}</small>
                        </div>
                      </td>
                      <td className={styles.form}>
                        <div className={styles.recentForm}>{runner.form}</div>
                        <div className={styles.formDetails}>
                          <small>Course: {runner.courseForm}</small>
                          <small>Distance: {runner.distanceForm}</small>
                        </div>
                      </td>
                      <td className={styles.info}>
                        <div>{runner.age}yo</div>
                        <div>{runner.weight}</div>
                        <small>Last ran: {runner.lastRan}</small>
                      </td>
                      <td>
                        <button
                          className={`${styles.oddsButton} ${styles.backButton} ${selectedBets[backBetId] ? styles.selected : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBetClick(race.id, runner, 'back', runner.odds.back);
                          }}
                          disabled={race.isLocked}
                        >
                          {runner.odds.back.toFixed(2)}
                        </button>
                      </td>
                      <td>
                        <button
                          className={`${styles.oddsButton} ${styles.layButton} ${selectedBets[layBetId] ? styles.selected : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBetClick(race.id, runner, 'lay', runner.odds.lay);
                          }}
                          disabled={race.isLocked}
                        >
                          {runner.odds.lay.toFixed(2)}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {race.raceStats && (
            <div className={styles.raceStats}>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
                <span>Total Prize: {race.raceStats.totalPrizePool}</span>
              </div>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faHorse} />
                <span>Runners: {race.raceStats.numberOfRunners}</span>
              </div>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faStopwatch} />
                <span>Record: {race.raceStats.distanceRecord}</span>
              </div>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faTrophy} />
                <span>Last Year: {race.raceStats.lastYearWinner}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorseRacingDashboard;
