import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample motorbikes matches data
const motorbikesMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Jonathan Rea',
    awayTeam: 'Toprak Razgatlioglu',
    competition: 'World Superbike Championship',
    isBookmarked: true,
    score: 'Lap 15/20',
    additionalInfo: 'Race 1 - Catalunya',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Alvaro Bautista',
    awayTeam: 'Michael van der Mark',
    competition: 'World Superbike Championship',
    isBookmarked: false,
    additionalInfo: 'Superpole Race',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Scott Redding',
    awayTeam: 'Alex Lowes',
    competition: 'World Superbike Championship',
    isBookmarked: true,
    additionalInfo: 'Race 2 - Catalunya',
    odds: {
      home: { back: 2.05, lay: 2.07 },
      away: { back: 1.90, lay: 1.92 },
      isLocked: false
    }
  }
];

const MotorbikesDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Motorbikes"
      matches={motorbikesMatches}
    />
  );
};

export default MotorbikesDashboard;
