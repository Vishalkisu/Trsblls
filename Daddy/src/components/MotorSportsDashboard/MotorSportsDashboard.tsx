import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample motorsports matches data
const motorSportsMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Max Verstappen',
    awayTeam: 'Lewis Hamilton',
    competition: 'F1 Monaco Grand Prix',
    isBookmarked: true,
    score: 'Lap 45/78',
    additionalInfo: 'Gap: +1.2s',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.40, lay: 2.42 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Charles Leclerc',
    awayTeam: 'Carlos Sainz',
    competition: 'F1 Monaco Grand Prix',
    isBookmarked: false,
    additionalInfo: 'Qualifying',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Sebastien Ogier',
    awayTeam: 'Kalle Rovanpera',
    competition: 'WRC Rally Monte Carlo',
    isBookmarked: true,
    additionalInfo: 'Stage 8',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Today 20:30',
    homeTeam: 'Fabio Quartararo',
    awayTeam: 'Francesco Bagnaia',
    competition: 'MotoGP Valencia',
    isBookmarked: false,
    additionalInfo: 'Sprint Race',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: true
    }
  }
];

const MotorSportsDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Motor Sports"
      matches={motorSportsMatches}
    />
  );
};

export default MotorSportsDashboard;
