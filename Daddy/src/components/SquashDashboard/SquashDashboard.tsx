import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennis, faLock, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './SquashDashboard.module.css';

// Mock data for squash matches
const matches = [
  {
    id: 1,
    status: 'LIVE',
    event: 'PSA World Tour Finals',
    competition: 'Semi-Finals',
    isBookmarked: true,
    matchInfo: {
      game: '3rd Game',
      score: '7-5',
      venue: 'Mall of Arabia',
      court: 'Glass Court'
    },
    score: {
      games: {
        home: '1',
        away: '1'
      },
      currentGame: {
        home: '7',
        away: '5'
      },
      previousGames: [
        { home: '11', away: '8' },
        { home: '9', away: '11' }
      ]
    },
    statistics: {
      winners: { home: '12', away: '10' },
      errors: { home: '5', away: '7' },
      letCalls: { home: '2', away: '3' }
    },
    players: [
      {
        name: 'Ali Farag',
        country: 'Egypt',
        rank: '1',
        odds: { back: 1.65, lay: 1.67 }
      },
      {
        name: 'Paul Coll',
        country: 'New Zealand',
        rank: '3',
        odds: { back: 2.30, lay: 2.32 }
      }
    ],
    markets: [
      {
        name: 'Current Game Winner',
        options: [
          { name: 'Ali Farag', odds: { back: 1.80, lay: 1.82 } },
          { name: 'Paul Coll', odds: { back: 2.10, lay: 2.12 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 2,
    status: 'Today 14:00',
    event: 'British Open',
    competition: 'Quarter-Finals',
    isBookmarked: false,
    matchInfo: {
      venue: 'Allam Sport Centre',
      court: 'Show Court'
    },
    players: [
      {
        name: 'Mohamed ElShorbagy',
        country: 'Egypt',
        rank: '2',
        odds: { back: 1.90, lay: 1.92 }
      },
      {
        name: 'Diego Elias',
        country: 'Peru',
        rank: '4',
        odds: { back: 1.90, lay: 1.92 }
      }
    ],
    markets: [
      {
        name: 'Match Winner',
        options: [
          { name: 'Mohamed ElShorbagy', odds: { back: 1.90, lay: 1.92 } },
          { name: 'Diego Elias', odds: { back: 1.90, lay: 1.92 } }
        ]
      }
    ],
    isLocked: false
  },
  {
    id: 3,
    status: 'Tomorrow 15:00',
    event: 'US Open',
    competition: 'Finals',
    isBookmarked: true,
    matchInfo: {
      venue: 'Drexel University',
      court: 'Main Court'
    },
    players: [
      {
        name: 'Nour El Sherbini',
        country: 'Egypt',
        rank: '1',
        odds: { back: 1.75, lay: 1.77 }
      },
      {
        name: 'Nouran Gohar',
        country: 'Egypt',
        rank: '2',
        odds: { back: 2.15, lay: 2.17 }
      }
    ],
    markets: [
      {
        name: 'Total Games',
        options: [
          { name: 'Over 4.5', odds: { back: 1.85, lay: 1.87 } },
          { name: 'Under 4.5', odds: { back: 1.95, lay: 1.97 } }
        ]
      }
    ],
    isLocked: true
  }
];

const OddsButton = ({ odds, isLocked }) => {
  if (isLocked) {
    return (
      <div className={styles.oddsBox}>
        <div className={`${styles.oddsValue} ${styles.locked}`}>
          <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.oddsBox}>
      <button className={`${styles.oddsValue} ${styles.back}`}>
        {odds.back.toFixed(2)}
      </button>
      <button className={`${styles.oddsValue} ${styles.lay}`}>
        {odds.lay.toFixed(2)}
      </button>
    </div>
  );
};

const SquashDashboard = () => {
  const [filter, setFilter] = useState('all');

  const filteredMatches = matches.filter(match => {
    switch (filter) {
      case 'live':
        return match.status === 'LIVE';
      case 'today':
        return match.status.includes('Today');
      case 'upcoming':
        return match.status.includes('Tomorrow');
      default:
        return true;
    }
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>
          <FontAwesomeIcon icon={faTableTennis} className={styles.sportIcon} />
          Squash
        </h1>
        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Matches
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'live' ? styles.active : ''}`}
            onClick={() => setFilter('live')}
          >
            Live
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'today' ? styles.active : ''}`}
            onClick={() => setFilter('today')}
          >
            Today
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'upcoming' ? styles.active : ''}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className={styles.matchesContainer}>
        {filteredMatches.map(match => (
          <div key={match.id} className={styles.matchCard}>
            <div className={styles.matchHeader}>
              <div className={styles.matchInfo}>
                <span className={styles.event}>{match.event}</span>
                <span className={styles.competition}>{match.competition}</span>
                <div className={styles.venueInfo}>
                  <span className={styles.venue}>{match.matchInfo.venue}</span>
                  {match.matchInfo.court && (
                    <span className={styles.court}>{match.matchInfo.court}</span>
                  )}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${match.isBookmarked ? styles.active : ''}`}
              />
            </div>
            <div className={styles.matchDetails}>
              <div className={styles.status}>{match.status}</div>
              {match.score && (
                <div className={styles.scoreBoard}>
                  <div className={styles.games}>
                    Games: {match.score.games.home} - {match.score.games.away}
                  </div>
                  <div className={styles.currentGame}>
                    Current Game: {match.score.currentGame.home} - {match.score.currentGame.away}
                  </div>
                  {match.score.previousGames && (
                    <div className={styles.previousGames}>
                      {match.score.previousGames.map((game, index) => (
                        <div key={index} className={styles.gameScore}>
                          Game {index + 1}: {game.home} - {game.away}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {match.statistics && (
                <div className={styles.statistics}>
                  <div className={styles.statItem}>
                    <span>Winners</span>
                    <span>{match.statistics.winners.home} - {match.statistics.winners.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Errors</span>
                    <span>{match.statistics.errors.home} - {match.statistics.errors.away}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Let Calls</span>
                    <span>{match.statistics.letCalls.home} - {match.statistics.letCalls.away}</span>
                  </div>
                </div>
              )}
              <div className={styles.players}>
                {match.players.map((player, index) => (
                  <div key={index} className={styles.player}>
                    <div className={styles.playerInfo}>
                      <span className={styles.playerName}>{player.name}</span>
                      <div className={styles.playerDetails}>
                        <span className={styles.country}>{player.country}</span>
                        <span className={styles.rank}>World Rank: {player.rank}</span>
                      </div>
                    </div>
                    <OddsButton odds={player.odds} isLocked={match.isLocked} />
                  </div>
                ))}
              </div>
              {match.markets && (
                <div className={styles.markets}>
                  {match.markets.map((market, index) => (
                    <div key={index} className={styles.market}>
                      <div className={styles.marketName}>{market.name}</div>
                      <div className={styles.options}>
                        {market.options.map((option, optIndex) => (
                          <div key={optIndex} className={styles.option}>
                            <span className={styles.optionName}>{option.name}</span>
                            <OddsButton odds={option.odds} isLocked={match.isLocked} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquashDashboard;
