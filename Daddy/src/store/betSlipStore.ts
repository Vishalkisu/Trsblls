import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BetSelection {
    id: string;
    matchId: string;
    matchName: string;
    selection: string;
    odds: number;
    stake: number;
    type: 'back' | 'lay';
}

interface BetSlipState {
    selections: BetSelection[];
    totalStake: number;
    potentialWinnings: number;
    addSelection: (selection: Omit<BetSelection, 'stake'>) => void;
    removeSelection: (id: string) => void;
    updateStake: (id: string, stake: number) => void;
    clearSlip: () => void;
    calculatePotentialWinnings: () => void;
}

export const useBetSlipStore = create<BetSlipState>()(
    persist(
        (set, get) => ({
            selections: [],
            totalStake: 0,
            potentialWinnings: 0,

            addSelection: (selection) => {
                set((state) => {
                    // Check if selection already exists
                    const exists = state.selections.some(s => s.id === selection.id);
                    if (exists) return state;

                    const newSelection = { ...selection, stake: 0 };
                    return {
                        ...state,
                        selections: [...state.selections, newSelection],
                    };
                });
                get().calculatePotentialWinnings();
            },

            removeSelection: (id) => {
                set((state) => ({
                    ...state,
                    selections: state.selections.filter(s => s.id !== id),
                }));
                get().calculatePotentialWinnings();
            },

            updateStake: (id, stake) => {
                set((state) => ({
                    ...state,
                    selections: state.selections.map(s =>
                        s.id === id ? { ...s, stake } : s
                    ),
                }));
                get().calculatePotentialWinnings();
            },

            clearSlip: () => {
                set({ selections: [], totalStake: 0, potentialWinnings: 0 });
            },

            calculatePotentialWinnings: () => {
                set((state) => {
                    const totalStake = state.selections.reduce((sum, s) => sum + (s.stake || 0), 0);
                    let potentialWinnings = 0;

                    // Calculate for each selection
                    state.selections.forEach(selection => {
                        if (selection.stake > 0) {
                            if (selection.type === 'back') {
                                potentialWinnings += selection.stake * selection.odds;
                            } else { // lay bet
                                potentialWinnings += selection.stake; // Liability for lay bets
                            }
                        }
                    });

                    return {
                        ...state,
                        totalStake,
                        potentialWinnings: Number(potentialWinnings.toFixed(2)),
                    };
                });
            },
        }),
        {
            name: 'bet-slip-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
