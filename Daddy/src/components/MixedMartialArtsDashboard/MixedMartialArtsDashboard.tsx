import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample MMA matches data
const mmaMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Islam Makhachev',
    awayTeam: 'Charles Oliveira',
    competition: 'UFC 294',
    isBookmarked: true,
    score: 'Round 2',
    additionalInfo: 'Lightweight Championship',
    odds: {
      home: { back: 1.65, lay: 1.67 },
      away: { back: 2.30, lay: 2.32 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 20:00',
    homeTeam: 'Sean O\'Malley',
    awayTeam: 'Marlon Vera',
    competition: 'UFC Fight Night',
    isBookmarked: false,
    additionalInfo: 'Bantamweight Main Event',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:00',
    homeTeam: 'Jon Jones',
    awayTeam: 'Stipe Miocic',
    competition: 'UFC 295',
    isBookmarked: true,
    additionalInfo: 'Heavyweight Championship',
    odds: {
      home: { back: 1.55, lay: 1.57 },
      away: { back: 2.50, lay: 2.52 },
      isLocked: false
    }
  }
];

const MixedMartialArtsDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Mixed Martial Arts"
      matches={mmaMatches}
    />
  );
};

export default MixedMartialArtsDashboard;
