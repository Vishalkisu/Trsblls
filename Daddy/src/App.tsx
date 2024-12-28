import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { AuthProvider } from './context/AuthContext'
import { SidebarProvider } from './context/SidebarContext'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import NewBanner from './components/NewBanner/NewBanner'
import NewBannerFilters from './components/NewBannerFilters/NewBannerFilters'
import CricketDashboard from './components/CricketDashboard/CricketDashboard'
import FootballDashboard from './components/FootballDashboard/FootballDashboard'
import TennisDashboard from './components/TennisDashboard/TennisDashboard'
import BasketballDashboard from './components/BasketballDashboard/BasketballDashboard'
import TableTennisDashboard from './components/TableTennisDashboard/TableTennisDashboard'
import VolleyballDashboard from './components/VolleyballDashboard/VolleyballDashboard'
import BoxingDashboard from './components/BoxingDashboard/BoxingDashboard'
import IceHockeyDashboard from './components/IceHockeyDashboard/IceHockeyDashboard'
import BaseballDashboard from './components/BaseballDashboard/BaseballDashboard'
import AmericanFootballDashboard from './components/AmericanFootballDashboard/AmericanFootballDashboard'
import SoccerDashboard from './components/SoccerDashboard/SoccerDashboard'
import BadmintonDashboard from './components/BadmintonDashboard/BadmintonDashboard'
import SnookerDashboard from './components/SnookerDashboard/SnookerDashboard'
import DartsDashboard from './components/DartsDashboard/DartsDashboard'
import Formula1Dashboard from './components/Formula1Dashboard/Formula1Dashboard'
import GolfDashboard from './components/GolfDashboard/GolfDashboard'
import HorseRacingDashboard from './components/HorseRacingDashboard/HorseRacingDashboard'
import CyclingDashboard from './components/CyclingDashboard/CyclingDashboard'
import EsportsDashboard from './components/EsportsDashboard/EsportsDashboard'
import EsoccerDashboard from './components/EsoccerDashboard/EsoccerDashboard'
import HandballDashboard from './components/HandballDashboard/HandballDashboard'
import FutsalDashboard from './components/FutsalDashboard/FutsalDashboard'
import BeachVolleyballDashboard from './components/BeachVolleyballDashboard/BeachVolleyballDashboard'
import SquashDashboard from './components/SquashDashboard/SquashDashboard'
import MotoGPDashboard from './components/MotoGPDashboard/MotoGPDashboard'
import MMADashboard from './components/MMADashboard/MMADashboard'
import WaterPoloDashboard from './components/WaterPoloDashboard/WaterPoloDashboard'
import FieldHockeyDashboard from './components/FieldHockeyDashboard/FieldHockeyDashboard'
import LacrosseDashboard from './components/LacrosseDashboard/LacrosseDashboard'
import NetballDashboard from './components/NetballDashboard/NetballDashboard'
import UltimateFrisbeeDashboard from './components/UltimateFrisbeeDashboard/UltimateFrisbeeDashboard'
import RowingDashboard from './components/RowingDashboard/RowingDashboard'
import SurfingDashboard from './components/SurfingDashboard/SurfingDashboard'
import SailingDashboard from './components/SailingDashboard/SailingDashboard'
import ClimbingDashboard from './components/ClimbingDashboard/ClimbingDashboard'
import EGamesDashboard from './components/EGamesDashboard/EGamesDashboard'
import KabaddiDashboard from './components/KabaddiDashboard/KabaddiDashboard'
import RugbyLeagueDashboard from './components/RugbyLeagueDashboard/RugbyLeagueDashboard'
import MixedMartialArtsDashboard from './components/MixedMartialArtsDashboard/MixedMartialArtsDashboard'
import ChessDashboard from './components/ChessDashboard/ChessDashboard'
import MotorbikesDashboard from './components/MotorbikesDashboard/MotorbikesDashboard'
import AthleticsDashboard from './components/AthleticsDashboard/AthleticsDashboard'
import Basketball3X3Dashboard from './components/Basketball3X3Dashboard/Basketball3X3Dashboard'
import SumoDashboard from './components/SumoDashboard/SumoDashboard'
import VirtualSportsDashboard from './components/VirtualSportsDashboard/VirtualSportsDashboard'
import MotorSportsDashboard from './components/MotorSportsDashboard/MotorSportsDashboard'
import RugbyUnionDashboard from './components/RugbyUnionDashboard/RugbyUnionDashboard'
import BoatRacingDashboard from './components/BoatRacingDashboard/BoatRacingDashboard'
import PoliticsDashboard from './components/PoliticsDashboard/PoliticsDashboard'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import BetSlip from './components/BetSlip/BetSlip';
import Footer from './components/Footer/Footer';
import GreyhoundRacingDashboard from './components/GreyhoundRacingDashboard/GreyhoundRacingDashboard';
import LiveCasino from './components/LiveCasino/LiveCasino';
import Slots from './components/Slots/Slots';
import FantasyGames from './components/FantasyGames/FantasyGames';
import Lottery from './components/Lottery/Lottery';
import BetPortfolio from './components/BetPortfolio/BetPortfolio';
import DepositStatement from './components/DepositStatement/DepositStatement';
import ChatFAB from './components/ChatFAB/ChatFAB';

import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = () => {
      // Add a minimum loading time of 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    // Start loading when component mounts
    loadApp();

    // Add event listener for page load
    window.addEventListener('load', loadApp);

    // Cleanup
    return () => window.removeEventListener('load', loadApp);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="app">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
              success: {
                iconTheme: {
                  primary: '#4CAF50',
                  secondary: '#fff',
                },
                style: {
                  background: '#388E3C',
                },
              },
              error: {
                iconTheme: {
                  primary: '#f44336',
                  secondary: '#fff',
                },
                style: {
                  background: '#d32f2f',
                },
              },
            }}
          />
          <ChatFAB />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <NewBanner />
                  <NewBannerFilters />
                  <div className="dashboard-container">
                    <Sidebar />
                    <Outlet />
                    <RightSidebar />
                  </div>
                </>
              }>
                <Route index element={<Navigate to="/cricket" />} />
                <Route path="cricket" element={<CricketDashboard />} />
                <Route path="american-football" element={<AmericanFootballDashboard />} />
                <Route path="athletics" element={<AthleticsDashboard />} />
                <Route path="badminton" element={<BadmintonDashboard />} />
                <Route path="baseball" element={<BaseballDashboard />} />
                <Route path="basketball" element={<BasketballDashboard />} />
                <Route path="basketball-3x3" element={<Basketball3X3Dashboard />} />
                <Route path="beach-volleyball" element={<BeachVolleyballDashboard />} />
                <Route path="boat-racing" element={<BoatRacingDashboard />} />
                <Route path="boxing" element={<BoxingDashboard />} />
                <Route path="chess" element={<ChessDashboard />} />
                <Route path="climbing" element={<ClimbingDashboard />} />
                <Route path="cycling" element={<CyclingDashboard />} />
                <Route path="darts" element={<DartsDashboard />} />
                <Route path="egames" element={<EGamesDashboard />} />
                <Route path="esoccer" element={<EsoccerDashboard />} />
                <Route path="esports" element={<EsportsDashboard />} />
                <Route path="field-hockey" element={<FieldHockeyDashboard />} />
                <Route path="formula1" element={<Formula1Dashboard />} />
                <Route path="football" element={<FootballDashboard />} />
                <Route path="futsal" element={<FutsalDashboard />} />
                <Route path="golf" element={<GolfDashboard />} />
                <Route path="greyhound-racing" element={<GreyhoundRacingDashboard />} />
                <Route path="handball" element={<HandballDashboard />} />
                <Route path="horse-racing" element={<HorseRacingDashboard />} />
                <Route path="ice-hockey" element={<IceHockeyDashboard />} />
                <Route path="kabaddi" element={<KabaddiDashboard />} />
                <Route path="lacrosse" element={<LacrosseDashboard />} />
                <Route path="mixed-martial-arts" element={<MixedMartialArtsDashboard />} />
                <Route path="motogp" element={<MotoGPDashboard />} />
                <Route path="snooker" element={<SnookerDashboard />} />
                <Route path="motor-sports" element={<MotorSportsDashboard />} />
                <Route path="motorbikes" element={<MotorbikesDashboard />} />
                <Route path="netball" element={<NetballDashboard />} />
                <Route path="politics" element={<PoliticsDashboard />} />
                <Route path="rowing" element={<RowingDashboard />} />
                <Route path="rugby-league" element={<RugbyLeagueDashboard />} />
                <Route path="rugby-union" element={<RugbyUnionDashboard />} />
                <Route path="sailing" element={<SailingDashboard />} />
                <Route path="soccer" element={<SoccerDashboard />} />
                <Route path="squash" element={<SquashDashboard />} />
                <Route path="sumo" element={<SumoDashboard />} />
                <Route path="surfing" element={<SurfingDashboard />} />
                <Route path="table-tennis" element={<TableTennisDashboard />} />
                <Route path="tennis" element={<TennisDashboard />} />
                <Route path="ultimate-frisbee" element={<UltimateFrisbeeDashboard />} />
                <Route path="virtual-sports" element={<VirtualSportsDashboard />} />
                <Route path="volleyball" element={<VolleyballDashboard />} />
                <Route path="water-polo" element={<WaterPoloDashboard />} />
              </Route>
              <Route element={
                <div className="dashboard-container">
                  <Sidebar />
                  <Outlet />
                  <RightSidebar />
                </div>
              }>
                <Route path="live-casino" element={<LiveCasino />} />
                <Route path="slots" element={<Slots />} />
                <Route path="fantasy-games" element={<FantasyGames />} />
                <Route path="lottery" element={<Lottery />} />
                <Route path="bet-portfolio" element={<BetPortfolio />} />
                <Route path="deposit-statement" element={<DepositStatement />} />
              </Route>
            </Routes>
            <BetSlip />
          </main>
          <Footer />
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App
