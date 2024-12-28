import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const EsportsDashboard: React.FC = () => {
  const esportsMatches = [
    {
      id: 1,
      competition: "League of Legends - Worlds 2024",
      homeTeam: "T1",
      awayTeam: "Gen.G",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      startTime: "16:00",
      odds: {
        home: { back: 1.75, lay: 1.76 },
        away: { back: 2.15, lay: 2.17 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "CS:GO - ESL Pro League",
      homeTeam: "NAVI",
      awayTeam: "FaZe Clan",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "19:00",
      odds: {
        home: { back: 1.90, lay: 1.92 },
        away: { back: 1.95, lay: 1.97 }
      },
      isBookmarked: false
    },
    {
      id: 3,
      competition: "Dota 2 - The International",
      homeTeam: "Team Spirit",
      awayTeam: "PSG.LGD",
      homeScore: 2,
      awayScore: 0,
      status: "Finished",
      startTime: "14:00",
      odds: {
        home: { back: 2.20, lay: 2.22 },
        away: { back: 1.70, lay: 1.72 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={esportsMatches} sport="Esports" />;
};

export default EsportsDashboard;