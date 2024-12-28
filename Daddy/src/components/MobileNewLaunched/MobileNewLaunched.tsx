import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileNewLaunched.css';

const MobileNewLaunched: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: 'Premium Roulette',
      description: 'Live Dealer Experience',
      image: '/images/r5rY8TcuJBaAIZrE4muvskQMcqmrG2bT9fmwDKDeov3Jyy0TA.webp',
      category: 'roulette'
    },
    {
      id: 2,
      title: 'Teen Patti Pro',
      description: 'Real-time Multiplayer',
      image: '/images/chkzPZRCf6UOESPfM0Qka3KAB4HXS7aWvlHoSB9PGKtgyy0TA.webp',
      category: 'teenpatti'
    },
    {
      id: 3,
      title: 'Poker Masters',
      description: 'High Stakes Tables',
      image: '/images/21enyjm2oCUueUdmEcBQxg9g1KTTSJLF6pDAv0D42ujYyy0TA.webp',
      category: 'poker'
    },
    {
      id: 4,
      title: 'Blackjack Elite',
      description: 'VIP Gaming Experience',
      image: '/images/vwzlKES6pQIBH5erwC5m9vAvjZvqZPRRTVs7jokKKifRVfpnA.webp',
      category: 'blackjack'
    }
  ];

  const handleGameClick = (category: string) => {
    navigate('/live-casino', { state: { activeFilter: category } });
  };

  return (
    <div className="mobile-new-launched">
      <div className="section-header">
        <h3>New Launched</h3>
      </div>
      <div className="new-launched-content">
        <div className="promo-banner-slider">
          <div className="promo-slides">
            {games.map((game) => (
              <div key={game.id} className="promo-slide" onClick={() => handleGameClick(game.category)}>
                <img 
                  src={game.image}
                  alt={game.title}
                  className="promo-image"
                />
                <div className="game-overlay">
                  <h4>{game.title}</h4>
                  <p>{game.description}</p>
                  <button className="play-now">Play Now</button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {games.map((_, index) => (
              <span key={index} className={`dot ${index === 0 ? 'active' : ''}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNewLaunched;
