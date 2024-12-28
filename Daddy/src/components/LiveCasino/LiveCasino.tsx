import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './LiveCasino.module.css';
import sidebarStyles from './LiveCasinoSidebar.module.css';

// Import images
import roulette from './images/21enyjm2oCUueUdmEcBQxg9g1KTTSJLF6pDAv0D42ujYyy0TA.webp';
import teenPatti from './images/2i3o0SoTu57ICBz212BFeU7tKUgT2Yo5NjemR99XkFWNWfpnA.webp';
import poker from './images/FlAzcbEgtQbFClOaa5BBKSc1MieMXjTrwhwPXfjYz2whafpnA.webp';
import baccarat from './images/GYPlLtVy5iqWNFSTFSrMJ94aXG0Bw6DrzgO9lcfKFW9Krf0TA.webp';
import dragonTiger from './Live images/baccarat_classic.jpg'; 
import cards32 from './images/LLvWR1qbOWrdAdGZoGaon9ujFaNGBGEH1IypTU5vifnkqf0TA.webp';
import andarBahar from './images/3GpdvKqk3hK0JpaWLyYlj526UE7mjFzsJ7enN4xN7nQwXZ6JA.webp';
import lucky7 from './images/NWt7UHrsmL7xB94Tz7OtJx9HhME8VBc99NplTe6tcOD2pf0TA.webp';
import cardJudgement from './images/r2mHHLiWgj5UNJWI2pGKJpSR2LPaf6cxFo8kNt5pEz1luf0TA.webp';
import casinoWar from './images/rZ3SIeA64j10LqPr6FWkUrqSuPSJWqD0DRkvj8Ibntpvrf0TA.webp';
import worli from './images/W3dcdWKJEFKoPlz75zXo4YFV8zpniW82fVJ8ZkuMQOS1qf0TA.webp';
import sports from './images/X35v18Q3Cs5XFlhDApHH0Ck3P295wAGtpbv1Swm8hEJ81P9E.webp';
import bollywood from './images/YsUDFxE88JpxJ15QY7jfzf7onO3Ce4Thejhe2ejkdTbXpzP9E.webp';
import lottery from './images/aSAQHLe47o2IMSTKXUAZ4V39xuqQeiwRaX8tqcUhxoIHUfpnA.webp';
import queen from './images/auZMULEHDAL3MZfJ9QRp5b4dqJ40Yw5mPrBc503uUSqeWfpnA.webp';
import race from './images/fpaJaXgY2mUbKar1wpgpZC6Dr5Cu3dYbcunsBjDCJfRqWfpnA.webp';
import others from './images/kcyBWf7lhUTcPyP842fmSsr97gTsc1EX1JVRJHxTCRIxafpnA.webp';
import blackjack from './images/LLvWR1qbOWrdAdGZoGaon9ujFaNGBGEH1IypTU5vifnkqf0TA.webp';

const LiveCasino: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeProvider, setActiveProvider] = useState('all');
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { currentUser, isDemo } = useAuth();

    const providers = [
        { id: 'ae-sexy', name: 'Ae Sexy' },
        { id: 'asia-gaming', name: 'Asia Gaming' },
        { id: 'betraddar', name: 'Betraddar' },
        { id: 'betconstruct', name: 'Betconstruct' },
        { id: 'evolution', name: 'Evolution' }
    ];

    const allFilters = [
        { id: 'all', name: 'All Games' },
        { id: 'dragon-tiger', name: 'Dragon Tiger' },
        { id: 'roulette', name: 'Roulette' },
        { id: 'baccarat', name: 'Baccarat' },
        { id: 'sicbo', name: 'Sicbo' }
    ];

    const casinoGames = [
        {
            id: 1,
            name: 'Live Roulette',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 2,
            name: 'Teen Patti Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: teenPatti,
            minBet: 100,
            maxBet: 50000,
            category: 'teenpatti'
        },
        {
            id: 3,
            name: 'Live Poker',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: poker,
            minBet: 200,
            maxBet: 75000,
            category: 'poker'
        },
        {
            id: 4,
            name: 'Live Baccarat',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 5,
            name: 'Dragon Tiger Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: dragonTiger,
            minBet: 50,
            maxBet: 50000,
            category: 'dragon-tiger'
        },
        {
            id: 6,
            name: '32 Cards Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: cards32,
            minBet: 100,
            maxBet: 50000,
            category: '32-cards'
        },
        {
            id: 7,
            name: 'Andar Bahar Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: andarBahar,
            minBet: 100,
            maxBet: 50000,
            category: 'andar-bahar'
        },
        {
            id: 8,
            name: 'Lucky 7 Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: lucky7,
            minBet: 50,
            maxBet: 25000,
            category: 'lucky-7'
        },
        {
            id: 9,
            name: '3 Card Judgement Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: cardJudgement,
            minBet: 100,
            maxBet: 50000,
            category: '3-card-judgement'
        },
        {
            id: 10,
            name: 'Casino War Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: casinoWar,
            minBet: 50,
            maxBet: 25000,
            category: 'casino-war'
        },
        {
            id: 11,
            name: 'Worli Matka Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: worli,
            minBet: 10,
            maxBet: 10000,
            category: 'worli'
        },
        {
            id: 12,
            name: 'Virtual Sports',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: sports,
            minBet: 100,
            maxBet: 50000,
            category: 'sports'
        },
        {
            id: 13,
            name: 'Bollywood Casino Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: bollywood,
            minBet: 100,
            maxBet: 50000,
            category: 'bollywood'
        },
        {
            id: 14,
            name: 'Live Lottery',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: lottery,
            minBet: 50,
            maxBet: 10000,
            category: 'lottery'
        },
        {
            id: 15,
            name: 'Queen Casino Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: queen,
            minBet: 100,
            maxBet: 100000,
            category: 'queen'
        },
        {
            id: 16,
            name: 'Race Games Live',
            provider: 'our-casino',
            providerName: 'Our Casino',
            image: race,
            minBet: 50,
            maxBet: 25000,
            category: 'race'
        },
        // Our Virtual Games
        {
            id: 17,
            name: 'Virtual Teen Patti',
            provider: 'our-virtual',
            providerName: 'Our Virtual',
            image: teenPatti,
            minBet: 50,
            maxBet: 25000,
            category: 'teenpatti'
        },
        {
            id: 18,
            name: 'Virtual Dragon Tiger',
            provider: 'our-virtual',
            providerName: 'Our Virtual',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000,
            category: 'dragon-tiger'
        },
        {
            id: 19,
            name: 'Virtual Lucky 7',
            provider: 'our-virtual',
            providerName: 'Our Virtual',
            image: lucky7,
            minBet: 50,
            maxBet: 25000,
            category: 'lucky-7'
        },
        {
            id: 20,
            name: 'Virtual Bollywood',
            provider: 'our-virtual',
            providerName: 'Our Virtual',
            image: bollywood,
            minBet: 50,
            maxBet: 25000,
            category: 'bollywood'
        },
        {
            id: 21,
            name: 'Other Virtual Games',
            provider: 'our-virtual',
            providerName: 'Our Virtual',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'others'
        },
        // Tembo Games
        {
            id: 101,
            name: 'Sensual Roulette VIP',
            provider: 'tembo',
            providerName: 'Tembo',
            image: roulette,
            minBet: 1000,
            maxBet: 100000,
            category: 'sensual'
        },
        {
            id: 102,
            name: 'Sensual Roulette Classic',
            provider: 'tembo',
            providerName: 'Tembo',
            image: roulette,
            minBet: 100,
            maxBet: 50000,
            category: 'sensual'
        },
        {
            id: 103,
            name: 'Sensual Roulette Gold',
            provider: 'tembo',
            providerName: 'Tembo',
            image: roulette,
            minBet: 500,
            maxBet: 75000,
            category: 'sensual'
        },
        // Creedroomz Games
        {
            id: 201,
            name: 'Speed Roulette',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: roulette,
            minBet: 100,
            maxBet: 50000,
            category: 'roulette'
        },
        {
            id: 202,
            name: 'Auto Roulette',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: roulette,
            minBet: 50,
            maxBet: 25000,
            category: 'roulette'
        },
        {
            id: 203,
            name: 'VIP Blackjack',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 204,
            name: 'Classic Blackjack',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 205,
            name: 'Speed Baccarat',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: baccarat,
            minBet: 100,
            maxBet: 50000,
            category: 'baccarat'
        },
        {
            id: 206,
            name: 'No Commission Baccarat',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: baccarat,
            minBet: 200,
            maxBet: 75000,
            category: 'baccarat'
        },
        {
            id: 207,
            name: 'Texas Hold\'em Poker',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 208,
            name: 'Caribbean Stud Poker',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 209,
            name: 'Power Keno',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'keno'
        },
        {
            id: 210,
            name: 'Turbo Keno',
            provider: 'creedroomz',
            providerName: 'Creedroomz',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'keno'
        },
        // Vivo Gaming Games
        {
            id: 301,
            name: 'European Roulette',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: roulette,
            minBet: 100,
            maxBet: 50000,
            category: 'roulette'
        },
        {
            id: 302,
            name: 'American Roulette',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: roulette,
            minBet: 100,
            maxBet: 50000,
            category: 'roulette'
        },
        {
            id: 303,
            name: 'Speed Baccarat',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: baccarat,
            minBet: 100,
            maxBet: 50000,
            category: 'baccarat'
        },
        {
            id: 304,
            name: 'VIP Baccarat',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: baccarat,
            minBet: 1000,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 305,
            name: 'Casino Hold\'em Classic',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'casino-holdem'
        },
        {
            id: 306,
            name: 'VIP Casino Hold\'em',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: poker,
            minBet: 500,
            maxBet: 75000,
            category: 'casino-holdem'
        },
        {
            id: 307,
            name: 'Dragon Tiger VIP',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: dragonTiger,
            minBet: 500,
            maxBet: 75000,
            category: 'dragon-tiger'
        },
        {
            id: 308,
            name: 'Speed Dragon Tiger',
            provider: 'vivo-gaming',
            providerName: 'Vivo Gaming',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000,
            category: 'dragon-tiger'
        },
        // Evolution Games
        {
            id: 601,
            name: 'Poker Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 100000,
            category: 'poker'
        },
        {
            id: 602,
            name: 'Game Shows',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 603,
            name: 'For You',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 100000,
            category: 'featured'
        },
        {
            id: 604,
            name: 'Top Games',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 100000,
            category: 'featured'
        },
        {
            id: 605,
            name: 'Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 606,
            name: 'Dream Catcher Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 607,
            name: 'Casino Holdem',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 608,
            name: 'Texas Hold\'em Bonus Poker Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 609,
            name: 'Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 610,
            name: 'Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 611,
            name: 'Ultimate Texas Holdem Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 612,
            name: 'Three Card Poker Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 613,
            name: 'Caribbean Stud Poker Lobby',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 614,
            name: 'MONOPOLY Live',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 615,
            name: 'Crazy Time',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 616,
            name: 'Lightning Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 617,
            name: 'Mega Ball',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 618,
            name: 'First Person Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 619,
            name: 'First Person Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 620,
            name: 'Dragon Tiger',
            provider: 'evolution',
            providerName: 'Evolution',
            image: dragonTiger,
            minBet: 100,
            maxBet: 50000,
            category: 'dragon-tiger'
        },
        {
            id: 621,
            name: 'Super Sic Bo',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'dice-games'
        },
        {
            id: 622,
            name: 'Football Studio',
            provider: 'evolution',
            providerName: 'Evolution',
            image: sports,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 623,
            name: 'Craps',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'dice-games'
        },
        {
            id: 624,
            name: 'Fan Tan',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'table-games'
        },
        {
            id: 625,
            name: 'Teen Patti',
            provider: 'evolution',
            providerName: 'Evolution',
            image: teenPatti,
            minBet: 100,
            maxBet: 50000,
            category: 'card-games'
        },
        // EZUGI Games
        {
            id: 501,
            name: 'VIP Blackjack',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 502,
            name: 'Classic Blackjack',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 503,
            name: 'Auto Roulette',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: roulette,
            minBet: 50,
            maxBet: 25000,
            category: 'roulette'
        },
        {
            id: 504,
            name: 'Speed Roulette',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: roulette,
            minBet: 100,
            maxBet: 50000,
            category: 'roulette'
        },
        {
            id: 505,
            name: 'VIP Roulette',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: roulette,
            minBet: 500,
            maxBet: 75000,
            category: 'roulette'
        },
        {
            id: 506,
            name: 'Speed Baccarat',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: baccarat,
            minBet: 100,
            maxBet: 50000,
            category: 'baccarat'
        },
        {
            id: 507,
            name: 'No Commission Baccarat',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: baccarat,
            minBet: 100,
            maxBet: 50000,
            category: 'baccarat'
        },
        {
            id: 508,
            name: 'Super 6 Baccarat',
            provider: 'ezugi',
            providerName: 'EZUGI',
            image: baccarat,
            minBet: 100,
            maxBet: 50000,
            category: 'baccarat'
        },
        // CockFight Games
        {
            id: 601,
            name: 'Live Cockfight Arena 1',
            provider: 'cockfight',
            providerName: 'CockFight',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'others'
        },
        {
            id: 602,
            name: 'Live Cockfight Arena 2',
            provider: 'cockfight',
            providerName: 'CockFight',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'others'
        },
        {
            id: 603,
            name: 'Live Cockfight Arena 3',
            provider: 'cockfight',
            providerName: 'CockFight',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'others'
        },
        // AESexyBaccarat Games
        {
            id: 'dragon-tiger-ae',
            name: 'Dragon Tiger',
            provider: 'ae-sexy',
            providerName: 'AESexyBaccarat',
            category: 'dragon-tiger',
            image: dragonTiger
        },
        {
            id: 'roulette-ae',
            name: 'Roulette',
            provider: 'ae-sexy',
            providerName: 'AESexyBaccarat',
            category: 'roulette',
            image: roulette
        },
        {
            id: 'baccarat-classic-ae',
            name: 'Baccarat Classic',
            provider: 'ae-sexy',
            providerName: 'AESexyBaccarat',
            category: 'baccarat',
            image: baccarat
        },
        {
            id: 'baccarat-ae',
            name: 'Baccarat',
            provider: 'ae-sexy',
            providerName: 'AESexyBaccarat',
            category: 'baccarat',
            image: baccarat
        },
        {
            id: 'extra-sicbo-ae',
            name: 'Extra Sicbo',
            provider: 'ae-sexy',
            providerName: 'AESexyBaccarat',
            category: 'sicbo',
            image: cards32
        },
        // AsiaGaming Games
        {
            id: 'ema-blackjack-d21',
            name: 'EMA Black Jack D21',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m73',
            name: 'EMA Baccarat M73',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m72',
            name: 'EMA Baccarat M72',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m70',
            name: 'EMA Baccarat M70',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m69',
            name: 'EMA Baccarat M69',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-sicbo-n26',
            name: 'CGY Sicbo N26',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'sicbo',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ema-baccarat-d56',
            name: 'EMA Baccarat D56',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'baccarat-agq',
            name: 'Baccarat of AGQ',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'baccarat-agin',
            name: 'Baccarat of AGIN',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'bullbull',
            name: 'BullBull',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'blackjack',
            name: 'Blackjack',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat',
            name: 'EMA Baccarat',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b1',
            name: 'AGQ Baccarat B1',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b2',
            name: 'AGQ Baccarat B2',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b3',
            name: 'AGQ Baccarat B3',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b4',
            name: 'AGQ Baccarat B4',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b5',
            name: 'AGQ Baccarat B5',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'agq-baccarat-b6',
            name: 'AGQ Baccarat B6',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d51',
            name: 'EMA Baccarat D51',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d52',
            name: 'EMA Baccarat D52',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d53',
            name: 'EMA Baccarat D53',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d59',
            name: 'EMA Baccarat D59',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d58',
            name: 'EMA Baccarat D58',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d57',
            name: 'EMA Baccarat D57',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-roulette-d1',
            name: 'EMA Roulette D1',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'roulette',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'dragon-tiger-agin',
            name: 'Dragon Tiger of AGIN',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'dragon-tiger',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'agq-ngau-ngau-b22',
            name: 'AGQ NGAU NGAU B22',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'roulette-agin',
            name: 'Roulette of AGIN',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'roulette',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ema-blackjack-d22',
            name: 'EMA Black Jack D22',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d23',
            name: 'EMA Black Jack D23',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d24',
            name: 'EMA Black Jack D24',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d25',
            name: 'EMA Black Jack D25',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d26',
            name: 'EMA Black Jack D26',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'three-face',
            name: 'Three Face',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-sicbo-n18',
            name: 'CGY Sicbo N18',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'sicbo',
            image: cards32,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n19',
            name: 'CGY Baccarat N19',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n72',
            name: 'CGY Baccarat N72',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-bullbull-n27',
            name: 'CGY BullBull N27',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-baccarat-n71',
            name: 'CGY Baccarat N71',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n73',
            name: 'CGY Baccarat N73',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n9',
            name: 'CGY Baccarat N9',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n10',
            name: 'CGY Baccarat N10',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n11',
            name: 'CGY Baccarat N11',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n12',
            name: 'CGY Baccarat N12',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e101',
            name: 'Blockchain Baccarat E101',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m71',
            name: 'EMA Baccarat M71',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e108',
            name: 'Blockchain Baccarat E108',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e109',
            name: 'Blockchain Baccarat E109',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e110',
            name: 'Blockchain Baccarat E110',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n8',
            name: 'CGY Baccarat N8',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n7',
            name: 'CGY Baccarat N7',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n6',
            name: 'CGY Baccarat N6',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n13',
            name: 'CGY Baccarat N13',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n17',
            name: 'CGY Baccarat N17',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n15',
            name: 'CGY Baccarat N15',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-baccarat-n16',
            name: 'CGY Baccarat N16',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d54',
            name: 'EMA Baccarat D54',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-d55',
            name: 'EMA Baccarat D55',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-dragon-tiger-d60',
            name: 'EMA Dragon Tiger D60',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'dragon-tiger',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'blockchain-baccarat-e107',
            name: 'Blockchain Baccarat E107',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e102',
            name: 'Blockchain Baccarat E102',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e103',
            name: 'Blockchain Baccarat E103',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e104',
            name: 'Blockchain Baccarat E104',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e105',
            name: 'Blockchain Baccarat E105',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'blockchain-baccarat-e106',
            name: 'Blockchain Baccarat E106',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'cgy-three-face-n24',
            name: 'CGY Three Face N24',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-ngau-ngau-n23',
            name: 'CGY NGAU NGAU N23',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-ngau-ngau-n22',
            name: 'CGY NGAU NGAU N22',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-win-three-cards-n21',
            name: 'CGY Win Three Cards N21',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cgy-dragon-tiger-n20',
            name: 'CGY Dragon Tiger N20',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'dragon-tiger',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ema-blackjack-d27',
            name: 'EMA Black Jack D27',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d28',
            name: 'EMA Black Jack D28',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-blackjack-d29',
            name: 'EMA Black Jack D29',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'win-three-cards',
            name: 'Win Three Cards',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'card-games',
            image: cards32,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ema-blackjack-d30',
            name: 'EMA Black Jack D30',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'blackjack',
            image: blackjack,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-dragon-tiger-m60',
            name: 'EMA Dragon Tiger M60',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'dragon-tiger',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ema-baccarat-m51',
            name: 'EMA Baccarat M51',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m52',
            name: 'EMA Baccarat M52',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m53',
            name: 'EMA Baccarat M53',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m54',
            name: 'EMA Baccarat M54',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m55',
            name: 'EMA Baccarat M55',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m56',
            name: 'EMA Baccarat M56',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m57',
            name: 'EMA Baccarat M57',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m58',
            name: 'EMA Baccarat M58',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ema-baccarat-m59',
            name: 'EMA Baccarat M59',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'micard-baccarat-m90',
            name: 'MiCard Baccarat M90',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'micard-baccarat-m91',
            name: 'MiCard Baccarat M91',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'baccarat',
            image: baccarat,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lobby',
            name: 'Lobby',
            provider: 'asia-gaming',
            providerName: 'Asia Gaming',
            category: 'lobby',
            image: others,
            minBet: 0,
            maxBet: 0
        },
        // BetRadar Games
        {
            id: 'sportsbook-esport',
            name: 'Sportsbook-ESport',
            provider: 'betraddar',
            providerName: 'BetRadar',
            category: 'sports',
            image: sports,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'sportsbook',
            name: 'Sportsbook',
            provider: 'betraddar',
            providerName: 'BetRadar',
            category: 'sports',
            image: sports,
            minBet: 100,
            maxBet: 100000
        },
        // Betconstruct Games
        {
            id: 'yummy',
            name: 'Yummy',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lucky-jungle',
            name: 'Lucky Jungle',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'roulette-bc',
            name: 'Roulette',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'roulette',
            image: roulette,
            minBet: 100,
            maxBet: 100000
        },
        {
            id: 'plinko',
            name: 'Plinko',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'electric-crash',
            name: 'Electric Crash',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'sultans-tale',
            name: 'Sultan\'s tale',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'los-apaches',
            name: 'Los Apaches',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'magic-treasures-egypt',
            name: 'Magic Treasures of Egypt',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lost-treasure',
            name: 'Lost Treasure',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ultra-wheel',
            name: 'Ultra Wheel',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'huga-chaga',
            name: 'Huga Chaga',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'yummy-trick-treat',
            name: 'Yummy: Trick or Treat',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'octopus-life',
            name: 'Octopus Life',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'mega-jocker',
            name: 'Mega Jocker',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'frozen-fruits',
            name: 'Frozen Fruits',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'happy-valentines-day',
            name: 'Happy Valentines Day',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'hot-muchacho',
            name: 'Hot Muchacho',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lucky-patricks-day',
            name: 'Lucky Patrick\'s Day',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'crazy-poki',
            name: 'Crazy Poki',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'happy-easter',
            name: 'Happy Easter',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'diamond-phantom',
            name: 'Diamond Phantom',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'goddesses-zeus',
            name: 'Goddesses of Zeus',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'vikings-mystery',
            name: 'Vikings Mystery',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lucky-smile',
            name: 'Lucky Smile',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'flaming-fruit',
            name: 'Flaming Fruit',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'era-dragons',
            name: 'Era of Dragons',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'richy-panda',
            name: 'Richy Panda',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'temple-heroes',
            name: 'Temple of Heroes',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'los-toros',
            name: 'Los Toros',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'gold-egypt',
            name: 'Gold of Egypt',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'poki-wild',
            name: 'Poki Wild',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'fruitball',
            name: 'FruitBall',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'flaming-phoenix',
            name: 'Flaming Phoenix',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ho-ho-ho',
            name: 'Ho Ho Ho',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'incredible-genie',
            name: 'Incredible Genie',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'hot-angels',
            name: 'Hot Angels',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'black-booze',
            name: 'Black Booze',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'wild-queen',
            name: 'Wild Queen',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ronin',
            name: 'Ronin',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'wukong',
            name: 'Wukong',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'fast-master',
            name: 'Fast Master',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'fast-fruits',
            name: 'Fast Fruits',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'power-kitsune',
            name: 'The Power of Kitsune',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'milky-farm',
            name: 'Milky Farm',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'magic-time',
            name: 'Magic Time',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'age-vikings',
            name: 'Age of Vikings',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'akn-providence',
            name: 'Akn of Providence',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'milky-farm-buy',
            name: 'Milky Farm: Buy Feature',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'king-craft-menomin',
            name: 'King Craft: Menomin',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'mr-first-lucky-wheel',
            name: 'Mr. First Lucky Wheel',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'multi-fruit',
            name: 'Multi Fruit',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'diamond-fruits',
            name: 'Diamond Fruits',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'magic-idol',
            name: 'Magic Idol',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'gogo-banana',
            name: 'Gogo Banana',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'diamond-quest',
            name: 'Diamond Quest',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'baccarat-bc',
            name: 'Baccarat',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'card-games',
            image: baccarat,
            minBet: 100,
            maxBet: 100000
        },
        {
            id: 'blazing-hot',
            name: 'Blazing Hot',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'jacks-better',
            name: 'Jacks or Better',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'card-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'diamond-flash',
            name: 'Diamond Flash',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'instant-keno',
            name: 'Instant Keno',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'ultra-hot',
            name: 'Ultra Hot',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'red-hot-line',
            name: 'Red Hot Line',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: '20-lucky-bell',
            name: '20 Lucky Bell',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'ninja-fruit-cubes',
            name: 'Ninja Fruit Cubes',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: '40-lucky-bell',
            name: '40 Lucky Bell',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'red-hot-line-2',
            name: 'Red Hot Line 2',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'hot-bar',
            name: 'Hot Bar',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lucky-spin',
            name: 'Lucky Spin',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: '20-hot-bar',
            name: '20 Hot Bar',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'crash-infinity',
            name: 'Crash Infinity',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: '40-hot-bar',
            name: '40 Hot Bar',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'crash-extreme',
            name: 'Crash Extreme',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: '40-hot-bar-extra',
            name: '40 Hot Bar Extra',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'dice',
            name: 'Dice',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'instant-games',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: '100-lucky-bell',
            name: '100 Lucky Bell',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'wild-shamrock',
            name: 'Wild Shamrock',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'lucky-jungle-1024',
            name: 'Lucky Jungle 1024',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'novel-alexander',
            name: 'Novel of Alexander',
            provider: 'betconstruct',
            providerName: 'Betconstruct',
            category: 'slots',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        // Evolution Games
        {
            id: 'monopoly-live',
            name: 'MONOPOLY Live',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'crazy-time',
            name: 'Crazy Time',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'dream-catcher',
            name: 'Dream Catcher',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'lightning-dice',
            name: 'Lightning Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'mega-ball',
            name: 'Mega Ball',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'cash-or-crash',
            name: 'Cash or Crash',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'crazy-coin-flip',
            name: 'Crazy Coin Flip',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'monopoly-big-baller',
            name: 'MONOPOLY Big Baller',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'gonzo-treasure-map',
            name: 'Gonzo\'s Treasure Map',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        // First Person Games
        {
            id: 'first-person-roulette',
            name: 'First Person Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'first-person-blackjack',
            name: 'First Person Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: blackjack,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'first-person-dream-catcher',
            name: 'First Person Dream Catcher',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'first-person-lightning-roulette',
            name: 'First Person Lightning Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: roulette,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'first-person-mega-ball',
            name: 'First Person Mega Ball',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'first-person-dragon-tiger',
            name: 'First Person Dragon Tiger',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'first-person',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        // Other Games
        {
            id: 'dragon-tiger',
            name: 'Dragon Tiger',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'card-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'super-sic-bo',
            name: 'Super Sic Bo',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'dice-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'football-studio',
            name: 'Football Studio',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'game-shows',
            image: others,
            minBet: 50,
            maxBet: 25000
        },
        {
            id: 'craps',
            name: 'Craps',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'dice-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'fan-tan',
            name: 'Fan Tan',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'table-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'bac-bo',
            name: 'Bac Bo',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'dice-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        {
            id: 'teen-patti',
            name: 'Teen Patti',
            provider: 'evolution',
            providerName: 'Evolution',
            category: 'card-games',
            image: others,
            minBet: 100,
            maxBet: 50000
        },
        // Evolution Games - Baccarat Variants
        {
            id: 626,
            name: 'Speed Baccarat A',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 627,
            name: 'Speed Baccarat B',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 628,
            name: 'Speed Baccarat C',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 629,
            name: 'Speed Baccarat D',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 630,
            name: 'Speed Baccarat E',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 631,
            name: 'Speed Baccarat F',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 632,
            name: 'Speed Baccarat G',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 633,
            name: 'Speed Baccarat H',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 634,
            name: 'Salon Privé Baccarat A',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 635,
            name: 'Salon Privé Baccarat B',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 636,
            name: 'Salon Privé Baccarat C',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 637,
            name: 'Salon Privé Baccarat D',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 638,
            name: 'Salon Privé Baccarat E',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 639,
            name: 'Salon Privé Baccarat F',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 1000,
            maxBet: 200000,
            category: 'baccarat'
        },
        {
            id: 640,
            name: 'No Commission Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 641,
            name: 'Lightning Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 642,
            name: 'Baccarat Squeeze',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 643,
            name: 'Baccarat Control Squeeze',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 644,
            name: 'Peek Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 645,
            name: 'Prosperity Tree Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        // Evolution Games - Blackjack VIP Variants
        {
            id: 646,
            name: 'Blackjack VIP A',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 647,
            name: 'Blackjack VIP B',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 648,
            name: 'Blackjack VIP C',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 649,
            name: 'Blackjack VIP D',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 650,
            name: 'Blackjack VIP E',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 1000,
            maxBet: 100000,
            category: 'blackjack'
        },
        {
            id: 651,
            name: 'Infinite Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 652,
            name: 'Power Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 653,
            name: 'Free Bet Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 654,
            name: 'Speed Blackjack A',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 655,
            name: 'Speed Blackjack B',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        // Evolution Games - Game Shows
        {
            id: 656,
            name: 'Cash or Crash',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 657,
            name: 'Crazy Coin Flip',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 658,
            name: 'MONOPOLY Big Baller',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 659,
            name: 'Gonzo\'s Treasure Map',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        // First Person Games
        {
            id: 660,
            name: 'First Person Dream Catcher',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 661,
            name: 'First Person Lightning Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 662,
            name: 'First Person Mega Ball',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 663,
            name: 'First Person Dragon Tiger',
            provider: 'evolution',
            providerName: 'Evolution',
            image: dragonTiger,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        // Additional Evolution Games - Roulette Variants
        {
            id: 664,
            name: 'Lightning Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 665,
            name: 'Immersive Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 666,
            name: 'Auto Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 50,
            maxBet: 25000,
            category: 'roulette'
        },
        {
            id: 667,
            name: 'Speed Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 668,
            name: 'VIP Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 1000,
            maxBet: 200000,
            category: 'roulette'
        },
        {
            id: 669,
            name: 'Salon Privé Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 1000,
            maxBet: 200000,
            category: 'roulette'
        },
        // Additional Evolution Games - Game Shows
        {
            id: 670,
            name: 'XXXtreme Lightning Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'game-shows'
        },
        {
            id: 671,
            name: 'Sweet Bonanza CandyLand',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 672,
            name: 'Deal or No Deal',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 673,
            name: 'Side Bet City',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 674,
            name: 'Lightning Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        {
            id: 675,
            name: 'Football Studio Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            image: sports,
            minBet: 50,
            maxBet: 25000,
            category: 'game-shows'
        },
        // Additional Evolution Games - Special Games
        {
            id: 676,
            name: 'Lightning Poker',
            provider: 'evolution',
            providerName: 'Evolution',
            image: poker,
            minBet: 100,
            maxBet: 50000,
            category: 'poker'
        },
        {
            id: 677,
            name: 'Speed Blackjack C',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 678,
            name: 'Speed Blackjack D',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 679,
            name: 'Speed Blackjack E',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
        {
            id: 680,
            name: 'First Person Top Card',
            provider: 'evolution',
            providerName: 'Evolution',
            image: cards32,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 681,
            name: 'First Person Football Studio',
            provider: 'evolution',
            providerName: 'Evolution',
            image: sports,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 682,
            name: 'First Person Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        {
            id: 683,
            name: 'First Person Craps',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 50,
            maxBet: 25000,
            category: 'first-person'
        },
        // Additional Evolution Games - Dice Games
        {
            id: 684,
            name: 'Lightning Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'dice-games'
        },
        {
            id: 685,
            name: 'Mega Dice',
            provider: 'evolution',
            providerName: 'Evolution',
            image: others,
            minBet: 100,
            maxBet: 50000,
            category: 'dice-games'
        },
        // Additional Evolution Games - Special Tables
        {
            id: 686,
            name: 'Golden Wealth Baccarat',
            provider: 'evolution',
            providerName: 'Evolution',
            image: baccarat,
            minBet: 100,
            maxBet: 100000,
            category: 'baccarat'
        },
        {
            id: 687,
            name: 'Grand Casino Roulette',
            provider: 'evolution',
            providerName: 'Evolution',
            image: roulette,
            minBet: 100,
            maxBet: 100000,
            category: 'roulette'
        },
        {
            id: 688,
            name: 'Lightning Blackjack',
            provider: 'evolution',
            providerName: 'Evolution',
            image: blackjack,
            minBet: 100,
            maxBet: 50000,
            category: 'blackjack'
        },
    ];

    const handleProviderChange = (providerId: string) => {
        setActiveProvider(providerId);
        setActiveFilter('all'); // Reset game type filter when provider changes
    };

    const handlePlayClick = (game: any) => {
        if (!currentUser && !isDemo) {
            setShowLoginPrompt(true);
            return;
        }
        // Add game launch logic here
        console.log('Launching game:', game.name);
    };

    const availableCategories = useMemo(() => {
        if (activeProvider === 'all') {
            return allFilters.filter(filter => filter.id !== 'all');
        }

        const categories = new Set(
            casinoGames
                .filter(game => game.provider === activeProvider)
                .map(game => game.category)
        );

        return allFilters.filter(filter => categories.has(filter.id));
    }, [activeProvider]);

    const filteredGames = useMemo(() => {
        return casinoGames.filter(game => {
            const matchesProvider = activeProvider === 'all' || game.provider === activeProvider;
            const matchesFilter = activeFilter === 'all' || game.category === activeFilter;
            const matchesSearch = searchQuery === '' || 
                game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                game.providerName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesProvider && matchesFilter && matchesSearch;
        });
    }, [activeProvider, activeFilter, searchQuery]);

    return (
        <div className={styles.container}>
            <div className={styles.liveCasinoContainer}>
                <h1 className={styles.title}>Live Casino</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search games or providers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    {searchQuery && (
                        <button 
                            className={styles.clearSearch}
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                    <div className={styles.searchIcon}>🔍</div>
                </div>
                <div className={styles.mainContent}>
                    {/* Sidebar */}
                    <div className={sidebarStyles.sidebar}>
                        <h2 className={sidebarStyles.sidebarTitle}>Providers</h2>
                        <ul className={sidebarStyles.providerList}>
                            <li 
                                className={`${sidebarStyles.providerItem} ${activeProvider === 'all' ? sidebarStyles.active : ''}`}
                                onClick={() => handleProviderChange('all')}
                            >
                                All Providers
                                <span className={sidebarStyles.gameCount}>{casinoGames.length}</span>
                            </li>
                            {providers.map(provider => (
                                <li 
                                    key={provider.id}
                                    className={`${sidebarStyles.providerItem} ${activeProvider === provider.id ? sidebarStyles.active : ''}`}
                                    onClick={() => handleProviderChange(provider.id)}
                                >
                                    {provider.name}
                                    <span className={sidebarStyles.gameCount}>
                                        {casinoGames.filter(game => game.provider === provider.id).length}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main content */}
                    <div className={styles.gamesSection}>
                        <div className={styles.filtersContainer}>
                            {activeProvider !== 'all' && (
                                <button 
                                    className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                                    onClick={() => setActiveFilter('all')}
                                >
                                    All Games
                                </button>
                            )}
                            {availableCategories.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.name}
                                </button>
                            ))}
                        </div>

                        {filteredGames.length === 0 ? (
                            <div className={styles.noGamesMessage}>
                                No games available for the selected filters
                            </div>
                        ) : (
                            <div className={styles.gamesGrid}>
                                {filteredGames.map(game => (
                                    <div key={game.id} className={styles.gameCard}>
                                        <div className={styles.gameImageWrapper}>
                                            <img src={game.image} alt={game.name} className={styles.gameImage} />
                                            <div className={styles.gameOverlay}>
                                                <button 
                                                    className={styles.playButton}
                                                    onClick={() => handlePlayClick(game)}
                                                >
                                                    {!currentUser && !isDemo ? 'Login to Play' : 'Play Now'}
                                                    <span className={styles.playIcon}>▶</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.gameInfo}>
                                            <h3>{game.name}</h3>
                                            <div className={styles.providerTag}>
                                                {game.providerName}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showLoginPrompt && (
                <div className={styles.loginPromptOverlay} onClick={() => setShowLoginPrompt(false)}>
                    <div className={styles.loginPromptCard} onClick={e => e.stopPropagation()}>
                        <h2>Login Required</h2>
                        <p>Please log in or create an account to play casino games.</p>
                        <div className={styles.loginPromptButtons}>
                            <button onClick={() => setShowLoginPrompt(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveCasino;
