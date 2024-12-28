import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample basketball matches data
const basketballMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'LA Lakers',
    awayTeam: 'Golden State Warriors',
    competition: 'NBA - Western Conference',
    isBookmarked: true,
    score: '87-82',
    additionalInfo: 'Q3 - 4:23',
    odds: {
      home: { back: 1.55, lay: 1.57 },
      away: { back: 2.60, lay: 2.62 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:30',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Miami Heat',
    competition: 'NBA - Eastern Conference',
    isBookmarked: false,
    additionalInfo: 'Game 5 - Series tied 2-2',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 20:00',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    competition: 'EuroLeague',
    isBookmarked: true,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.00, lay: 2.02 },
      isLocked: false
    }
  }
];

const BasketballDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Basketball"
      showDraw={false}  // Basketball doesn't have draws
      matches={basketballMatches}
    />
  );
};

export default BasketballDashboard;
