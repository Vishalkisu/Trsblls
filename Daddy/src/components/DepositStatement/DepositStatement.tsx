import React, { useState, useMemo } from 'react';
import { 
  FaSearch, 
  FaWallet,
  FaFileExport,
  FaTrash
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import useWalletStore from '../../stores/useWalletStore';
import styles from './DepositStatement.module.css';

const DepositStatement: React.FC = () => {
  const { 
    transactions, 
    balance,
    deleteTransactions,
    isLoading
  } = useWalletStore();

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [depositType, setDepositType] = useState('All');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  // Filtering and Sorting Transactions
  const filteredData = useMemo(() => {
    return transactions
      .filter(deposit => {
        const matchType = depositType === 'All' || deposit.type === depositType;
        const matchDate = 
          (!fromDate || new Date(deposit.timestamp) >= new Date(fromDate)) &&
          (!toDate || new Date(deposit.timestamp) <= new Date(toDate));
        const matchSearch = 
          searchQuery === '' || 
          Object.values(deposit).some(value => 
            value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
          );
        
        return matchType && matchDate && matchSearch;
      })
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [transactions, depositType, fromDate, toDate, searchQuery]);

  // Delete Handlers
  const handleDeleteClick = () => {
    if (filteredData.length === 0) {
      alert('No records to delete');
      return;
    }
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      setDeleteInProgress(true);
      const itemsToDelete = selectedItems.length > 0 
        ? selectedItems 
        : filteredData.map(item => item.id);

      const success = await deleteTransactions(itemsToDelete);
      
      if (success) {
        setSelectedItems([]);
        setShowDeleteConfirm(false);
      } else {
        throw new Error('Failed to delete transactions');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to delete records. Please try again.');
    } finally {
      setDeleteInProgress(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
  };

  const handleItemSelect = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Export Handlers
  const handleExportCSV = () => {
    try {
      const headers = ['Date', 'Type', 'Amount', 'Status'];
      const csvContent = [
        headers.join(','),
        ...filteredData.map(item => [
          new Date(item.timestamp).toLocaleDateString(),
          item.type,
          item.amount,
          item.status
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'deposit_statement.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowExportMenu(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  const handleExportPDF = () => {
    alert('PDF export functionality coming soon!');
    setShowExportMenu(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.depositStatementContainer}
    >
      <div className={styles.pageTitle}>
        <h1>{depositType === 'withdraw' ? 'Withdraw Statement' : 'Deposit Statement'}</h1>
      </div>

      <motion.div 
        className={styles.balanceCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.balanceInfo}>
          <div>
            <div className={styles.balanceLabel}>Available Balance</div>
            <div className={styles.balanceAmount}>
              <span className={styles.currencySymbol}>₹</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {balance.toLocaleString('en-IN')}
              </motion.span>
            </div>
          </div>
          <motion.div 
            className={styles.balanceIcon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWallet size={24} color="#00ff00" />
          </motion.div>
        </div>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.controlPanel}
        >
          <div className={styles.searchAndActions}>
            <div className={styles.searchContainer}>
              <FaSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search by type, amount, status..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.actionIcons}>
              <div className={styles.exportWrapper}>
                <motion.button
                  className={styles.actionButton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowExportMenu(!showExportMenu)}
                >
                  <FaFileExport />
                </motion.button>
                <AnimatePresence>
                  {showExportMenu && (
                    <motion.div
                      className={styles.exportMenu}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <button onClick={handleExportCSV}>Export as CSV</button>
                      <button onClick={handleExportPDF}>Export as PDF</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                className={`${styles.actionButton} ${selectedItems.length > 0 ? styles.active : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDeleteClick}
                disabled={deleteInProgress || isLoading}
              >
                <FaTrash />
                {selectedItems.length > 0 && (
                  <span className={styles.selectedCount}>
                    {selectedItems.length}
                  </span>
                )}
              </motion.button>
            </div>
          </div>

          <div className={styles.filterContainer}>
            <div className={styles.dateFilter}>
              <label>From:</label>
              <input 
                type="date" 
                value={fromDate} 
                onChange={(e) => setFromDate(e.target.value)}
                className={styles.dateInput}
              />
              <label>To:</label>
              <input 
                type="date" 
                value={toDate} 
                onChange={(e) => setToDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>

            <div className={styles.typeFilter}>
              <label>Type:</label>
              <select 
                value={depositType} 
                onChange={(e) => setDepositType(e.target.value)}
                className={styles.typeDropdown}
              >
                {[
                  { value: 'All', label: 'All Transactions' },
                  { value: 'deposit', label: 'Deposits Only' },
                  { value: 'withdraw', label: 'Withdrawals Only' }
                ].map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <motion.table 
          className={styles.depositTable}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setSelectedItems(
                      e.target.checked 
                        ? filteredData.map(item => item.id)
                        : []
                    );
                  }}
                  checked={
                    filteredData.length > 0 && 
                    selectedItems.length === filteredData.length
                  }
                  disabled={filteredData.length === 0}
                />
              </th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((deposit) => (
                <motion.tr 
                  key={deposit.id}
                  whileHover={{ scale: 1.01 }}
                  className={selectedItems.includes(deposit.id) ? styles.selected : ''}
                  onClick={() => handleItemSelect(deposit.id)}
                >
                  <td onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(deposit.id)}
                      onChange={() => handleItemSelect(deposit.id)}
                    />
                  </td>
                  <td>{new Date(deposit.timestamp).toLocaleDateString()}</td>
                  <td>{deposit.type}</td>
                  <td>₹{deposit.amount.toLocaleString('en-IN')}</td>
                  <td>{deposit.status}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className={styles.noRecords}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </motion.table>

        <AnimatePresence>
          {showDeleteConfirm && (
            <motion.div
              className={styles.deleteModal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className={styles.deleteModalContent}>
                <h3>Confirm Delete</h3>
                <p>
                  {selectedItems.length > 0
                    ? `Are you sure you want to delete ${selectedItems.length} selected record(s)?`
                    : 'Are you sure you want to delete all filtered records?'}
                </p>
                <div className={styles.deleteModalActions}>
                  <motion.button
                    className={styles.cancelButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDeleteCancel}
                    disabled={deleteInProgress}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className={styles.deleteButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDeleteConfirm}
                    disabled={deleteInProgress}
                  >
                    {deleteInProgress ? (
                      <span className={styles.deleteSpinner}></span>
                    ) : (
                      'Delete'
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DepositStatement;
