import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const FutsalDashboard: React.FC = () => {
  const futsalMatches = [
    {
      id: 1,
      competition: "FIFA Futsal World Cup",
      homeTeam: "Brazil",
      awayTeam: "Spain",
      homeScore: 3,
      awayScore: 2,
      status: "LIVE",
      startTime: "15:30",
      odds: {
        home: { back: 1.85, lay: 1.86 },
        draw: { back: 3.40, lay: 3.42 },
        away: { back: 4.50, lay: 4.52 }
      },
      isBookmarked: false
    },
    {
      id: 2,
      competition: "UEFA Futsal Champions League",
      homeTeam: "Sporting CP",
      awayTeam: "Barcelona",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "18:00",
      odds: {
        home: { back: 2.10, lay: 2.12 },
        draw: { back: 3.20, lay: 3.22 },
        away: { back: 3.40, lay: 3.42 }
      },
      isBookmarked: true
    },
    {
      id: 3,
      competition: "AFC Futsal Championship",
      homeTeam: "Iran",
      awayTeam: "Japan",
      homeScore: 5,
      awayScore: 4,
      status: "Finished",
      startTime: "12:00",
      odds: {
        home: { back: 1.90, lay: 1.92 },
        draw: { back: 3.30, lay: 3.32 },
        away: { back: 4.20, lay: 4.22 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={futsalMatches} sport="Futsal" />;
};

export default FutsalDashboard;