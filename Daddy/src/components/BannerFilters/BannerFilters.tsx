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
import styles from './BannerFilters.module.css';

interface SportFilter {
  name: string;
  icon: any;
  count?: number;
  path: string;  // URL path for the sport
}

const sportFilters: SportFilter[] = [
  { name: 'Politics', icon: faGavel, count: 1, path: '/politics' },
  { name: 'Cricket', icon: faBaseballBall, count: 23, path: '/cricket' },
  { name: 'Football', icon: faFootball, count: 98, path: '/football' },
  { name: 'Tennis', icon: faCircle, count: 38, path: '/tennis' },
  { name: 'Table Tennis', icon: faCircle, count: 118, path: '/table-tennis' },
  { name: 'Badminton', icon: faCircle, path: '/badminton' },
  { name: 'Esoccer', icon: faSoccerBall, count: 16, path: '/esoccer' },
  { name: 'Basketball', icon: faBasketball, count: 117, path: '/basketball' },
  { name: 'Volleyball', icon: faVolleyball, count: 60, path: '/volleyball' },
  { name: 'Snooker', icon: faCrosshairs, count: 4, path: '/snooker' },
  { name: 'Ice Hockey', icon: faHockeyPuck, count: 35, path: '/ice-hockey' },
  { name: 'E Games', icon: faGamepad, count: 8, path: '/egames' },
  { name: 'Futsal', icon: faFootball, count: 2, path: '/futsal' },
  { name: 'Handball', icon: faCircle, path: '/handball' },
  { name: 'Kabaddi', icon: faPersonRunning, count: 2, path: '/kabaddi' },
  { name: 'Golf', icon: faGolfBall, path: '/golf' },
  { name: 'Rugby League', icon: faFootball, path: '/rugby-league' },
  { name: 'Boxing', icon: faHandFist, count: 1, path: '/boxing' },
  { name: 'Beach Volleyball', icon: faVolleyball, count: 2, path: '/beach-volleyball' },
  { name: 'Mixed Martial Arts', icon: faHandFist, count: 3, path: '/mixed-martial-arts' },
  { name: 'MotoGP', icon: faMotorcycle, count: 2, path: '/motogp' },
  { name: 'Chess', icon: faChess, count: 4, path: '/chess' },
  { name: 'Cycling', icon: faBicycle, path: '/cycling' },
  { name: 'Motorbikes', icon: faMotorcycle, path: '/motorbikes' },
  { name: 'Athletics', icon: faPersonRunning, path: '/athletics' },
  { name: 'Basketball 3X3', icon: faBasketball, path: '/basketball-3x3' },
  { name: 'Virtual sports', icon: faGamepad, count: 1, path: '/virtual-sports' },
  { name: 'Motor Sports', icon: faMotorcycle, path: '/motor-sports' },
  { name: 'Baseball', icon: faBaseballBall, path: '/baseball' },
  { name: 'Rugby Union', icon: faFootball, path: '/rugby-union' },
  { name: 'Darts', icon: faCrosshairs, path: '/darts' },
  { name: 'American Football', icon: faFootball, count: 3, path: '/american-football' },
  { name: 'Soccer', icon: faFootball, path: '/soccer' },
  { name: 'Esports', icon: faGamepad, path: '/esports' },
  { name: 'Boat Racing', icon: faShip, path: '/boat-racing' },
  { name: 'Sumo', icon: faWeightHanging, count: 3, path: '/sumo' }
];

const BannerFilters = () => {
  const navigate = useNavigate();

  const handleSportClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        {sportFilters.map((filter, index) => (
          <button
            key={index}
            className={styles.filterItem}
            onClick={() => handleSportClick(filter.path)}
          >
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

export default BannerFilters;
