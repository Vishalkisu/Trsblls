import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const DartsDashboard: React.FC = () => {
  const dartsMatches = [
    {
      id: 1,
      competition: "PDC World Championship",
      homeTeam: "Michael van Gerwen",
      awayTeam: "Peter Wright",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      startTime: "20:00",
      odds: {
        home: { back: 1.75, lay: 1.76 },
        away: { back: 2.20, lay: 2.22 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "Premier League Darts",
      homeTeam: "Gerwyn Price",
      awayTeam: "Michael Smith",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "21:30",
      odds: {
        home: { back: 1.95, lay: 1.96 },
        away: { back: 1.90, lay: 1.92 }
      },
      isBookmarked: false
    },
    {
      id: 3,
      competition: "Grand Slam of Darts",
      homeTeam: "Gary Anderson",
      awayTeam: "Rob Cross",
      homeScore: 6,
      awayScore: 4,
      status: "Finished",
      startTime: "19:00",
      odds: {
        home: { back: 1.85, lay: 1.86 },
        away: { back: 2.00, lay: 2.02 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={dartsMatches} sport="Darts" />;
};

export default DartsDashboard;
