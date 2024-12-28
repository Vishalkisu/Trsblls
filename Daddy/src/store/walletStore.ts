import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WalletState {
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  setBalance: (amount: number) => void;
}

const MAX_BALANCE = 1000000; // $1M max balance
const MIN_BALANCE = 0;

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      balance: 1000, // Starting balance of $1000
      deposit: (amount) => set((state) => {
        const newBalance = Math.min(state.balance + amount, MAX_BALANCE);
        return { balance: Number(newBalance.toFixed(2)) };
      }),
      withdraw: (amount) => set((state) => {
        const newBalance = Math.max(state.balance - amount, MIN_BALANCE);
        return { balance: Number(newBalance.toFixed(2)) };
      }),
      setBalance: (amount) => set({ balance: Number(amount.toFixed(2)) }),
    }),
    {
      name: 'wallet-storage',
    }
  )
);
