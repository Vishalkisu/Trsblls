import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGavel,
  faBaseballBall,
  faFootballBall,
  faCircle,
  faGamepad,
  faBasketball,
  faVolleyball,
  faHockeyPuck,
  faHandFist,
  faPersonRunning,
  faGolfBall,
  faChess,
  faBicycle,
  faMotorcycle,
  faCar,
  faBullseye,
  faShip
} from '@fortawesome/free-solid-svg-icons';
import styles from './Filters.module.css';

interface SportFilter {
  name: string;
  icon: any;
  count?: number;
}

const sportFilters: SportFilter[] = [
  { name: 'Politics', icon: faGavel, count: 1 },
  { name: 'Cricket', icon: faBaseballBall, count: 23 },
  { name: 'Football', icon: faFootballBall, count: 98 },
  { name: 'Tennis', icon: faCircle, count: 38 },
  { name: 'Table Tennis', icon: faCircle, count: 118 },
  { name: 'Badminton', icon: faCircle },
  { name: 'Esoccer', icon: faFootballBall, count: 16 },
  { name: 'Basketball', icon: faBasketball, count: 117 },
  { name: 'Volleyball', icon: faVolleyball, count: 60 },
  { name: 'Snooker', icon: faBullseye, count: 4 },
  { name: 'Ice Hockey', icon: faHockeyPuck, count: 35 },
  { name: 'E Games', icon: faGamepad, count: 8 },
  { name: 'Futsal', icon: faFootballBall, count: 2 },
  { name: 'Handball', icon: faHandFist },
  { name: 'Kabaddi', icon: faPersonRunning, count: 2 },
  { name: 'Golf', icon: faGolfBall },
  { name: 'Rugby League', icon: faFootballBall },
  { name: 'Boxing', icon: faHandFist, count: 1 },
  { name: 'Beach Volleyball', icon: faVolleyball },
  { name: 'Mixed Martial Arts', icon: faHandFist },
  { name: 'MotoGP', icon: faMotorcycle },
  { name: 'Chess', icon: faChess, count: 4 },
  { name: 'Cycling', icon: faBicycle },
  { name: 'Motorbikes', icon: faMotorcycle },
  { name: 'Athletics', icon: faPersonRunning },
  { name: 'Basketball 3X3', icon: faBasketball },
  { name: 'Virtual sports', icon: faGamepad, count: 1 },
  { name: 'Motor Sports', icon: faCar },
  { name: 'Baseball', icon: faBaseballBall },
  { name: 'Rugby Union', icon: faFootballBall },
  { name: 'Darts', icon: faBullseye },
  { name: 'American Football', icon: faFootballBall, count: 3 },
  { name: 'Soccer', icon: faFootballBall },
  { name: 'Esports', icon: faGamepad },
  { name: 'Boat Racing', icon: faShip }
];

const Filters = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        {sportFilters.map((filter, index) => (
          <button key={index} className={styles.filterItem}>
            <FontAwesomeIcon icon={filter.icon} className={styles.icon} />
            <span className={styles.name}>{filter.name}</span>
            {filter.count !== undefined && (
              <span className={styles.count}>({filter.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
