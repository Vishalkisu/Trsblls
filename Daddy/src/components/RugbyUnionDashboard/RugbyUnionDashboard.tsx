import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample rugby union matches data
const rugbyUnionMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'New Zealand',
    awayTeam: 'South Africa',
    competition: 'Rugby Championship',
    isBookmarked: true,
    score: '24-21',
    additionalInfo: '65th Minute',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      draw: { back: 21.0, lay: 21.5 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Ireland',
    awayTeam: 'England',
    competition: 'Six Nations',
    isBookmarked: false,
    additionalInfo: 'Round 5',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      draw: { back: 23.0, lay: 23.5 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Crusaders',
    awayTeam: 'Blues',
    competition: 'Super Rugby',
    isBookmarked: true,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      draw: { back: 25.0, lay: 25.5 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const RugbyUnionDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Rugby Union"
      matches={rugbyUnionMatches}
      showDraw={true}
    />
  );
};

export default RugbyUnionDashboard;
