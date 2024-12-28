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
  faSoccerBall
} from '@fortawesome/free-solid-svg-icons';
import styles from './BannerFilters.module.css';

interface SportFilter {
  name: string;
  icon: any;
  count?: number;
  route?: string;
}

const sportFilters: SportFilter[] = [
  { name: 'Politics', icon: faGavel, count: 1, route: '/politics' },
  { name: 'Cricket', icon: faBaseballBall, count: 23, route: '/cricket' },
  { name: 'Football', icon: faFootball, count: 98, route: '/football' },
  { name: 'Tennis', icon: faCircle, count: 38, route: '/tennis' },
  { name: 'Table Tennis', icon: faCircle, count: 118, route: '/table-tennis' },
  { name: 'Badminton', icon: faCircle, route: '/badminton' },
  { name: 'Esoccer', icon: faSoccerBall, count: 16, route: '/esoccer' },
  { name: 'Basketball', icon: faBasketball, count: 117, route: '/basketball' },
  { name: 'Volleyball', icon: faVolleyball, count: 60, route: '/volleyball' },
  { name: 'Snooker', icon: faCrosshairs, count: 4, route: '/snooker' },
  { name: 'Ice Hockey', icon: faHockeyPuck, count: 35, route: '/ice-hockey' },
  { name: 'E Games', icon: faGamepad, count: 8, route: '/egames' },
  { name: 'Futsal', icon: faFootball, count: 2, route: '/futsal' },
  { name: 'Handball', icon: faCircle, route: '/handball' },
  { name: 'Kabaddi', icon: faPersonRunning, count: 2, route: '/kabaddi' },
  { name: 'Golf', icon: faGolfBall, route: '/golf' },
  { name: 'Rugby League', icon: faFootball, route: '/rugby-league' },
  { name: 'Boxing', icon: faHandFist, count: 1, route: '/boxing' },
  { name: 'Beach Volleyball', icon: faVolleyball, route: '/beach-volleyball' },
  { name: 'Mixed Martial Arts', icon: faHandFist, route: '/mixed-martial-arts' },
  { name: 'MotoGP', icon: faMotorcycle, route: '/motogp' },
  { name: 'Chess', icon: faChess, count: 4, route: '/chess' },
  { name: 'Cycling', icon: faBicycle, route: '/cycling' },
  { name: 'Motorbikes', icon: faMotorcycle, route: '/motorbikes' },
  { name: 'Athletics', icon: faPersonRunning, route: '/athletics' },
  { name: 'Basketball 3X3', icon: faBasketball, route: '/basketball-3x3' },
  { name: 'Virtual sports', icon: faGamepad, count: 1, route: '/virtual-sports' },
  { name: 'Motor Sports', icon: faMotorcycle, route: '/motor-sports' },
  { name: 'Baseball', icon: faBaseballBall, route: '/baseball' },
  { name: 'Rugby Union', icon: faFootball, route: '/rugby-union' },
  { name: 'Darts', icon: faCrosshairs, route: '/darts' },
  { name: 'American Football', icon: faFootball, count: 3, route: '/american-football' },
  { name: 'Soccer', icon: faFootball, route: '/soccer' },
  { name: 'Esports', icon: faGamepad, route: '/esports' },
  { name: 'Boat Racing', icon: faShip, route: '/boat-racing' }
];

const BannerFilters = () => {
  const navigate = useNavigate();

  const handleFilterClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        {sportFilters.map((filter, index) => (
          <button 
            key={index} 
            className={styles.filterItem}
            onClick={() => filter.route && handleFilterClick(filter.route)}
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
