import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample athletics matches data
const athleticsMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Noah Lyles',
    awayTeam: 'Christian Coleman',
    competition: 'Diamond League - Paris',
    isBookmarked: true,
    score: 'Heat 1',
    additionalInfo: 'Men\'s 100m Final',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:30',
    homeTeam: 'Shelly-Ann Fraser-Pryce',
    awayTeam: 'Elaine Thompson-Herah',
    competition: 'Diamond League - Paris',
    isBookmarked: false,
    additionalInfo: 'Women\'s 100m Final',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:00',
    homeTeam: 'Mondo Duplantis',
    awayTeam: 'Sam Kendricks',
    competition: 'Diamond League - Paris',
    isBookmarked: true,
    additionalInfo: 'Men\'s Pole Vault',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.40, lay: 2.42 },
      isLocked: false
    }
  }
];

const AthleticsDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Athletics"
      matches={athleticsMatches}
    />
  );
};

export default AthleticsDashboard;
