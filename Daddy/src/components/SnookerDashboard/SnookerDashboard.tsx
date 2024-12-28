import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample snooker matches data
const snookerMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Ronnie O\'Sullivan',
    awayTeam: 'Judd Trump',
    competition: 'World Snooker Championship',
    isBookmarked: true,
    score: '3-2',
    additionalInfo: 'Frame 6 - O\'Sullivan at the table',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.05, lay: 2.07 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Mark Selby',
    awayTeam: 'John Higgins',
    competition: 'UK Championship',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.90, lay: 1.92 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Neil Robertson',
    awayTeam: 'Mark Williams',
    competition: 'Masters',
    isBookmarked: true,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  }
];

const SnookerDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Snooker"
      matches={snookerMatches}
    />
  );
};

export default SnookerDashboard;
