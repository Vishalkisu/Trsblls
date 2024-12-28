import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BetHistoryItem {
    id: string;
    type: 'sports' | 'casino';
    eventName: string;
    marketName: string;
    selection: string;
    odds: number;
    stake: number;
    potentialWinnings: number;
    status: 'pending' | 'won' | 'lost';
    placedDate: string;
    nation?: string;
    isDeleted?: boolean;
}

interface BetHistoryState {
    bets: BetHistoryItem[];
    addBet: (bet: BetHistoryItem) => void;
    clearHistory: () => void;
    updateBetStatus: (id: string, status: 'won' | 'lost') => void;
}

export const useBetHistoryStore = create<BetHistoryState>()(
    persist(
        (set) => ({
            bets: [],
            addBet: (bet) => set((state) => ({
                bets: [{ ...bet, isDeleted: false }, ...state.bets]
            })),
            clearHistory: () => set({ bets: [] }),
            updateBetStatus: (id, status) => set((state) => ({
                bets: state.bets.map(bet =>
                    bet.id === id ? { ...bet, status } : bet
                )
            }))
        }),
        {
            name: 'bet-history-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
