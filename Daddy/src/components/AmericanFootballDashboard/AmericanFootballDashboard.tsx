import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const AmericanFootballDashboard: React.FC = () => {
  const americanFootballMatches = [
    {
      id: 1,
      competition: "NFL - Week 15",
      homeTeam: "Kansas City Chiefs",
      awayTeam: "Buffalo Bills",
      homeScore: 24,
      awayScore: 21,
      status: "LIVE",
      startTime: "20:30",
      odds: {
        home: { back: 1.85, lay: 1.86 },
        draw: { back: 12.00, lay: 12.50 },
        away: { back: 2.10, lay: 2.12 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "NFL - Week 15",
      homeTeam: "San Francisco 49ers",
      awayTeam: "Philadelphia Eagles",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "22:00",
      odds: {
        home: { back: 1.75, lay: 1.76 },
        draw: { back: 13.00, lay: 13.50 },
        away: { back: 2.25, lay: 2.27 }
      },
      isBookmarked: false
    },
    {
      id: 3,
      competition: "NFL - Week 15",
      homeTeam: "Dallas Cowboys",
      awayTeam: "Seattle Seahawks",
      homeScore: 35,
      awayScore: 28,
      status: "Finished",
      startTime: "17:00",
      odds: {
        home: { back: 1.90, lay: 1.92 },
        draw: { back: 12.50, lay: 13.00 },
        away: { back: 2.00, lay: 2.02 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={americanFootballMatches} sport="American Football" />;
};

export default AmericanFootballDashboard;
