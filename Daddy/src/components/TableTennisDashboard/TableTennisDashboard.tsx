import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const tableTennisMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Ma Long',
    awayTeam: 'Fan Zhendong',
    competition: 'World Table Tennis Championships',
    isBookmarked: true,
    score: '2-1 (11-9, 9-11, 11-7)',
    additionalInfo: '4th Game - Ma Long Serving',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.92, lay: 1.94 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 15:30',
    homeTeam: 'Timo Boll',
    awayTeam: 'Dimitrij Ovtcharov',
    competition: 'European Championships',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 12:00',
    homeTeam: 'Chen Meng',
    awayTeam: 'Sun Yingsha',
    competition: 'WTT Champions',
    isBookmarked: true,
    additionalInfo: 'Women\'s Singles Final',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  }
];

const TableTennisDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Table Tennis"
      showDraw={false}
      matches={tableTennisMatches}
    />
  );
};

export default TableTennisDashboard;
