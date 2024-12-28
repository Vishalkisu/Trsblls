import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useBetSlipStore } from '../../store/betSlipStore';
import BetSlip from '../BetSlip/BetSlip';
import styles from './SportDashboard.module.css';
import MobileNewLaunched from '../MobileNewLaunched/MobileNewLaunched';
import MobileOurCasino from '../MobileOurCasino/MobileOurCasino';

interface Odds {
  back: number;
  lay: number;
}

interface MatchOdds {
  home: Odds;
  draw?: Odds;  // Optional for sports that don't have draws
  away: Odds;
  isLocked: boolean;
}

interface Match {
  id: number;
  status: string;
  homeTeam: string;
  awayTeam: string;
  competition: string;
  isBookmarked: boolean;
  odds: MatchOdds;
  score?: string;  // Optional score for live matches
  additionalInfo?: string;  // Sport-specific additional information
}

interface SportDashboardProps {
  sport: string;
  showDraw?: boolean;  // Whether the sport has draw options
  matches: Match[];
}

const OddsButton: React.FC<{
  type: 'home' | 'draw' | 'away';
  odds: Odds;
  isLocked: boolean;
  matchId: number;
  teamName: string;
  matchName: string;
}> = ({ type, odds, isLocked, matchId, teamName, matchName }) => {
  const addSelection = useBetSlipStore((state) => state.addSelection);

  if (isLocked) {
    return (
      <div className={styles.lockedOdds}>
        <FontAwesomeIcon icon={faLock} />
      </div>
    );
  }

  const handleBackClick = () => {
    if (isLocked) return;
    
    addSelection({
      id: `${matchId}-back-${type}`,
      matchId: matchId.toString(),
      matchName,
      selection: `Back ${teamName}`,
      odds: odds.back,
      type: 'back'
    });
  };

  const handleLayClick = () => {
    if (isLocked) return;
    
    addSelection({
      id: `${matchId}-lay-${type}`,
      matchId: matchId.toString(),
      matchName,
      selection: `Lay ${teamName}`,
      odds: odds.lay,
      type: 'lay'
    });
  };

  return (
    <div className={styles.oddsContainer}>
      <button 
        className={`${styles.oddsButton} ${styles.backButton}`}
        onClick={handleBackClick}
      >
        {odds.back.toFixed(2)}
      </button>
      <button 
        className={`${styles.oddsButton} ${styles.layButton}`}
        onClick={handleLayClick}
      >
        {odds.lay.toFixed(2)}
      </button>
    </div>
  );
};

const SportDashboard: React.FC<SportDashboardProps> = ({ sport, showDraw = false, matches }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{sport}</h1>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Match Details</th>
              <th>
                <div className={styles.oddsHeader}>
                  <span>Back</span>
                  <span>Lay</span>
                </div>
                1
              </th>
              {showDraw && (
                <th>
                  <div className={styles.oddsHeader}>
                    <span>Back</span>
                    <span>Lay</span>
                  </div>
                  X
                </th>
              )}
              <th>
                <div className={styles.oddsHeader}>
                  <span>Back</span>
                  <span>Lay</span>
                </div>
                2
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map(match => (
              <tr
                key={match.id}
                className={`${styles.matchRow} ${match.status === 'LIVE' ? styles.liveMatch : ''}`}
              >
                <td className={styles.matchInfo}>
                  <div className={styles.status}>
                    <span className={`${styles.statusBadge} ${match.status === 'LIVE' ? styles.live : styles.upcoming}`}>
                      {match.status}
                    </span>
                    {match.isBookmarked && (
                      <span className={styles.bookmarkBadge}>
                        <FontAwesomeIcon icon={faBookmark} />
                      </span>
                    )}
                  </div>
                  <div className={styles.teams}>
                    {match.homeTeam} v {match.awayTeam}
                  </div>
                  <div className={styles.competition}>
                    {match.competition}
                  </div>
                  {match.score && (
                    <div className={styles.score}>
                      {match.score}
                    </div>
                  )}
                  {match.additionalInfo && (
                    <div className={styles.additionalInfo}>
                      {match.additionalInfo}
                    </div>
                  )}
                </td>
                <td className={styles.oddsCell}>
                  <OddsButton 
                    type="home" 
                    odds={match.odds.home} 
                    isLocked={match.odds.isLocked}
                    matchId={match.id}
                    teamName={match.homeTeam}
                    matchName={`${match.homeTeam} vs ${match.awayTeam}`}
                  />
                </td>
                {showDraw && match.odds.draw && (
                  <td className={styles.oddsCell}>
                    <OddsButton 
                      type="draw" 
                      odds={match.odds.draw} 
                      isLocked={match.odds.isLocked}
                      matchId={match.id}
                      teamName="Draw"
                      matchName={`${match.homeTeam} vs ${match.awayTeam}`}
                    />
                  </td>
                )}
                <td className={styles.oddsCell}>
                  <OddsButton 
                    type="away" 
                    odds={match.odds.away} 
                    isLocked={match.odds.isLocked}
                    matchId={match.id}
                    teamName={match.awayTeam}
                    matchName={`${match.homeTeam} vs ${match.awayTeam}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BetSlip />
      {/* Mobile sections */}
      <MobileNewLaunched />
      <MobileOurCasino />
    </div>
  );
};

export default SportDashboard;
