import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample sumo matches data
const sumoMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Terunofuji',
    awayTeam: 'Takakeisho',
    competition: 'January Tournament',
    isBookmarked: true,
    score: 'Day 13',
    additionalInfo: 'Makuuchi Division',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 16:00',
    homeTeam: 'Hoshoryu',
    awayTeam: 'Kirishima',
    competition: 'January Tournament',
    isBookmarked: false,
    additionalInfo: 'Makuuchi Division',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    homeTeam: 'Wakatakakage',
    awayTeam: 'Abi',
    competition: 'January Tournament',
    isBookmarked: true,
    additionalInfo: 'Makuuchi Division',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  }
];

const SumoDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Sumo"
      matches={sumoMatches}
    />
  );
};

export default SumoDashboard;
