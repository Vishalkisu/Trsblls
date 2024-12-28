import React from 'react';
import './History.css';

interface BettingHistory {
  id: number;
  gameName: string;
  betAmount: number;
  result: 'win' | 'loss' | 'pending';
  date: string;
  winAmount?: number;
  ticketId: string;
}

interface HistoryProps {
  history: BettingHistory[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  // Sample betting history data
  const bettingHistory = history;

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Betting History</h1>
        <p>Track all your betting activities and results</p>
      </div>

      <div className="history-filters">
        <div className="filter-group">
          <label>Filter by Status:</label>
          <select>
            <option value="all">All Status</option>
            <option value="win">Won</option>
            <option value="loss">Lost</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Sort by:</label>
          <select>
            <option value="date-desc">Latest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="amount-desc">Highest Amount</option>
            <option value="amount-asc">Lowest Amount</option>
          </select>
        </div>
      </div>

      <div className="history-content">
        <div className="history-table">
          <div className="table-header">
            <div className="header-cell">Date</div>
            <div className="header-cell">Ticket ID</div>
            <div className="header-cell">Game</div>
            <div className="header-cell">Bet Amount</div>
            <div className="header-cell">Win Amount</div>
            <div className="header-cell">Status</div>
          </div>
          {bettingHistory.map((bet) => (
            <div key={bet.id} className="table-row">
              <div className="table-cell">{bet.date}</div>
              <div className="table-cell">{bet.ticketId}</div>
              <div className="table-cell">{bet.gameName}</div>
              <div className="table-cell">₹{bet.betAmount}</div>
              <div className="table-cell">
                {bet.winAmount ? `₹${bet.winAmount}` : '-'}
              </div>
              <div className="table-cell">
                <span className={`status-badge ${bet.result}`}>
                  {bet.result.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="history-summary">
        <div className="summary-card">
          <h3>Total Bets</h3>
          <p>₹3,500</p>
        </div>
        <div className="summary-card">
          <h3>Total Wins</h3>
          <p>₹3,400</p>
        </div>
        <div className="summary-card">
          <h3>Success Rate</h3>
          <p>40%</p>
        </div>
      </div>
    </div>
  );
};

export default History;
