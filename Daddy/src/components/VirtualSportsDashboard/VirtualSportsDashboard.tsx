import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample virtual sports matches data
const virtualSportsMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Virtual United',
    awayTeam: 'Virtual City',
    competition: 'Virtual Premier League',
    isBookmarked: true,
    score: '2-1',
    additionalInfo: '75th Minute',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      draw: { back: 3.50, lay: 3.52 },
      away: { back: 4.20, lay: 4.22 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Starting in 2 mins',
    homeTeam: 'Virtual Racers',
    awayTeam: 'Virtual Motors',
    competition: 'Virtual Racing Cup',
    isBookmarked: false,
    additionalInfo: 'Race 15',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Starting in 5 mins',
    homeTeam: 'Virtual Warriors',
    awayTeam: 'Virtual Knights',
    competition: 'Virtual Basketball League',
    isBookmarked: true,
    additionalInfo: 'Quarter Finals',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Starting in 8 mins',
    homeTeam: 'Virtual Greyhound 1',
    awayTeam: 'Virtual Greyhound 2',
    competition: 'Virtual Greyhound Racing',
    isBookmarked: false,
    additionalInfo: 'Race 8',
    odds: {
      home: { back: 2.50, lay: 2.52 },
      away: { back: 1.65, lay: 1.67 },
      isLocked: true
    }
  }
];

const VirtualSportsDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Virtual Sports"
      matches={virtualSportsMatches}
      showDraw={true}
    />
  );
};

export default VirtualSportsDashboard;
