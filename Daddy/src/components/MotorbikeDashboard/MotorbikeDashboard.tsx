import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './MotorbikeDashboard.module.css';

// Mock data for motorbike races
const races = [
  {
    id: 1,
    status: 'LIVE',
    rider1: 'Marc Marquez',
    rider2: 'Fabio Quartararo',
    competition: 'MotoGP - Spanish GP',
    isBookmarked: true,
    position: 'P1 - P2',
    additionalInfo: 'Lap 15/25',
    odds: {
      rider1: { back: 1.85, lay: 1.87 },
      rider2: { back: 2.20, lay: 2.25 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Starting in 30:00',
    rider1: 'Johann Zarco',
    rider2: 'Jack Miller',
    competition: 'MotoGP - Qualifying',
    isBookmarked: false,
    additionalInfo: 'Q2 Session',
    odds: {
      rider1: { back: 2.10, lay: 2.15 },
      rider2: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    rider1: 'Francesco Bagnaia',
    rider2: 'Aleix Espargaro',
    competition: 'MotoGP - Main Race',
    isBookmarked: true,
    additionalInfo: 'Grid Position: P1 - P2',
    odds: {
      rider1: { back: 1.75, lay: 1.77 },
      rider2: { back: 2.30, lay: 2.35 },
      isLocked: true
    }
  }
];

const OddsButton = ({ type, odds, isLocked }) => {
  const handleClick = () => {
    if (!isLocked) {
      console.log(`Bet placed for ${type} with odds: ${odds.back}`);
    }
  };

  return (
    <div className={`${styles.oddsButton} ${isLocked ? styles.locked : ''}`} onClick={handleClick}>
      {isLocked && <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />}
      <div className={styles.oddsValues}>
        <span>{odds.back}</span>
        <span>{odds.lay}</span>
      </div>
    </div>
  );
};

const MotorbikeDashboard = () => {
  const [bookmarkedRaces, setBookmarkedRaces] = useState(races);

  const toggleBookmark = (raceId) => {
    setBookmarkedRaces(prevRaces =>
      prevRaces.map(race =>
        race.id === raceId
          ? { ...race, isBookmarked: !race.isBookmarked }
          : race
      )
    );
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h2>
          <FontAwesomeIcon icon={faMotorcycle} className={styles.sportIcon} />
          Motorbike Racing
        </h2>
      </div>
      <div className={styles.raceList}>
        {bookmarkedRaces.map(race => (
          <div key={race.id} className={styles.raceCard}>
            <div className={styles.raceHeader}>
              <span className={styles.status}>{race.status}</span>
              <span className={styles.competition}>{race.competition}</span>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${race.isBookmarked ? styles.bookmarked : ''}`}
                onClick={() => toggleBookmark(race.id)}
              />
            </div>
            <div className={styles.raceInfo}>
              <div className={styles.riders}>
                <span>{race.rider1}</span>
                <span>{race.rider2}</span>
              </div>
              {race.position && (
                <div className={styles.position}>
                  <span>{race.position}</span>
                </div>
              )}
              <div className={styles.odds}>
                <OddsButton type="rider1" odds={race.odds.rider1} isLocked={race.odds.isLocked} />
                <OddsButton type="rider2" odds={race.odds.rider2} isLocked={race.odds.isLocked} />
              </div>
            </div>
            <div className={styles.additionalInfo}>
              {race.additionalInfo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotorbikeDashboard;
