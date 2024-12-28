import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample 3x3 basketball matches data
const basketball3x3Matches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Liman',
    awayTeam: 'Ub',
    competition: 'FIBA 3x3 World Tour',
    isBookmarked: true,
    score: '15-12',
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Riga',
    awayTeam: 'Amsterdam',
    competition: 'FIBA 3x3 World Tour',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    homeTeam: 'NY Harlem',
    awayTeam: 'Princeton',
    competition: 'USA 3x3 League',
    isBookmarked: true,
    additionalInfo: 'Final',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Today 20:30',
    homeTeam: 'Team Serbia',
    awayTeam: 'Team Latvia',
    competition: 'FIBA 3x3 Nations League',
    isBookmarked: false,
    additionalInfo: 'Group Stage',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.35, lay: 2.37 },
      isLocked: true
    }
  }
];

const Basketball3X3Dashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Basketball 3X3"
      matches={basketball3x3Matches}
    />
  );
};

export default Basketball3X3Dashboard;
