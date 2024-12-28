import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample basketball 1x1x7 matches data
const basketball117Matches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Player A',
    awayTeam: 'Player B',
    competition: 'Basketball 1x1x7 World Tour',
    isBookmarked: true,
    score: '5-3',
    additionalInfo: '5 Minutes Left',
    odds: {
      home: { back: 1.45, lay: 1.47 },
      away: { back: 2.80, lay: 2.85 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 18:30',
    homeTeam: 'Player C',
    awayTeam: 'Player D',
    competition: 'Street Basketball Championship',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  // Add more matches as needed...
];

const Basketball117Dashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Basketball 1x1x7"
      matches={basketball117Matches}
    />
  );
};

export default Basketball117Dashboard;
