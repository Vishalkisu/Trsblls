import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample volleyball 60 matches data
const volleyball60Matches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Team Alpha',
    awayTeam: 'Team Beta',
    competition: 'Volleyball 60 Pro League',
    isBookmarked: true,
    score: '15-12',
    additionalInfo: 'Set 2',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.15, lay: 2.17 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Team Gamma',
    awayTeam: 'Team Delta',
    competition: 'V60 Championship',
    isBookmarked: false,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 2.05, lay: 2.07 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  // Add more matches as needed...
];

const Volleyball60Dashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Volleyball 60"
      matches={volleyball60Matches}
    />
  );
};

export default Volleyball60Dashboard;
