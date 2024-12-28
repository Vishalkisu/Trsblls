import React, { useState, useEffect } from 'react';
import { FaWallet, FaArrowUp, FaArrowDown, FaTimes, FaSpinner } from 'react-icons/fa';
import useWalletStore from '../stores/useWalletStore';
import { toast } from 'react-hot-toast';
import styles from './Wallet.module.css';

const Wallet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'deposit' | 'withdraw' | null>(null);

  const { 
    balance,
    depositFunds, 
    withdrawFunds, 
    isLoading, 
    lastTransaction, 
    clearLastTransaction, 
    transactions,
    error,
    clearError 
  } = useWalletStore();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  useEffect(() => {
    if (lastTransaction.status) {
      const message = lastTransaction.status === 'success'
        ? `Successfully ${lastTransaction.type === 'deposit' ? 'deposited' : 'withdrawn'} ₹${lastTransaction.amount}`
        : `Failed to ${lastTransaction.type} funds`;
      
      if (lastTransaction.status === 'success') {
        toast.success(message);
      } else {
        toast.error(message);
      }
      
      clearLastTransaction();
    }
  }, [lastTransaction, clearLastTransaction]);

  const handleTransaction = async () => {
    if (!amount) return;

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return;

    const success = await (transactionType === 'deposit' 
      ? depositFunds(parsedAmount)
      : withdrawFunds(parsedAmount));

    if (success) {
      setAmount('');
      setTransactionType(null);
    }
  };

  const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(balance);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  return (
    <div className={styles.walletContainer}>
      <button 
        className={styles.walletButton}
        onClick={() => setIsOpen(true)}
      >
        <FaWallet className={styles.walletIcon} />
        <span className={styles.walletAmount}>₹{balance.toLocaleString()}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}
          
          <div className={styles.header}>
            <h3>Your Balance</h3>
            <button 
              className={styles.closeButton} 
              onClick={() => {
                setIsOpen(false);
                setTransactionType(null);
                setAmount('');
                clearError();
              }}
            >
              <FaTimes />
            </button>
          </div>
          
          <div className={styles.balance}>
            {formatBalance(balance)}
          </div>

          <div className={styles.transactionButtons}>
            <button
              className={`${styles.actionButton} ${transactionType === 'deposit' ? styles.active : ''}`}
              onClick={() => setTransactionType('deposit')}
              disabled={isLoading}
            >
              <FaArrowDown /> Deposit
            </button>
            <button
              className={`${styles.actionButton} ${transactionType === 'withdraw' ? styles.active : ''}`}
              onClick={() => setTransactionType('withdraw')}
              disabled={isLoading}
            >
              <FaArrowUp /> Withdraw
            </button>
          </div>

          {transactionType && (
            <div className={styles.transactionForm}>
              <div className={styles.inputGroup}>
                <span className={styles.currencySymbol}>₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className={styles.input}
                  min="0"
                  step="0.01"
                  disabled={isLoading}
                />
              </div>

              <button
                onClick={handleTransaction}
                className={styles.submitButton}
                disabled={isLoading || !amount || parseFloat(amount) <= 0}
              >
                {isLoading ? (
                  <><FaSpinner className={styles.spinner} /> Processing...</>
                ) : (
                  `Confirm ${transactionType === 'deposit' ? 'Deposit' : 'Withdrawal'}`
                )}
              </button>
            </div>
          )}

          <div className={styles.transactionHistory}>
            <h4>Transaction History</h4>
            <div className={styles.transactionsList}>
              {transactions.length > 0 ? (
                transactions.slice().reverse().map((transaction, index) => (
                  <div key={index} className={`${styles.transactionItem} ${styles[transaction.type]} ${styles[transaction.status]}`}>
                    <div className={styles.transactionIcon}>
                      {transaction.type === 'deposit' ? <FaArrowDown /> : <FaArrowUp />}
                    </div>
                    <div className={styles.transactionDetails}>
                      <span className={styles.transactionType}>{transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}</span>
                      <span className={styles.transactionDate}>{formatDate(transaction.timestamp)}</span>
                    </div>
                    <span className={styles.transactionAmount}>
                      {transaction.type === 'deposit' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                    </span>
                  </div>
                ))
              ) : (
                <div className={styles.noTransactions}>No transactions yet</div>
              )}
            </div>
          </div>

          <div className={styles.demoNotice}>
            <p>Demo Account Limits:</p>
            <ul>
              <li>Maximum deposit: ₹1,000 per transaction</li>
              <li>Maximum balance: ₹10,000</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
