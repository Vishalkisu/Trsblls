import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample cricket matches data
const cricketMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'India',
    awayTeam: 'Australia',
    competition: 'ICC World Cup',
    isBookmarked: true,
    score: '258/4 (42.3)',
    additionalInfo: 'Kohli 89*, Smith 3/45',
    odds: {
      home: { back: 1.85, lay: 1.86 },
      away: { back: 2.00, lay: 2.02 },
      draw: { back: 4.50, lay: 4.60 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 14:30',
    homeTeam: 'England',
    awayTeam: 'South Africa',
    competition: 'Test Series',
    isBookmarked: false,
    additionalInfo: '1st Test, Day 1',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      draw: { back: 3.50, lay: 3.55 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 09:30',
    homeTeam: 'Pakistan',
    awayTeam: 'New Zealand',
    competition: 'T20I Series',
    isBookmarked: true,
    additionalInfo: '2nd T20I',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  }
];

const CricketDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Cricket"
      showDraw={true}  // Cricket can have draws in Test matches
      matches={cricketMatches}
    />
  );
};

export default CricketDashboard;
