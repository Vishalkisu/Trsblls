import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample kabaddi matches data
const kabaddiMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Patna Pirates',
    awayTeam: 'Bengal Warriors',
    competition: 'Pro Kabaddi League',
    isBookmarked: true,
    score: '28-25',
    additionalInfo: '2nd Half - 5 minutes remaining',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.30, lay: 2.32 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:30',
    homeTeam: 'U Mumba',
    awayTeam: 'Jaipur Pink Panthers',
    competition: 'Pro Kabaddi League',
    isBookmarked: false,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const KabaddiDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Kabaddi"
      matches={kabaddiMatches}
    />
  );
};

export default KabaddiDashboard;
