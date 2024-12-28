import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample chess matches data
const chessMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Magnus Carlsen',
    awayTeam: 'Alireza Firouzja',
    competition: 'World Chess Championship 2024',
    isBookmarked: true,
    score: '2½ - 1½',
    additionalInfo: 'Game 4 - Middle Game',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      draw: { back: 3.20, lay: 3.22 },
      away: { back: 2.25, lay: 2.27 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 15:00',
    homeTeam: 'Ding Liren',
    awayTeam: 'Fabiano Caruana',
    competition: 'Candidates Tournament 2024',
    isBookmarked: false,
    additionalInfo: 'Round 8 - Starting Soon',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      draw: { back: 3.00, lay: 3.02 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 14:00',
    homeTeam: 'Ian Nepomniachtchi',
    awayTeam: 'Hikaru Nakamura',
    competition: 'Norway Chess 2024',
    isBookmarked: true,
    additionalInfo: 'Classical Format',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      draw: { back: 2.80, lay: 2.82 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  }
];

const ChessDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Chess"
      showDraw={true}  // Chess can have draws
      matches={chessMatches}
    />
  );
};

export default ChessDashboard;
