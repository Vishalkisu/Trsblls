import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const iceHockeyMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Toronto Maple Leafs',
    awayTeam: 'Montreal Canadiens',
    competition: 'NHL',
    isBookmarked: true,
    score: '3-2',
    additionalInfo: '3rd Period - 15:23',
    odds: {
      home: { back: 1.70, lay: 1.72 },
      away: { back: 2.25, lay: 2.27 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 20:00',
    homeTeam: 'Boston Bruins',
    awayTeam: 'New York Rangers',
    competition: 'NHL',
    isBookmarked: false,
    additionalInfo: 'Eastern Conference',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.05, lay: 2.07 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 19:30',
    homeTeam: 'Edmonton Oilers',
    awayTeam: 'Calgary Flames',
    competition: 'NHL',
    isBookmarked: true,
    additionalInfo: 'Battle of Alberta',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const IceHockeyDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Ice Hockey"
      showDraw={false}
      matches={iceHockeyMatches}
    />
  );
};

export default IceHockeyDashboard;
