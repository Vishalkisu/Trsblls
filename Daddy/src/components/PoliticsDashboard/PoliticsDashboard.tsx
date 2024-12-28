import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const PoliticsDashboard: React.FC = () => {
  const politicsMatches = [
    {
      id: 1,
      competition: "US Presidential Election 2024",
      homeTeam: "Joe Biden",
      awayTeam: "Donald Trump",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "Nov 5, 2024",
      odds: {
        home: { back: 2.10, lay: 2.12 },
        away: { back: 1.85, lay: 1.87 }
      },
      isBookmarked: true
    },
    {
      id: 2,
      competition: "UK General Election 2024",
      homeTeam: "Labour Party",
      awayTeam: "Conservative Party",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "Dec 2024",
      odds: {
        home: { back: 1.45, lay: 1.47 },
        away: { back: 2.90, lay: 2.92 }
      },
      isBookmarked: false
    },
    {
      id: 3,
      competition: "Indian General Election 2024",
      homeTeam: "NDA",
      awayTeam: "INDIA Alliance",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "Apr-May 2024",
      odds: {
        home: { back: 1.65, lay: 1.67 },
        away: { back: 2.40, lay: 2.42 }
      },
      isBookmarked: false
    },
    {
      id: 4,
      competition: "Russian Presidential Election 2024",
      homeTeam: "Vladimir Putin",
      awayTeam: "Opposition",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      startTime: "Mar 17, 2024",
      odds: {
        home: { back: 1.05, lay: 1.07 },
        away: { back: 15.00, lay: 15.50 }
      },
      isBookmarked: false
    }
  ];

  return <SportDashboard matches={politicsMatches} sport="Politics" />;
};

export default PoliticsDashboard;
