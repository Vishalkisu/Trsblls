import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample tennis matches data
const tennisMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Rafael Nadal',
    awayTeam: 'Novak Djokovic',
    competition: 'Wimbledon - Men\'s Singles',
    isBookmarked: true,
    score: '6-4, 4-6, 3-2',
    additionalInfo: 'Third Set - Nadal Serving',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.80, lay: 1.82 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 16:00',
    homeTeam: 'Iga Świątek',
    awayTeam: 'Coco Gauff',
    competition: 'French Open - Women\'s Singles',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.45, lay: 1.47 },
      away: { back: 2.90, lay: 2.92 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Carlos Alcaraz',
    awayTeam: 'Daniil Medvedev',
    competition: 'US Open - Men\'s Singles',
    isBookmarked: true,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.40, lay: 2.42 },
      isLocked: false
    }
  }
];

const TennisDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Tennis"
      showDraw={false}  // Tennis doesn't have draws
      matches={tennisMatches}
    />
  );
};

export default TennisDashboard;
