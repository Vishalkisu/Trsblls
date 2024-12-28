import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample badminton matches data
const badmintonMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Viktor Axelsen',
    awayTeam: 'Kento Momota',
    competition: 'BWF World Championships - Men\'s Singles',
    isBookmarked: true,
    score: '21-19, 16-21, 11-8',
    additionalInfo: 'Third Game - Axelsen Serving',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.05, lay: 2.07 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 15:30',
    homeTeam: 'Tai Tzu-ying',
    awayTeam: 'Chen Yufei',
    competition: 'All England Open - Women\'s Singles',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 13:00',
    homeTeam: 'Marcus Fernaldi Gideon/Kevin Sanjaya Sukamuljo',
    awayTeam: 'Mohammad Ahsan/Hendra Setiawan',
    competition: 'Indonesia Open - Men\'s Doubles',
    isBookmarked: true,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.00, lay: 2.02 },
      isLocked: false
    }
  }
];

const BadmintonDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Badminton"
      showDraw={false}  // Badminton doesn't have draws
      matches={badmintonMatches}
    />
  );
};

export default BadmintonDashboard;
