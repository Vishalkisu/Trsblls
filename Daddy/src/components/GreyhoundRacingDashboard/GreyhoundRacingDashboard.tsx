import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Mock data for greyhound races
const greyhoundRaces = [
  {
    id: 1,
    status: 'Today 15:30',
    homeTeam: 'Swift Runner',
    awayTeam: 'Fast Track',
    competition: 'Romford - Race 1',
    isBookmarked: false,
    additionalInfo: 'Track: Standard | Distance: 480m',
    odds: {
      home: { back: 2.5, lay: 2.7 },
      away: { back: 3.2, lay: 3.4 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 16:00',
    homeTeam: 'Dark Storm',
    awayTeam: 'Quick Silver',
    competition: 'Crayford - Race 2',
    isBookmarked: true,
    additionalInfo: 'Track: Fast | Distance: 380m',
    odds: {
      home: { back: 1.9, lay: 2.1 },
      away: { back: 2.8, lay: 3.0 },
      isLocked: false
    }
  }
];

const GreyhoundRacingDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Greyhound Racing"
      showDraw={false}
      matches={greyhoundRaces}
    />
  );
};

export default GreyhoundRacingDashboard;
