import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample handball matches data
const handballMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'THW Kiel',
    awayTeam: 'Barcelona',
    competition: 'EHF Champions League',
    isBookmarked: true,
    score: '25-23',
    additionalInfo: '2nd Half - 45:00',
    odds: {
      home: { back: 1.75, lay: 1.77 },
      draw: { back: 7.50, lay: 7.60 },
      away: { back: 2.20, lay: 2.22 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 19:30',
    homeTeam: 'Paris Saint-Germain',
    awayTeam: 'Veszprém',
    competition: 'EHF Champions League',
    isBookmarked: false,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      draw: { back: 7.80, lay: 7.90 },
      away: { back: 2.05, lay: 2.07 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 18:00',
    homeTeam: 'Flensburg',
    awayTeam: 'Rhein-Neckar Löwen',
    competition: 'Bundesliga',
    isBookmarked: true,
    additionalInfo: 'Top of Table Clash',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      draw: { back: 7.60, lay: 7.70 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Tomorrow 20:00',
    homeTeam: 'Pick Szeged',
    awayTeam: 'Aalborg',
    competition: 'EHF Champions League',
    isBookmarked: false,
    additionalInfo: 'Group Stage',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      draw: { back: 7.70, lay: 7.80 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: true
    }
  },
  {
    id: 5,
    status: 'Today 21:00',
    homeTeam: 'Montpellier',
    awayTeam: 'Nantes',
    competition: 'French League',
    isBookmarked: true,
    additionalInfo: 'Derby Match',
    odds: {
      home: { back: 2.05, lay: 2.07 },
      draw: { back: 7.90, lay: 8.00 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  }
];

const HandballDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Handball"
      showDraw={true}
      matches={handballMatches}
    />
  );
};

export default HandballDashboard;
