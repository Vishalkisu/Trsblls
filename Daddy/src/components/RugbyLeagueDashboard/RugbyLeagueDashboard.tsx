import React from 'react';
import SportDashboard from '../SportDashboard/SportDashboard';

// Sample rugby league matches data
const rugbyLeagueMatches = [
  {
    id: 1,
    status: 'LIVE',
    homeTeam: 'St Helens',
    awayTeam: 'Wigan Warriors',
    competition: 'Super League',
    isBookmarked: true,
    score: '24-18',
    additionalInfo: '65th minute',
    odds: {
      home: { back: 1.85, lay: 1.87 },
      draw: { back: 21.00, lay: 22.00 },
      away: { back: 2.10, lay: 2.12 },
      isLocked: false
    }
  },
  {
    id: 2,
    status: 'Today 20:00',
    homeTeam: 'Leeds Rhinos',
    awayTeam: 'Warrington Wolves',
    competition: 'Super League',
    isBookmarked: false,
    additionalInfo: 'Round 15',
    odds: {
      home: { back: 1.95, lay: 1.97 },
      draw: { back: 20.00, lay: 21.00 },
      away: { back: 1.95, lay: 1.97 },
      isLocked: false
    }
  },
  {
    id: 3,
    status: 'Tomorrow 19:45',
    homeTeam: 'Hull FC',
    awayTeam: 'Catalans Dragons',
    competition: 'Super League',
    isBookmarked: true,
    additionalInfo: 'Quarter Final',
    odds: {
      home: { back: 2.10, lay: 2.12 },
      draw: { back: 20.00, lay: 21.00 },
      away: { back: 1.85, lay: 1.87 },
      isLocked: false
    }
  },
  {
    id: 4,
    status: 'Today 19:30',
    homeTeam: 'Castleford Tigers',
    awayTeam: 'Huddersfield Giants',
    competition: 'Challenge Cup',
    isBookmarked: false,
    additionalInfo: 'Semi Final',
    odds: {
      home: { back: 2.20, lay: 2.22 },
      draw: { back: 21.00, lay: 22.00 },
      away: { back: 1.75, lay: 1.77 },
      isLocked: true
    }
  }
];

const RugbyLeagueDashboard: React.FC = () => {
  return (
    <SportDashboard
      sport="Rugby League"
      showDraw={true}
      matches={rugbyLeagueMatches}
    />
  );
};

export default RugbyLeagueDashboard;
