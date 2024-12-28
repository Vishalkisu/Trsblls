import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const BoatRacingDashboard: React.FC = () => {
  const boatRacingMatches = [
    {
      id: 1,
      competition: "America's Cup",
      homeTeam: "Team New Zealand",
      awayTeam: "Luna Rossa",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      startTime: "14:00",
      odds: {
        home: { back: 1.80, lay: 1.82 },
        away: { back: 2.10, lay: 2.12 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "Vendée Globe",
      homeTeam: "Charlie Dalin",
      awayTeam: "Thomas Ruyant",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "16:30",
      odds: {
        home: { back: 1.95, lay: 1.97 },
        away: { back: 1.90, lay: 1.92 }
      },
      isBookmarked: false
    },
    {
      id: 3,
      competition: "Ocean Race",
      homeTeam: "Team Holcim",
      awayTeam: "11th Hour Racing",
      homeScore: 3,
      awayScore: 2,
      status: "Finished",
      startTime: "10:00",
      odds: {
        home: { back: 2.05, lay: 2.07 },
        away: { back: 1.85, lay: 1.87 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={boatRacingMatches} sport="Boat Racing" />;
};

export default BoatRacingDashboard;
