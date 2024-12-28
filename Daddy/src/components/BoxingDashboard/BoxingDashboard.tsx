import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

const boxingMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'Tyson Fury',
    awayTeam: 'Oleksandr Usyk',
    competition: 'Heavyweight Championship',
    isBookmarked: true,
    score: 'Round 8/12',
    additionalInfo: 'WBC, WBA, IBF & WBO Titles',
    odds: {
      home: { back: 1.55, lay: 1.57 },
      away: { back: 2.60, lay: 2.62 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 22:00',
    homeTeam: 'Canelo Alvarez',
    awayTeam: 'David Benavidez',
    competition: 'Super Middleweight Championship',
    isBookmarked: false,
    additionalInfo: 'WBC & WBA Titles',
    odds: {
      home: { back: 1.80, lay: 1.82 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 21:00',
    homeTeam: 'Devin Haney',
    awayTeam: 'Vasiliy Lomachenko',
    competition: 'Lightweight Championship',
    isBookmarked: true,
    additionalInfo: 'WBA, WBC & IBF Titles',
    odds: {
      home: { back: 1.90, lay: 1.92 },
      away: { back: 2.00, lay: 2.02 },
      isLocked: false
    }
  }
];

const BoxingDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Boxing"
      showDraw={false}
      matches={boxingMatches}
    />
  );
};

export default BoxingDashboard;
