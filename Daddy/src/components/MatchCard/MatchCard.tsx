import React, { useState } from 'react';
import { useBetSlipStore } from '../../store/betSlipStore';
import styles from './MatchCard.module.css';

interface MatchCardProps {
    matchId: string;
    team1: string;
    team2: string;
    backOdds: { team1: number; team2: number; draw?: number };
    layOdds: { team1: number; team2: number; draw?: number };
}

const MatchCard: React.FC<MatchCardProps> = ({
    matchId,
    team1,
    team2,
    backOdds,
    layOdds,
}) => {
    const [selectedBet, setSelectedBet] = useState<{
        type: 'back' | 'lay';
        team: 'team1' | 'team2' | 'draw';
        odds: number;
    } | null>(null);

    const addSelection = useBetSlipStore(state => state.addSelection);

    const handleOddsClick = (type: 'back' | 'lay', team: 'team1' | 'team2' | 'draw', odds: number) => {
        setSelectedBet({ type, team, odds });

        const teamName = team === 'team1' ? team1 : team === 'team2' ? team2 : 'Draw';
        const betType = type === 'back' ? 'Back' : 'Lay';
        const selectionName = `${betType} ${teamName}`;

        addSelection({
            id: `${matchId}-${type}-${team}`,
            matchId,
            matchName: `${team1} vs ${team2}`,
            selection: selectionName,
            odds,
        });
    };

    const getButtonClass = (type: 'back' | 'lay', team: 'team1' | 'team2' | 'draw') => {
        const baseClass = type === 'back' ? styles.backButton : styles.layButton;
        const isSelected = selectedBet?.type === type && selectedBet?.team === team;
        return `${baseClass} ${isSelected ? styles.selected : ''}`;
    };

    return (
        <div className={styles.matchCard}>
            <div className={styles.header}>
                <h3>{team1} vs {team2}</h3>
                <span className={styles.time}>Live</span>
            </div>
            
            <div className={styles.oddsContainer}>
                <div className={styles.teamOdds}>
                    <span className={styles.teamName}>{team1}</span>
                    <div className={styles.buttons}>
                        <button
                            className={getButtonClass('back', 'team1')}
                            onClick={() => handleOddsClick('back', 'team1', backOdds.team1)}
                        >
                            {backOdds.team1.toFixed(2)}
                        </button>
                        <button
                            className={getButtonClass('lay', 'team1')}
                            onClick={() => handleOddsClick('lay', 'team1', layOdds.team1)}
                        >
                            {layOdds.team1.toFixed(2)}
                        </button>
                    </div>
                </div>

                {backOdds.draw !== undefined && (
                    <div className={styles.teamOdds}>
                        <span className={styles.teamName}>Draw</span>
                        <div className={styles.buttons}>
                            <button
                                className={getButtonClass('back', 'draw')}
                                onClick={() => handleOddsClick('back', 'draw', backOdds.draw!)}
                            >
                                {backOdds.draw.toFixed(2)}
                            </button>
                            <button
                                className={getButtonClass('lay', 'draw')}
                                onClick={() => handleOddsClick('lay', 'draw', layOdds.draw!)}
                            >
                                {layOdds.draw.toFixed(2)}
                            </button>
                        </div>
                    </div>
                )}

                <div className={styles.teamOdds}>
                    <span className={styles.teamName}>{team2}</span>
                    <div className={styles.buttons}>
                        <button
                            className={getButtonClass('back', 'team2')}
                            onClick={() => handleOddsClick('back', 'team2', backOdds.team2)}
                        >
                            {backOdds.team2.toFixed(2)}
                        </button>
                        <button
                            className={getButtonClass('lay', 'team2')}
                            onClick={() => handleOddsClick('lay', 'team2', layOdds.team2)}
                        >
                            {layOdds.team2.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
