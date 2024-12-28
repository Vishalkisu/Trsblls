import React, { useState, useMemo, useEffect } from 'react';
import History from '../History/History';
import Dashboard from '../Dashboard/Dashboard';
import './Lottery.css';
import cricketImage from './Image/Cricket.webp';

interface BettingOption {
  id: number;
  status: 'ACTIVE' | 'PENDING';
  title: string;
  startDate: string;
  endDate: string;
  price: number;
  image: string;
}

interface BettingHistory {
  id: number;
  gameName: string;
  betAmount: number;
  result: 'win' | 'loss' | 'pending';
  date: string;
  winAmount?: number;
  ticketId: string;
}

const Lottery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lotteries' | 'history' | 'terms' | 'dashboard'>('lotteries');
  const [filter, setFilter] = useState<'all' | 'active' | 'pending'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'date'>('date');
  const [selectedBet, setSelectedBet] = useState<BettingOption | null>(null);

  // Sample data - replace with actual data from your backend
  const bettingOptions: BettingOption[] = [
    {
      id: 1,
      status: 'ACTIVE',
      title: 'THURSDAY PRS VS BRH (SINGLE DIGIT)',
      startDate: '18.12.2024 10:43',
      endDate: '26.12.2024 15:23',
      price: 110,
      image: cricketImage
    },
    {
      id: 2,
      status: 'ACTIVE',
      title: 'FRIDAY MLR VS SYS (DOUBLE CHANCE)',
      startDate: '19.12.2024 12:00',
      endDate: '27.12.2024 18:00',
      price: 150,
      image: cricketImage
    },
    {
      id: 3,
      status: 'ACTIVE',
      title: 'SATURDAY HBH VS ADS (SINGLE DIGIT)',
      startDate: '20.12.2024 14:30',
      endDate: '28.12.2024 20:00',
      price: 120,
      image: cricketImage
    },
    {
      id: 4,
      status: 'ACTIVE',
      title: 'SUNDAY MLS VS BRS (DOUBLE CHANCE)',
      startDate: '21.12.2024 16:00',
      endDate: '29.12.2024 22:00',
      price: 140,
      image: cricketImage
    },
    {
      id: 5,
      status: 'ACTIVE',
      title: 'MONDAY SYT VS PRS (SINGLE DIGIT)',
      startDate: '22.12.2024 13:00',
      endDate: '30.12.2024 19:00',
      price: 130,
      image: cricketImage
    },
    {
      id: 6,
      status: 'ACTIVE',
      title: 'TUESDAY REN VS HBH (DOUBLE CHANCE)',
      startDate: '23.12.2024 15:30',
      endDate: '31.12.2024 21:30',
      price: 160,
      image: cricketImage
    },
    {
      id: 7,
      status: 'ACTIVE',
      title: 'WEDNESDAY BRS VS ADS (SINGLE DIGIT)',
      startDate: '24.12.2024 11:00',
      endDate: '01.01.2025 17:00',
      price: 125,
      image: cricketImage
    },
    {
      id: 8,
      status: 'ACTIVE',
      title: 'THURSDAY MLS VS SYT (DOUBLE CHANCE)',
      startDate: '25.12.2024 14:00',
      endDate: '02.01.2025 20:00',
      price: 145,
      image: cricketImage
    },
    {
      id: 9,
      status: 'PENDING',
      title: 'FRIDAY PRS VS REN (SINGLE DIGIT)',
      startDate: '26.12.2024 12:30',
      endDate: '03.01.2025 18:30',
      price: 135,
      image: cricketImage
    },
    {
      id: 10,
      status: 'PENDING',
      title: 'SATURDAY BRS VS HBH (DOUBLE CHANCE)',
      startDate: '27.12.2024 15:00',
      endDate: '04.01.2025 21:00',
      price: 155,
      image: cricketImage
    }
  ];

  const filteredOptions = bettingOptions.filter(option => {
    if (filter === 'all') return true;
    return option.status.toLowerCase() === filter.toLowerCase();
  });

  const parseDateString = (dateStr: string) => {
    const [date, time] = dateStr.split(' ');
    const [day, month, year] = date.split('.');
    const [hours, minutes] = time.split(':');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));
  };

  const sortedOptions = [...filteredOptions].sort((a, b) => {
    if (sortBy === 'price') {
      return b.price - a.price;
    }
    // Sort by start date
    const dateA = parseDateString(a.startDate);
    const dateB = parseDateString(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const handlePlaceBet = (bet: BettingOption) => {
    setSelectedBet(bet);
    setActiveTab('dashboard');
  };

  useEffect(() => {
    // Check if URL has a hash
    const hash = window.location.hash;
    if (hash === '#terms-section' || hash === '#history-section') {
      const tab = hash === '#terms-section' ? 'terms' : 'history';
      setActiveTab(tab);
      setTimeout(() => {
        const section = document.getElementById(hash.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleTabChange = (tab: 'lotteries' | 'history' | 'terms' | 'dashboard') => {
    setActiveTab(tab);
    const sectionId = tab === 'terms' ? 'terms-section' : 
                     tab === 'history' ? 'history-section' : '';
    
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without causing a page reload
          window.history.pushState({}, '', `#${sectionId}`);
        }
      }, 100);
    } else {
      // Remove hash when switching to other tabs
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  return (
    <div className="lottery-container">
      {/* Header Tabs */}
      <div className="lottery-tabs">
        <button 
          className={`tab ${activeTab === 'lotteries' ? 'active' : ''}`}
          onClick={() => handleTabChange('lotteries')}
        >
          Lotteries
        </button>
        <a 
          href="#history-section"
          className={`tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabChange('history');
          }}
        >
          History
        </a>
        <a 
          href="#terms-section"
          className={`tab ${activeTab === 'terms' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabChange('terms');
          }}
        >
          Terms & Conditions
        </a>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'lotteries' && (
        <div className="lottery-content">
          {/* Filters Section */}
          <div className="lottery-filters">
            <div className="filter-group">
              <label>Show:</label>
              <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
                <option value="all">All Events</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
                <option value="date">Date</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          {/* Games Row */}
          <div className="games-row">
            {sortedOptions.map(option => (
              <div key={option.id} className="lottery-card">
                <div className={`status-badge ${option.status.toLowerCase()}`}>
                  {option.status}
                </div>
                <div className="card-image">
                  <img src={option.image} alt={option.title} />
                </div>
                <div className="card-content">
                  <h3>{option.title}</h3>
                  <p className="date-range">
                    {option.startDate} - {option.endDate}
                  </p>
                  <div className="price">Price: {option.price} PTS</div>
                  <button 
                    className="place-bet"
                    onClick={() => handlePlaceBet(option)}
                    disabled={option.status === 'PENDING'}
                  >
                    Place a Bet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'dashboard' && selectedBet && (
        <div className="dashboard-wrapper">
          <button 
            className="back-to-lotteries"
            onClick={() => {
              setActiveTab('lotteries');
              setSelectedBet(null);
            }}
          >
            ← Back to Lotteries
          </button>
          <Dashboard 
            selectedBet={selectedBet} 
            onBack={() => setActiveTab('lotteries')}
            onSelectBet={(bet) => setSelectedBet(bet)}
            allBets={bettingOptions} 
          />
        </div>
      )}
      {activeTab === 'history' && (
        <div className="history-container">
          <History history={bettingHistory} />
        </div>
      )}
      {activeTab === 'terms' && (
        <div className="terms-content" id="terms-section">
          <h2>Terms & Conditions</h2>
          <div className="terms-sections">
            <section className="terms-section">
              <h3>1. General Rules</h3>
              <ul>
                <li>Players must be 18 years or older to participate in lottery games.</li>
                <li>All bets are final once confirmed and cannot be cancelled.</li>
                <li>The platform reserves the right to modify or cancel any game at its discretion.</li>
                <li>Players are responsible for maintaining the security of their account credentials.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h3>2. Betting Rules</h3>
              <ul>
                <li>Minimum bet amount is 100 PTS per ticket.</li>
                <li>Maximum bet amount varies by game type and is displayed on each game card.</li>
                <li>Bets can only be placed during the specified time window.</li>
                <li>Multiple bets are allowed within the betting limits.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h3>3. Payouts</h3>
              <ul>
                <li>Winnings will be credited to the player's account within 24 hours of result declaration.</li>
                <li>All payouts are subject to platform verification.</li>
                <li>Maximum payout limits apply and vary by game type.</li>
                <li>Disputes must be raised within 48 hours of result declaration.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h3>4. Game Specific Rules</h3>
              <ul>
                <li>Different games may have specific rules and winning criteria.</li>
                <li>Players should review game-specific rules before placing bets.</li>
                <li>In case of technical issues, the platform's decision is final.</li>
                <li>Results are based on official sources and cannot be contested.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h3>5. Responsible Gaming</h3>
              <ul>
                <li>Players are encouraged to set personal betting limits.</li>
                <li>The platform promotes responsible gaming practices.</li>
                <li>Self-exclusion options are available upon request.</li>
                <li>Support services are available for problem gambling.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h3>6. Account Management</h3>
              <ul>
                <li>Players must maintain sufficient balance for placing bets.</li>
                <li>Accounts showing suspicious activity may be suspended.</li>
                <li>Regular account verification may be required.</li>
                <li>Players must keep their contact information updated.</li>
              </ul>
            </section>

            <div className="terms-footer">
              <p>Last Updated: December 24, 2024</p>
              <p>By participating in any lottery game, you agree to these terms and conditions.</p>
              <p>For any queries, please contact our support team.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample betting history data
const bettingHistory: BettingHistory[] = [
  {
    id: 1,
    gameName: "Daily Jackpot",
    betAmount: 500,
    result: "win",
    date: "2024-12-24",
    winAmount: 2500,
    ticketId: "TKT001"
  },
  {
    id: 2,
    gameName: "Weekly Mega Draw",
    betAmount: 1000,
    result: "loss",
    date: "2024-12-23",
    ticketId: "TKT002"
  },
  {
    id: 3,
    gameName: "Lucky 7",
    betAmount: 200,
    result: "pending",
    date: "2024-12-24",
    ticketId: "TKT003"
  },
  {
    id: 4,
    gameName: "Power Ball",
    betAmount: 300,
    result: "win",
    date: "2024-12-22",
    winAmount: 900,
    ticketId: "TKT004"
  },
  {
    id: 5,
    gameName: "Monthly Special",
    betAmount: 1500,
    result: "pending",
    date: "2024-12-24",
    ticketId: "TKT005"
  }
];

export default Lottery;
