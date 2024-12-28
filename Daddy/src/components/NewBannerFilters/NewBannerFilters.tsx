import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faGavel,
  faGamepad,
  faBaseballBall,
  faCircle,
  faBasketball,
  faVolleyball,
  faHockeyPuck,
  faGolfBall,
  faHandFist,
  faChess,
  faBicycle,
  faMotorcycle,
  faPersonRunning,
  faCrosshairs,
  faFootball,
  faShip,
  faSoccerBall,
  faWeightHanging
} from '@fortawesome/free-solid-svg-icons';
import styles from './NewBannerFilters.module.css';

interface SportFilter {
  name: string;
  icon: any;
  count?: number;
  path: string;
}

const NewBannerFilters = () => {
  const navigate = useNavigate();

  const filters: SportFilter[] = [
    { name: 'Cricket', icon: faBaseballBall, count: 25, path: '/cricket' },
    { name: 'Football', icon: faFootball, count: 18, path: '/football' },
    { name: 'Tennis', icon: faCircle, count: 38, path: '/tennis' },
    { name: 'Table Tennis', icon: faCircle, count: 118, path: '/table-tennis' },
    { name: 'Badminton', icon: faCircle, count: 12, path: '/badminton' },
    { name: 'Esoccer', icon: faGamepad, count: 16, path: '/esoccer' },
    { name: 'Basketball', icon: faBasketball, count: 117, path: '/basketball' },
    { name: 'Volleyball', icon: faVolleyball, count: 60, path: '/volleyball' },
    { name: 'Beach Volleyball', icon: faVolleyball, count: 15, path: '/beach-volleyball' },
    { name: 'Ice Hockey', icon: faHockeyPuck, count: 45, path: '/ice-hockey' },
    { name: 'Golf', icon: faGolfBall, count: 8, path: '/golf' },
    { name: 'Boxing', icon: faHandFist, count: 5, path: '/boxing' },
    { name: 'Mixed Martial Arts', icon: faHandFist, count: 10, path: '/mixed-martial-arts' },
    { name: 'Chess', icon: faChess, count: 12, path: '/chess' },
    { name: 'Cycling', icon: faBicycle, count: 3, path: '/cycling' },
    { name: 'MotoGP', icon: faMotorcycle, count: 6, path: '/motogp' },
    { name: 'Athletics', icon: faPersonRunning, count: 4, path: '/athletics' },
    { name: 'Darts', icon: faCrosshairs, count: 9, path: '/darts' },
    { name: 'Soccer', icon: faSoccerBall, count: 150, path: '/soccer' }
  ];

  const handleFilterClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={styles.filterItem}
              onClick={() => handleFilterClick(filter.path)}
            >
              <FontAwesomeIcon icon={filter.icon} className={styles.icon} />
              <span>{filter.name}</span>
              {filter.count && <span className={styles.count}>{filter.count}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBannerFilters;
