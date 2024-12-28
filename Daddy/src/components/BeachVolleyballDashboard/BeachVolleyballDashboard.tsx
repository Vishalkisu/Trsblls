import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample beach volleyball matches data
const beachVolleyballMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Mol/Sørum',
    awayTeam: 'Perusic/Schweiner',
    competition: 'FIVB Beach Pro Tour - Elite16',
    isBookmarked: true,
    score: '1-0 (21-19, 15-12)',
    additionalInfo: '2nd Set - Service: Mol',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.30, lay: 2.32 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 16:00',
    homeTeam: 'Brouwer/Meeuwsen',
    awayTeam: 'George/Andre',
    competition: 'FIVB World Tour Finals',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Today 18:30',
    homeTeam: 'Nicolai/Cottafava',
    awayTeam: 'Ehlers/Wickler',
    competition: 'FIVB Beach Pro Tour - Challenge',
    isBookmarked: true,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.75, lay: 1.77 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Tomorrow 14:00',
    homeTeam: 'Herrera/Gavira',
    awayTeam: 'Rossi/Carambula',
    competition: 'FIVB Beach Pro Tour - Elite16',
    isBookmarked: false,
    additionalInfo: 'Round of 16',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 1.90, lay: 1.92 },
      isLocked: false
    }
  },
  {
    id: 5,
    status: 'LIVE',
    homeTeam: 'Pavan/Melissa',
    awayTeam: 'Huberli/Brunner',
    competition: 'FIVB Beach Pro Tour - Women',
    isBookmarked: true,
    score: '0-1 (19-21, 14-16)',
    additionalInfo: '2nd Set - Service: Huberli',
    odds: {
      home: { back: 2.40, lay: 2.42 },
      away: { back: 1.60, lay: 1.62 },
      isLocked: false
    }
  }
];

const BeachVolleyballDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Beach Volleyball"
      matches={beachVolleyballMatches}
    />
  );
};

export default BeachVolleyballDashboard;
