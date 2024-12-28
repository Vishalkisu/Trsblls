import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample esoccer matches data with 16 matches
const esoccerMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Real Madrid Esports',
    awayTeam: 'Barcelona Esports',
    competition: 'FIFA eWorld Cup',
    isBookmarked: true,
    score: '2-1',
    additionalInfo: '75th Minute',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      draw: { back: 3.50, lay: 3.55 },
      away: { back: 4.20, lay: 4.25 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 17:00',
    homeTeam: 'PSG Esports',
    awayTeam: 'Manchester City Esports',
    competition: 'ePremier League',
    isBookmarked: false,
    additionalInfo: 'Group Stage',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      draw: { back: 3.20, lay: 3.25 },
      away: { back: 3.50, lay: 3.55 },
      isLocked: false
    }
  },
  // Add more matches here up to 16...
];

const EsoccerDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Esoccer"
      showDraw={true}
      matches={esoccerMatches}
    />
  );
};

export default EsoccerDashboard;
