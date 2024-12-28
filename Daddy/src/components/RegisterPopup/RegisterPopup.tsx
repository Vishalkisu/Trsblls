import React, { useState } from 'react';
import styles from './RegisterPopup.module.css';
import { registerUser, completeEmailVerification } from '../../firebase/auth';

interface RegisterPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (userData: { username: string; password: string; email: string; phone: string }) => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ isOpen, onClose, onRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        agreeToTerms: '',
        submit: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [verificationSent, setVerificationSent] = useState(false);

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            agreeToTerms: '',
            submit: ''
        };

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must be 18+ and agree to the terms';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            setErrors(prev => ({ ...prev, submit: '' }));

            // Check internet connection first
            if (!navigator.onLine) {
                setErrors(prev => ({
                    ...prev,
                    submit: 'No internet connection. Please check your connection and try again.'
                }));
                setIsLoading(false);
                return;
            }

            try {
                // Try to reach Firebase first
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error('Connection timeout')), 10000);
                });

                const registrationPromise = registerUser(
                    formData.username,
                    formData.password,
                    formData.email
                );

                const user = await Promise.race([registrationPromise, timeoutPromise]);

                setVerificationSent(true);
                
                // Check for email verification link
                if (window.location.href.includes('apiKey')) {
                    const verified = await completeEmailVerification();
                    if (verified) {
                        onClose();
                    }
                }

                // Call onRegister with the required interface
                onRegister({
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                    phone: '' // Keep empty string for phone as we're using email verification
                });

            } catch (error: any) {
                console.error('Registration error:', error);
                let errorMessage = 'Registration failed. ';

                if (!navigator.onLine) {
                    errorMessage = 'No internet connection. Please check your connection and try again.';
                } else if (error.message === 'Connection timeout') {
                    errorMessage = 'Connection timeout. Please check your internet and try again.';
                } else if (error.code === 'auth/network-request-failed') {
                    errorMessage = 'Network error. Please check your internet connection and try again.';
                } else {
                    errorMessage += error.message || 'Please try again.';
                }

                setErrors(prev => ({
                    ...prev,
                    submit: errorMessage
                }));
                setIsLoading(false);
                return;
            }

            setFormData({
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                agreeToTerms: false
            });
            setIsLoading(false);
        }
    };

    return (
        <div className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popupContent}>
                <div className={styles.header}>
                    <h2>Create Your Account</h2>
                    <p>Join DADDYBET and start winning today!</p>
                </div>
                {verificationSent ? (
                    <div className={styles.verificationMessage}>
                        <i className="fas fa-envelope-open-text"></i>
                        <h3>Verification Email Sent!</h3>
                        <p>Please check your email to verify your account.</p>
                        <p>Click the link in the email to complete your registration.</p>
                        <button onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {errors.submit && (
                            <div className={styles.submitError}>
                                <i className="fas fa-exclamation-circle"></i>
                                {errors.submit}
                            </div>
                        )}
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => {
                                    setFormData({ ...formData, username: e.target.value });
                                    setErrors(prev => ({ ...prev, username: '', submit: '' }));
                                }}
                            />
                            {errors.username && <span className={styles.error}>{errors.username}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    setErrors(prev => ({ ...prev, email: '', submit: '' }));
                                }}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.passwordInputGroup}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    className={styles.showPasswordBtn}
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {errors.password && <span className={styles.error}>{errors.password}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.passwordInputGroup}>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    className={styles.showPasswordBtn}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                        </div>
                        <div className={styles.termsGroup}>
                            <label className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    checked={formData.agreeToTerms}
                                    onChange={(e) => {
                                        setFormData({ ...formData, agreeToTerms: e.target.checked });
                                        setErrors(prev => ({ ...prev, agreeToTerms: '', submit: '' }));
                                    }}
                                />
                                <span className={styles.checkmark}></span>
                                <span className={styles.termsText}>
                                    I am 18+ and agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                                </span>
                            </label>
                            {errors.agreeToTerms && <span className={styles.error}>{errors.agreeToTerms}</span>}
                        </div>
                        <div className={styles.buttonGroup}>
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                            <button type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterPopup;
