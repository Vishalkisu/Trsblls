import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Bi from 'react-icons/bi';
import * as Io from 'react-icons/io5';
import * as Gi from 'react-icons/gi';
import * as Md from 'react-icons/md';
import * as Fa from 'react-icons/fa';
import { useSidebar } from '../../context/SidebarContext';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const { isOpen, toggleSidebar } = useSidebar();

  const toggleExpand = (item: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <>
      <div className={`sidebar-container ${isOpen ? 'active' : ''}`}>
        <div className="sidebar">
          <div className="sidebar-content">
            <div className="sidebar-section">
              <h3 className="section-title">
                Upcoming Fixtures
                <Io.IoChevronForward />
              </h3>
              <ul className="category-list">
                <li className={expandedItems['today'] ? 'expanded' : ''} onClick={(e) => toggleExpand('today', e)}>
                  <Io.IoCalendarOutline />
                  Today's Events
                  <span>45</span>
                  {expandedItems['today'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>Cricket: IND vs SA (14:30)<span className="live">LIVE</span></li>
                    <li>Football: MUN vs CHE (15:00)<span className="live">LIVE</span></li>
                    <li>Tennis: Nadal vs Djok (16:45)</li>
                    <li>Horse Racing: Royal Ascot R5 (17:30)</li>
                  </ul>
                </li>
                <li className={expandedItems['tomorrow'] ? 'expanded' : ''} onClick={(e) => toggleExpand('tomorrow', e)}>
                  <Io.IoCalendarOutline />
                  Tomorrow's Events
                  <span>38</span>
                  {expandedItems['tomorrow'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>Cricket: AUS vs PAK (09:00)</li>
                    <li>Football: RMA vs BAR (20:45)</li>
                    <li>Tennis: FED vs MUR (16:00)</li>
                    <li>Horse Racing: Melbourne Cup (11:00)</li>
                  </ul>
                </li>
                <li className={expandedItems['week'] ? 'expanded' : ''} onClick={(e) => toggleExpand('week', e)}>
                  <Io.IoCalendarOutline />
                  This Week
                  <span>156</span>
                  {expandedItems['week'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>Premier League (23 matches)</li>
                    <li>Test Cricket Series (5 matches)</li>
                    <li>ATP Tour Finals (12 matches)</li>
                    <li>F1 Grand Prix (Weekend)</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="section-title">
                Racing Sport
                <Io.IoChevronForward />
              </h3>
              <ul className="category-list">
                <li className={expandedItems['horse'] ? 'expanded' : ''}>
                  <Link to="/horse-racing" className="category-link" onClick={(e) => e.stopPropagation()}>
                    <Gi.GiHorseHead />
                    Horse Racing
                  </Link>
                  <span>12</span>
                  <div className="expand-button" onClick={(e) => toggleExpand('horse', e)}>
                    {expandedItems['horse'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  </div>
                  <ul className="sub-menu">
                    <li>Royal Ascot R3<span className="live">LIVE</span></li>
                    <li>Kentucky Derby Heat 2<span className="live">LIVE</span></li>
                    <li>Melbourne Cup Qualifiers</li>
                    <li>Dubai World Cup Prep</li>
                  </ul>
                </li>
                <li className={expandedItems['greyhound'] ? 'expanded' : ''}>
                  <Link to="/greyhound-racing" className="category-link" onClick={(e) => e.stopPropagation()}>
                    <Bi.BiRun />
                    Greyhound Racing
                  </Link>
                  <span>8</span>
                  <div className="expand-button" onClick={(e) => toggleExpand('greyhound', e)}>
                    {expandedItems['greyhound'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  </div>
                  <ul className="sub-menu">
                    <li>Romford R5<span className="live">LIVE</span></li>
                    <li>Swindon Classic Heat</li>
                    <li>Oxford Sprint Final<span className="live">LIVE</span></li>
                    <li>Nottingham Cup</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="section-title">
                All Sport
                <Io.IoChevronForward />
              </h3>
              <ul className="category-list">
                <li><Md.MdGavel />Politics<span>4</span></li>
                <li className={expandedItems['cricket'] ? 'expanded' : ''} onClick={(e) => toggleExpand('cricket', e)}>
                  <Md.MdSportsCricket />
                  Cricket
                  <span>23</span>
                  {expandedItems['cricket'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>India vs South Africa<span className="live">LIVE</span></li>
                    <li>Australia vs Pakistan<span className="live">LIVE</span></li>
                    <li>Bangladesh vs New Zealand</li>
                  </ul>
                </li>
                <li className={expandedItems['football'] ? 'expanded' : ''} onClick={(e) => toggleExpand('football', e)}>
                  <Bi.BiFootball />
                  Football
                  <span>98</span>
                  {expandedItems['football'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>Manchester United vs Chelsea<span className="live">LIVE</span></li>
                    <li>Real Madrid vs Barcelona<span className="live">LIVE</span></li>
                    <li>Bayern Munich vs Dortmund</li>
                  </ul>
                </li>
                <li className={expandedItems['tennis'] ? 'expanded' : ''} onClick={(e) => toggleExpand('tennis', e)}>
                  <Bi.BiTennisBall />
                  Tennis
                  <span>38</span>
                  {expandedItems['tennis'] ? <Io.IoChevronDown className="expand-icon" /> : <Io.IoChevronForward className="expand-icon" />}
                  <ul className="sub-menu">
                    <li>Djokovic vs Nadal<span className="live">LIVE</span></li>
                    <li>Federer vs Murray</li>
                    <li>Williams vs Osaka<span className="live">LIVE</span></li>
                  </ul>
                </li>
                <li>
                  <a href="/esoccer">
                    <Gi.GiSoccerKick />
                    Esoccer
                    <span>16</span>
                  </a>
                </li>
                <li><Bi.BiTennisBall />Table Tennis<span>118</span></li>
                <li>
                  <a href="/snooker">
                    <Gi.GiSnowflake1 />
                    Snooker
                    <span>15</span>
                  </a>
                </li>
                <li><Bi.BiFootball />Basketball<span>117</span></li>
                <li><Bi.BiBasketball />Volleyball<span>60</span></li>
                <li><Bi.BiTennisBall />Snooker<span>4</span></li>
                <li><Bi.BiFootball />Ice Hockey<span>35</span></li>
                <li><Io.IoGameController />E Games<span>8</span></li>
                <li><Bi.BiFootball />Futsal<span>2</span></li>
                <li><Bi.BiBasketball />Handball<span>5</span></li>
                <li><Gi.GiBoxingGlove />Kabaddi<span>2</span></li>
                <li><Md.MdSportsGolf />Golf<span>6</span></li>
                <li><Bi.BiFootball />Rugby League<span>4</span></li>
                <li><Gi.GiBoxingGlove />Boxing<span>1</span></li>
                <li>
                  <a href="/beach-volleyball">
                    <Bi.BiBasketball />
                    Beach Volleyball
                    <span>2</span>
                  </a>
                </li>
                <li>
                  <a href="/mixed-martial-arts">
                    <Gi.GiBoxingGlove />
                    Mixed Martial Arts
                    <span>3</span>
                  </a>
                </li>
                <li>
                  <a href="/motogp">
                    <Io.IoSpeedometer />
                    MotoGP
                    <span>2</span>
                  </a>
                </li>
                <li><Gi.GiChessKing />Chess<span>4</span></li>
                <li><Bi.BiRun />Cycling<span>1</span></li>
                <li><Io.IoSpeedometer />Motorbikes<span>2</span></li>
                <li><Bi.BiRun />Athletics<span>3</span></li>
                <li><Bi.BiBasketball />Basketball 3X3<span>4</span></li>
                <li><Gi.GiBoxingGlove />Sumo<span>1</span></li>
                <li><Io.IoGameController />Virtual sports<span>1</span></li>
                <li><Io.IoSpeedometer />Motor Sports<span>2</span></li>
                <li><Md.MdSportsBaseball />Baseball<span>5</span></li>
                <li><Bi.BiFootball />Rugby Union<span>3</span></li>
                <li><Bi.BiFootball />American Football<span>3</span></li>
                <li><Bi.BiFootball />Soccer<span>98</span></li>
                <li><Io.IoGameController />Esports<span>16</span></li>
                <li><Bi.BiCrosshair />Darts<span>4</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar} />
    </>
  );
};

export default Sidebar;
