import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample cycling matches data
const cyclingMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Tadej Pogacar',
    awayTeam: 'Jonas Vingegaard',
    competition: 'Tour de France',
    isBookmarked: true,
    score: '+0:45',
    additionalInfo: 'Stage 18 - Mountain',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 14:00',
    homeTeam: 'Remco Evenepoel',
    awayTeam: 'Primoz Roglic',
    competition: 'Vuelta a España',
    isBookmarked: false,
    additionalInfo: 'Stage 15 - Time Trial',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 13:00',
    homeTeam: 'Mathieu van der Poel',
    awayTeam: 'Wout van Aert',
    competition: 'Paris-Roubaix',
    isBookmarked: true,
    additionalInfo: 'One Day Classic',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const CyclingDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Cycling"
      matches={cyclingMatches}
    />
  );
};

export default CyclingDashboard;
