import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample baseball matches data
const baseballMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'NY Yankees',
    awayTeam: 'Boston Red Sox',
    competition: 'MLB',
    isBookmarked: true,
    score: '4-3',
    additionalInfo: '7th Inning',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'LA Dodgers',
    awayTeam: 'SF Giants',
    competition: 'MLB',
    isBookmarked: false,
    additionalInfo: 'National League',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:00',
    homeTeam: 'Houston Astros',
    awayTeam: 'Texas Rangers',
    competition: 'MLB',
    isBookmarked: true,
    additionalInfo: 'American League',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Today 20:30',
    homeTeam: 'Chicago Cubs',
    awayTeam: 'St. Louis Cardinals',
    competition: 'MLB',
    isBookmarked: false,
    additionalInfo: 'National League',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: true
    }
  }
];

const BaseballDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Baseball"
      matches={baseballMatches}
    />
  );
};

export default BaseballDashboard;
