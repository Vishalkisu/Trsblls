import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useAuth } from '../../context/AuthContext';
import { useSidebar } from '../../context/SidebarContext';
import Wallet from '../Wallet';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSignOutAlt, 
    faBars, 
    faHome, 
    faDice, 
    faEye, 
    faEyeSlash,
    faChartLine,
    faCaretDown,
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const { currentUser, isDemo, login, register, logout, loginAsDemo } = useAuth();
    const { isOpen, toggleSidebar } = useSidebar();
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [desktopLoginData, setDesktopLoginData] = useState({
        email: '',
        password: '',
    });
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Add useEffect to handle modal visibility based on auth state
    useEffect(() => {
        if (currentUser) {
            setShowLoginModal(false);
            setShowRegisterModal(false);
        }
    }, [currentUser]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && showLoginModal) {
                setShowLoginModal(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showLoginModal]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            setShowLoginModal(false); // Hide modal before login attempt
            await login(loginData.email, loginData.password);
            setLoginData({ email: '', password: '' });
            // For mobile view, we need to force a reload
            if (window.innerWidth <= 768) {
                window.location.reload();
            } else {
                navigate('/');
            }
        } catch (error: any) {
            setShowLoginModal(true); // Show modal again if login fails
            setError(error.message);
        }
    };

    const handleDesktopLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            await login(desktopLoginData.email, desktopLoginData.password);
            setDesktopLoginData({ email: '', password: '' });
            navigate('/');
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (registerData.password !== registerData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setShowRegisterModal(false); // Hide modal before registration attempt
            const username = registerData.username.trim(); // Get username
            await register(registerData.email, registerData.password, username);
            setRegisterData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            // For mobile view, we need to force a reload
            window.location.reload(); // Force reload to update the user state
        } catch (error: any) {
            setShowRegisterModal(true); // Show modal again if registration fails
            setError(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'login' | 'register' | 'desktop') => {
        const { name, value } = e.target;
        if (type === 'login') {
            setLoginData(prev => ({ ...prev, [name]: value }));
        } else if (type === 'desktop') {
            setDesktopLoginData(prev => ({ ...prev, [name]: value }));
        } else {
            setRegisterData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Add a function to get the display name
    const getDisplayName = () => {
        if (isDemo) return 'Demo User';
        if (!currentUser) return 'User';
        return currentUser.displayName || currentUser.email?.split('@')[0] || 'User';
    };

    // Add a function to get the avatar letter
    const getAvatarLetter = () => {
        if (isDemo) return 'D';
        if (!currentUser) return 'U';
        const displayName = currentUser.displayName;
        if (displayName && displayName.length > 0) {
            return displayName[0].toUpperCase();
        }
        return currentUser.email?.[0]?.toUpperCase() || 'U';
    };

    return (
        <header className={styles.header}>
            <div className={styles.topNav}>
                <div className={styles.container}>
                    <button className={styles.menuToggle} onClick={toggleSidebar} aria-label="Toggle Menu">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <NavLink to="/" className={styles.logo}>
                        <span className={styles.logoText}>TRS</span>
                        <span className={styles.betText}>BILL</span>
                    </NavLink>
                    <div className={styles.navLinks}>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''}>
                            <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                            Exchange
                        </NavLink>
                        <NavLink to="/live-casino" className={({ isActive }) => isActive ? styles.activeLink : ''}>
                            <FontAwesomeIcon icon={faDice} className={styles.navIcon} />
                            Live Casino
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Mobile auth nav in header */}
            <div className={styles.mobileAuthNav}>
                <div className={styles.container}>
                    <div className={styles.mobileAuthButtons}>
                        {!currentUser ? (
                            <>
                                <button className={styles.loginBtn} onClick={() => setShowLoginModal(true)}>
                                    Login
                                </button>
                                <button className={styles.demoBtn} onClick={loginAsDemo}>
                                    Try Demo
                                </button>
                                <button className={styles.registerBtn} onClick={() => setShowRegisterModal(true)}>
                                    Register
                                </button>
                            </>
                        ) : (
                            <div className={styles.userInfo}>
                                <div className={styles._userInfo_rizin_720}>
                                    <div className={styles.userAvatar}>
                                        {getAvatarLetter()}
                                    </div>
                                    <span className={styles._username_1m9xa_719}>
                                        {getDisplayName()}
                                    </span>
                                    <button 
                                        className={styles.menuToggleButton} 
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                    >
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </button>
                                    {showUserMenu && (
                                        <div className={styles.userSubmenu}>
                                            <NavLink to="/bet-portfolio" className={styles.submenuItem}>
                                                <FontAwesomeIcon icon={faChartLine} className={styles.submenuIcon} />
                                                Bet Portfolio
                                            </NavLink>
                                            <NavLink to="/deposit-statement" className={styles.submenuItem}>
                                                <FontAwesomeIcon icon={faMoneyBillTransfer} className={styles.submenuIcon} />
                                                Account Statement
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                                <Wallet />
                                <button className={styles.logoutBtn} onClick={handleLogout}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.bottomNav}>
                <div className={styles.container}>
                    <div className={`${styles.authButtons} ${styles.desktopAuth}`}>
                        {(currentUser || isDemo) ? (
                            <div className={styles.userControls}>
                                <Wallet />
                                <div className={styles._userInfo_rizin_720}>
                                    <div className={styles.avatar}>
                                        {getAvatarLetter()}
                                    </div>
                                    <span className={styles._username_1m9xa_719}>
                                        {getDisplayName()}
                                    </span>
                                    <button 
                                        className={styles.menuToggleButton} 
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                    >
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </button>
                                    {showUserMenu && (
                                        <div className={styles.userSubmenu}>
                                            <NavLink to="/bet-portfolio" className={styles.submenuItem}>
                                                <FontAwesomeIcon icon={faChartLine} className={styles.submenuIcon} />
                                                Bet Portfolio
                                            </NavLink>
                                            <NavLink to="/deposit-statement" className={styles.submenuItem}>
                                                <FontAwesomeIcon icon={faMoneyBillTransfer} className={styles.submenuIcon} />
                                                Account Statement
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                                <button onClick={handleLogout} className={styles.logoutBtn}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className={styles.logoutIcon} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleDesktopLogin} className={styles.authForm}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={desktopLoginData.email}
                                    onChange={(e) => handleInputChange(e, 'desktop')}
                                    required
                                />
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        type={showLoginPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        value={desktopLoginData.password}
                                        onChange={(e) => handleInputChange(e, 'desktop')}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggle}
                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                    >
                                        <FontAwesomeIcon icon={showLoginPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                                <div className={styles.authButtons}>
                                    <button type="submit" className={styles.loginBtn}>
                                        Login
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={loginAsDemo} 
                                        className={styles.demoBtn}
                                    >
                                        Try Demo
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setShowRegisterModal(true)}
                                        className={styles.switchBtn}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {showLoginModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setShowLoginModal(false)}>×</button>
                        <div className={styles.modalHeader}>
                            <h2>Welcome Back</h2>
                            <p>Sign in to continue to your account</p>
                        </div>
                        <form className={styles.loginForm} onSubmit={handleLogin}>
                            {error && <div className={styles.error}>{error}</div>}
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={(e) => handleInputChange(e, 'login')}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        type={showLoginPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        value={loginData.password}
                                        onChange={(e) => handleInputChange(e, 'login')}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggle}
                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                    >
                                        <FontAwesomeIcon icon={showLoginPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Sign In
                            </button>
                        </form>
                        <div className={styles.alternateOptions}>
                            <p>Don't have an account?</p>
                            <button onClick={() => {
                                setShowLoginModal(false);
                                setShowRegisterModal(true);
                            }}>
                                Register Now
                            </button>
                            <button onClick={loginAsDemo}>Try Demo Account</button>
                        </div>
                    </div>
                </div>
            )}

            {showRegisterModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setShowRegisterModal(false)}>×</button>
                        <div className={styles.modalHeader}>
                            <h2>Create Account</h2>
                            <p>Join us and start betting today</p>
                        </div>
                        <form className={styles.loginForm} onSubmit={handleRegister}>
                            {error && <div className={styles.error}>{error}</div>}
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={registerData.username}
                                    onChange={(e) => handleInputChange(e, 'register')}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={registerData.email}
                                    onChange={(e) => handleInputChange(e, 'register')}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        type={showRegisterPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        value={registerData.password}
                                        onChange={(e) => handleInputChange(e, 'register')}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggle}
                                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                    >
                                        <FontAwesomeIcon icon={showRegisterPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.passwordInputWrapper}>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={registerData.confirmPassword}
                                        onChange={(e) => handleInputChange(e, 'register')}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className={styles.passwordToggle}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Create Account
                            </button>
                        </form>
                        <div className={styles.alternateOptions}>
                            <p>Already have an account?</p>
                            <button onClick={() => {
                                setShowRegisterModal(false);
                                setShowLoginModal(true);
                            }}>
                                Sign In
                            </button>
                            <button onClick={loginAsDemo}>Try Demo Account</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
