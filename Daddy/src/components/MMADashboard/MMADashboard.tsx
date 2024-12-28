import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample MMA matches data
const mmaMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Islam Makhachev',
    awayTeam: 'Charles Oliveira',
    competition: 'UFC 294 - Lightweight Championship',
    isBookmarked: true,
    score: 'Round 2',
    additionalInfo: '3:45 remaining - Makhachev controlling on ground',
    odds: {
      home: { back: 1.55, lay: 1.57 },
      away: { back: 2.45, lay: 2.47 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 20:00',
    homeTeam: 'Sean O\'Malley',
    awayTeam: 'Marlon Vera',
    competition: 'UFC Fight Night - Bantamweight',
    isBookmarked: false,
    additionalInfo: 'Main Event',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.15, lay: 2.17 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:00',
    homeTeam: 'Alexander Volkanovski',
    awayTeam: 'Ilia Topuria',
    competition: 'UFC 298 - Featherweight Championship',
    isBookmarked: true,
    additionalInfo: 'Title Fight',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const MMADashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Mixed Martial Arts"
      matches={mmaMatches}
    />
  );
};

export default MMADashboard;
