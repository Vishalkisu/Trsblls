import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileOurCasino.css';

const MobileOurCasino: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: 'Teen Patti',
      image: '/images/2i3o0SoTu57ICBz212BFeU7tKUgT2Yo5NjemR99XkFWNWfpnA.webp',
      category: 'teenpatti'
    },
    {
      id: 2,
      title: 'Roulette',
      image: '/images/5hjfgTC34VxEYCOyPOpMtrnMshYYYrPzx8uIRb2N93vLnf0TA.webp',
      category: 'roulette'
    },
    {
      id: 3,
      title: 'Blackjack',
      image: '/images/FlAzcbEgtQbFClOaa5BBKSc1MieMXjTrwhwPXfjYz2whafpnA.webp',
      category: 'blackjack'
    },
    {
      id: 4,
      title: 'Poker',
      image: '/images/GYPlLtVy5iqWNFSTFSrMJ94aXG0Bw6DrzgO9lcfKFW9Krf0TA.webp',
      category: 'poker'
    },
    {
      id: 5,
      title: 'Baccarat',
      image: '/images/pbPfviYW84zXQynfIlR2tccajytTtxX4fetw1hVO6Qv3r9TPB.webp',
      category: 'baccarat'
    },
    {
      id: 6,
      title: 'Dragon Tiger',
      image: '/images/r2mHHLiWgj5UNJWI2pGKJpSR2LPaf6cxFo8kNt5pEz1luf0TA.webp',
      category: 'dragon-tiger'
    }
  ];

  const handleGameClick = (category: string) => {
    navigate('/live-casino', { state: { activeFilter: category } });
  };

  return (
    <div className="mobile-casino">
      <div className="section-header">
        <h3>Our Casino</h3>
      </div>
      <div className="casino-grid">
        {games.map((game) => (
          <div key={game.id} className="casino-game" onClick={() => handleGameClick(game.category)}>
            <img src={game.image} alt={game.title} />
            <div className="game-info">
              <span>{game.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileOurCasino;
