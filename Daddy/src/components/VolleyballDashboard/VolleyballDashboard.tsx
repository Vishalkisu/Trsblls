import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const volleyballMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Poland',
    awayTeam: 'Brazil',
    competition: 'FIVB Nations League',
    isBookmarked: true,
    score: '2-1 (25-23, 23-25, 25-20)',
    additionalInfo: '4th Set - Poland 15-14',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.35, lay: 2.37 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 18:00',
    homeTeam: 'Italy',
    awayTeam: 'Serbia',
    competition: 'European Championship',
    isBookmarked: false,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.00, lay: 2.02 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 16:30',
    homeTeam: 'USA',
    awayTeam: 'Russia',
    competition: 'World Championship',
    isBookmarked: true,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 2.20, lay: 2.22 },
      away: { back: 1.75, lay: 1.77 },
      isLocked: false
    }
  }
];

const VolleyballDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Volleyball"
      showDraw={false}
      matches={volleyballMatches}
    />
  );
};

export default VolleyballDashboard;
