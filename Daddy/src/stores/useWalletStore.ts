import { create } from 'zustand';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  status: 'success' | 'failed' | null;
  timestamp: Date;
}

interface WalletStore {
  balance: number;
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  lastTransaction: Transaction & { type: 'deposit' | 'withdraw' };
  depositFunds: (amount: number) => Promise<boolean>;
  withdrawFunds: (amount: number) => Promise<boolean>;
  deleteTransactions: (ids: string[]) => Promise<boolean>;
  clearLastTransaction: () => void;
  clearError: () => void;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

const useWalletStore = create<WalletStore>((set, get) => ({
  balance: 1000, // Default starting balance
  transactions: [],
  isLoading: false,
  error: null,
  lastTransaction: {
    id: generateId(),
    type: 'deposit',
    amount: 0,
    status: null,
    timestamp: new Date(),
  },

  depositFunds: async (amount: number) => {
    set({ isLoading: true, error: null });
    try {
      // Validate deposit amount
      if (amount > 1000) {
        throw new Error('Maximum deposit limit is ₹1,000');
      }
      
      if (get().balance + amount > 10000) {
        throw new Error('Maximum balance limit is ₹10,000');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const transaction = {
        id: generateId(),
        type: 'deposit' as const,
        amount,
        status: 'success' as const,
        timestamp: new Date(),
      };

      set(state => ({
        balance: state.balance + amount,
        isLoading: false,
        lastTransaction: transaction,
        transactions: [...state.transactions, transaction],
      }));

      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.message,
        lastTransaction: {
          id: generateId(),
          type: 'deposit',
          amount,
          status: 'failed',
          timestamp: new Date(),
        }
      });
      return false;
    }
  },

  withdrawFunds: async (amount: number) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (amount > get().balance) {
        set({
          isLoading: false,
          error: 'Insufficient funds',
          lastTransaction: {
            id: generateId(),
            type: 'withdraw',
            amount,
            status: 'failed',
            timestamp: new Date(),
          }
        });
        return false;
      }

      const transaction = {
        id: generateId(),
        type: 'withdraw' as const,
        amount,
        status: 'success' as const,
        timestamp: new Date(),
      };

      set(state => ({
        balance: state.balance - amount,
        isLoading: false,
        lastTransaction: transaction,
        transactions: [...state.transactions, transaction],
      }));

      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.message,
        lastTransaction: {
          id: generateId(),
          type: 'withdraw',
          amount,
          status: 'failed',
          timestamp: new Date(),
        }
      });
      return false;
    }
  },

  deleteTransactions: async (ids: string[]) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      set(state => {
        // Filter out deleted transactions and recalculate balance
        const remainingTransactions = state.transactions.filter(t => !ids.includes(t.id));
        const deletedTransactions = state.transactions.filter(t => ids.includes(t.id));
        
        // Calculate balance adjustment
        const balanceAdjustment = deletedTransactions.reduce((acc, t) => {
          if (t.status === 'success') {
            return t.type === 'deposit' 
              ? acc - t.amount  // Remove deposit amount
              : acc + t.amount; // Add back withdrawn amount
          }
          return acc;
        }, 0);

        return {
          transactions: remainingTransactions,
          balance: state.balance + balanceAdjustment,
          isLoading: false,
        };
      });

      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.message || 'Failed to delete transactions',
      });
      return false;
    }
  },

  clearLastTransaction: () => {
    set({
      lastTransaction: {
        id: generateId(),
        type: 'deposit',
        amount: 0,
        status: null,
        timestamp: new Date(),
      }
    });
  },

  clearError: () => {
    set({ error: null });
  },
}));

export default useWalletStore;
