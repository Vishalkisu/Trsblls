import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample egames matches data
const egamesMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Team Liquid',
    awayTeam: 'Cloud9',
    competition: 'League of Legends World Championship',
    isBookmarked: true,
    score: '2-1',
    additionalInfo: 'Game 4 - Team Liquid has Baron',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      away: { back: 2.05, lay: 2.07 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:00',
    homeTeam: 'Natus Vincere',
    awayTeam: 'FaZe Clan',
    competition: 'CS:GO Major',
    isBookmarked: false,
    additionalInfo: 'Semi Final - Best of 3',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    homeTeam: 'T1',
    awayTeam: 'DWG KIA',
    competition: 'LCK Summer Split',
    isBookmarked: true,
    additionalInfo: 'Final - Best of 5',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Today 21:30',
    homeTeam: 'OG',
    awayTeam: 'Team Spirit',
    competition: 'Dota 2 International',
    isBookmarked: true,
    additionalInfo: 'Upper Bracket Final',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      away: { back: 1.80, lay: 1.82 },
      isLocked: false
    }
  },
  {
    id: 5,
    status: 'Tomorrow 18:00',
    homeTeam: 'Fnatic',
    awayTeam: 'G2 Esports',
    competition: 'Valorant Champions',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.00, lay: 2.02 },
      isLocked: true
    }
  }
];

const EGamesDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="E-Games"
      matches={egamesMatches}
    />
  );
};

export default EGamesDashboard;
