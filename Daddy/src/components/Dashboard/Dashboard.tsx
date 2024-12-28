import React, { useState } from 'react';
import './Dashboard.css';
import RandomBetDashboard from '../RandomBetDashboard/RandomBetDashboard';

interface BetData {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  price: number;
  image: string;
  status: string;
}

interface BetInputs {
  digit1: string;
  digit2: string;
}

interface DashboardProps {
  selectedBet: BetData | null;
  onBack: () => void;
  onSelectBet?: (bet: BetData) => void;
  allBets?: BetData[]; 
}

const Dashboard: React.FC<DashboardProps> = ({ selectedBet, onBack, onSelectBet, allBets = [] }) => {
  const [betInputs, setBetInputs] = useState<BetInputs>({ digit1: '', digit2: '' });
  const [showMore, setShowMore] = useState(false);
  const [showRandomBet, setShowRandomBet] = useState(false);

  if (!selectedBet) {
    return (
      <div className="dashboard-empty">
        <h2>No bet selected</h2>
        <p>Please select a bet from the lotteries tab to place your bet.</p>
      </div>
    );
  }

  if (showRandomBet) {
    return (
      <div className="dashboard-container">
        <RandomBetDashboard
          selectedBet={selectedBet}
          onBack={() => setShowRandomBet(false)}
          otherLotteries={allBets.filter(bet => bet.id !== selectedBet.id)}
        />
      </div>
    );
  }

  const handleInputChange = (field: keyof BetInputs, value: string) => {
    if (value === '' || (/^\d$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 9)) {
      setBetInputs(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleRandomBet = () => {
    setShowRandomBet(true);
  };

  const handlePlaceCustomBet = () => {
    console.log('Placing custom bet:', {
      betId: selectedBet.id,
      digits: betInputs,
    });
    setBetInputs({ digit1: '', digit2: '' });
  };

  const otherLotteries = allBets.filter(bet => bet.id !== selectedBet.id).slice(0, showMore ? undefined : 3);

  return (
    <div className="dashboard-main">
      <div className="dashboard-content">
        <div className="back-button">
          <button onClick={onBack}>←</button>
          <h2>{selectedBet.title}</h2>
        </div>
        
        <div className="lottery-info">
          <div className="date">Date: {selectedBet.startDate} - {selectedBet.endDate}</div>
          <div className="price">Price: {selectedBet.price} PTS</div>
        </div>

        <div className="win-amounts">
          <div className="win-amount">
            <span className="label">2 numbers correct:</span>
            <span className="amount">10000 PTS</span>
          </div>
          <div className="win-amount">
            <span className="label">1 numbers correct:</span>
            <span className="amount">800 PTS</span>
          </div>
        </div>

        <div className="bet-inputs">
          <div className="input-field">
            <div className="input-number">1</div>
            <label>Last digit of 5 over total score of 1st inning.</label>
            <input
              type="text"
              value={betInputs.digit1}
              onChange={(e) => handleInputChange('digit1', e.target.value)}
              maxLength={1}
            />
          </div>
          <div className="input-field">
            <div className="input-number">2</div>
            <label>Last digit of 4 over total score of 1st inning.</label>
            <input
              type="text"
              value={betInputs.digit2}
              onChange={(e) => handleInputChange('digit2', e.target.value)}
              maxLength={1}
            />
          </div>
        </div>

        <div className="bet-buttons">
          <button className="random-bet" onClick={handleRandomBet}>
            Make random bet
          </button>
          <button 
            disabled={!betInputs.digit1 || !betInputs.digit2}
            className="custom-bet"
            onClick={handlePlaceCustomBet}
          >
            Place custom bet
          </button>
        </div>

        <div className="match-info">
          <h3>PERTH SCORCHERS VS BRISBANE HEAT, 12th MATCH (26.12.24) JODI LOTTERY</h3>
          <p>ENTRY STARTING DATE: - 18-12-2024</p>
          <p>ENTRY CLOSEING DATE: - 26-12-2024</p>
          <p>FIRST PRIZE: 10,000 pts</p>
          <p>SECOND PRIZE: 800 pts</p>
        </div>

        <div className="contest-rules">
          <h3>Contest Rules:</h3>
          <p>1: All entries will be based on the lottery purchase starting from 18th December 2024 till 26th December 2024.</p>
          <p>3: Minimum Amount to purchase the Lottery is 200pts (number of Lottery's issued will be in multiples of 200). For example, a customer will get the lottery ticket for every 200 ...</p>
          {showMore && (
            <>
              {/* Add more rules here */}
            </>
          )}
          <button className="show-more" onClick={() => setShowMore(!showMore)}>
            Show more
          </button>
        </div>
      </div>

      <div className="other-lotteries">
        <h3>Other lotteries</h3>
        <div className="lottery-grid">
          {otherLotteries.map((bet) => (
            <div key={bet.id} className="lottery-card" onClick={() => onSelectBet?.(bet)}>
              <img src={bet.image} alt={bet.title} />
              <div className="status">{bet.status}</div>
              <div className="card-content">
                <div className="date">{bet.startDate}</div>
                <h4>{bet.title}</h4>
                <div className="price">Price: {bet.price} PTS</div>
                <button 
                  className="place-bet"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectBet) {
                      onSelectBet(bet);
                    }
                  }}
                >
                  Place a bet
                </button>
              </div>
            </div>
          ))}
        </div>
        {allBets.length > 3 && (
          <button className="show-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
