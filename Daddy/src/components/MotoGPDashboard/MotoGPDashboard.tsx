import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample MotoGP matches data
const motoGPMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Francesco Bagnaia',
    awayTeam: 'Jorge Martin',
    competition: 'MotoGP Valencia Grand Prix',
    isBookmarked: true,
    score: 'Lap 15/27',
    additionalInfo: 'Gap: +0.342s - Championship Decider',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 15:00',
    homeTeam: 'Marc Marquez',
    awayTeam: 'Fabio Quartararo',
    competition: 'MotoGP Qatar - Qualifying',
    isBookmarked: false,
    additionalInfo: 'Q2 Session',
    odds: {
      home: { back: 2.20, lay: 2.22 },
      away: { back: 1.75, lay: 1.77 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Brad Binder',
    awayTeam: 'Aleix Espargaro',
    competition: 'MotoGP Malaysia - Race',
    isBookmarked: true,
    additionalInfo: 'Main Race',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.90, lay: 1.92 },
      isLocked: false
    }
  }
];

const MotoGPDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="MotoGP"
      matches={motoGPMatches}
    />
  );
};

export default MotoGPDashboard;
