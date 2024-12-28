import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const SoccerDashboard: React.FC = () => {
  const soccerMatches = [
    {
      id: 1,
      competition: "Premier League",
      homeTeam: "Manchester City",
      awayTeam: "Arsenal",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      startTime: "17:30",
      odds: {
        home: { back: 1.90, lay: 1.91 },
        draw: { back: 3.50, lay: 3.52 },
        away: { back: 4.20, lay: 4.22 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "La Liga",
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "20:00",
      odds: {
        home: { back: 2.10, lay: 2.12 },
        draw: { back: 3.40, lay: 3.42 },
        away: { back: 3.50, lay: 3.52 }
      },
      isBookmarked: true
    },
    {
      id: 3,
      competition: "Champions League",
      homeTeam: "Bayern Munich",
      awayTeam: "Paris Saint-Germain",
      homeScore: 3,
      awayScore: 2,
      status: "Finished",
      startTime: "15:00",
      odds: {
        home: { back: 1.85, lay: 1.86 },
        draw: { back: 3.60, lay: 3.62 },
        away: { back: 4.50, lay: 4.52 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={soccerMatches} sport="Soccer" />;
};

export default SoccerDashboard;
