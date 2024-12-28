import React from 'react';
import './RightSidebar.css';

interface Winner {
  name: string;
  amount: string;
  timestamp: string;
}

const RightSidebar: React.FC = () => {
  // Sample winners data
  const winners: Winner[] = [
    { name: "Su****", amount: "1,72,65,000", timestamp: "19/07/2023 18:36" },
    { name: "10****", amount: "85,42,000", timestamp: "19/07/2023 17:45" },
    { name: "rs****", amount: "2,15,65,000", timestamp: "19/07/2023 16:22" },
    { name: "ak****", amount: "95,32,000", timestamp: "19/07/2023 15:15" },
    { name: "jp****", amount: "1,45,78,000", timestamp: "19/07/2023 14:30" },
  ];

  return (
    <div className="right-sidebar">
      {/* Winner Announcement Section */}
      <div className="right-sidebar-section">
        <div className="section-header">
          <h3>Winner Announcement</h3>
        </div>
        <div className="winners-list">
          {winners.map((winner, index) => (
            <div key={index} className="winner-item">
              <span className="winner-name">{winner.name}</span>
              <span className="winner-amount">₹{winner.amount}</span>
              <span className="winner-timestamp">{winner.timestamp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* New Launched Section */}
      <div className="right-sidebar-section">
        <div className="section-header">
          <h3>New Launched</h3>
        </div>
        <div className="new-launched-content">
          <div className="promo-banner-slider">
            <div className="promo-slides">
              <div className="promo-slide">
                <img 
                  src="/images/r5rY8TcuJBaAIZrE4muvskQMcqmrG2bT9fmwDKDeov3Jyy0TA.webp" 
                  alt="Premium Game" 
                  className="promo-image"
                />
                <div className="game-overlay">
                  <h4>Premium Roulette</h4>
                  <p>Live Dealer Experience</p>
                  <button className="play-now">Play Now</button>
                </div>
              </div>
              <div className="promo-slide">
                <img 
                  src="/images/chkzPZRCf6UOESPfM0Qka3KAB4HXS7aWvlHoSB9PGKtgyy0TA.webp" 
                  alt="Teen Patti Pro" 
                  className="promo-image"
                />
                <div className="game-overlay">
                  <h4>Teen Patti Pro</h4>
                  <p>Real-time Multiplayer</p>
                  <button className="play-now">Play Now</button>
                </div>
              </div>
              <div className="promo-slide">
                <img 
                  src="/images/21enyjm2oCUueUdmEcBQxg9g1KTTSJLF6pDAv0D42ujYyy0TA.webp" 
                  alt="Poker Masters" 
                  className="promo-image"
                />
                <div className="game-overlay">
                  <h4>Poker Masters</h4>
                  <p>High Stakes Tables</p>
                  <button className="play-now">Play Now</button>
                </div>
              </div>
              <div className="promo-slide">
                <img 
                  src="/images/vwzlKES6pQIBH5erwC5m9vAvjZvqZPRRTVs7jokKKifRVfpnA.webp" 
                  alt="Blackjack Elite" 
                  className="promo-image"
                />
                <div className="game-overlay">
                  <h4>Blackjack Elite</h4>
                  <p>VIP Gaming Experience</p>
                  <button className="play-now">Play Now</button>
                </div>
              </div>
            </div>
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Casino Section */}
      <div className="right-sidebar-section">
        <div className="section-header">
          <h3>Our Casino</h3>
        </div>
        <div className="casino-grid">
          <div className="casino-game">
            <img src="/images/2i3o0SoTu57ICBz212BFeU7tKUgT2Yo5NjemR99XkFWNWfpnA.webp" alt="Teen Patti" />
            <div className="game-info">
              <span>Teen Patti</span>
            </div>
          </div>
          <div className="casino-game">
            <img src="/images/5hjfgTC34VxEYCOyPOpMtrnMshYYYrPzx8uIRb2N93vLnf0TA.webp" alt="Roulette" />
            <div className="game-info">
              <span>Roulette</span>
            </div>
          </div>
          <div className="casino-game">
            <img src="/images/FlAzcbEgtQbFClOaa5BBKSc1MieMXjTrwhwPXfjYz2whafpnA.webp" alt="Blackjack" />
            <div className="game-info">
              <span>Blackjack</span>
            </div>
          </div>
          <div className="casino-game">
            <img src="/images/GYPlLtVy5iqWNFSTFSrMJ94aXG0Bw6DrzgO9lcfKFW9Krf0TA.webp" alt="Poker" />
            <div className="game-info">
              <span>Poker</span>
            </div>
          </div>
          <div className="casino-game">
            <img src="/images/pbPfviYW84zXQynfIlR2tccajytTtxX4fetw1hVO6Qv3r9TPB.webp" alt="Baccarat" />
            <div className="game-info">
              <span>Baccarat</span>
            </div>
          </div>
          <div className="casino-game">
            <img src="/images/r2mHHLiWgj5UNJWI2pGKJpSR2LPaf6cxFo8kNt5pEz1luf0TA.webp" alt="Dragon Tiger" />
            <div className="game-info">
              <span>Dragon Tiger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
