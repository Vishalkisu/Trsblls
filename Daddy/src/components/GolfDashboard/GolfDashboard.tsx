import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample golf matches/tournaments data
const golfMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Rory McIlroy',
    awayTeam: 'Jon Rahm',
    competition: 'The Masters Tournament',
    isBookmarked: true,
    score: '-12, -11',
    additionalInfo: 'Round 4 - Hole 16',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 15:00',
    homeTeam: 'Brooks Koepka',
    awayTeam: 'Scottie Scheffler',
    competition: 'PGA Championship',
    isBookmarked: false,
    additionalInfo: 'Round 1 - Starting Soon',
    odds: {
      home: { back: 2.20, lay: 2.22 },
      away: { back: 1.75, lay: 1.77 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:30',
    homeTeam: 'Jordan Spieth',
    awayTeam: 'Justin Thomas',
    competition: 'U.S. Open',
    isBookmarked: true,
    additionalInfo: 'Round 2 - Tee Time',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const GolfDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Golf"
      showDraw={false}  // Golf doesn't have draws
      matches={golfMatches}
    />
  );
};

export default GolfDashboard;
