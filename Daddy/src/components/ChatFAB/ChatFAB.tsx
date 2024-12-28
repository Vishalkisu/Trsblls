import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatFAB.css';

const ChatFAB: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<Array<{text: string, sender: 'user' | 'support', timestamp: string}>>([
        {
            text: "Hello! How can we help you today?",
            sender: 'support',
            timestamp: new Date().toLocaleTimeString()
        }
    ]);

    const handleChatClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Add user message
        const newMessage = {
            text: message,
            sender: 'user' as const,
            timestamp: new Date().toLocaleTimeString()
        };
        
        setChatHistory(prev => [...prev, newMessage]);
        setMessage('');

        // Simulate support response
        setTimeout(() => {
            const supportResponse = {
                text: "Thank you for your message. Our support team will get back to you shortly.",
                sender: 'support' as const,
                timestamp: new Date().toLocaleTimeString()
            };
            setChatHistory(prev => [...prev, supportResponse]);
        }, 1000);
    };

    return (
        <div className="chat-fab-container">
            <button 
                className="chat-fab"
                onClick={handleChatClick}
                aria-label="Chat with us"
            >
                <FaComments className="chat-icon" />
                <span className="chat-label">Chat with us</span>
            </button>

            {isOpen && (
                <div className="chat-dialog">
                    <div className="chat-header">
                        <h3>Customer Support</h3>
                        <button 
                            className="close-button"
                            onClick={handleChatClick}
                            aria-label="Close chat"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    
                    <div className="chat-messages">
                        {chatHistory.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'support-message'}`}
                            >
                                <div className="message-content">{msg.text}</div>
                                <div className="message-timestamp">{msg.timestamp}</div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="chat-input-form">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="chat-input"
                        />
                        <button 
                            type="submit" 
                            className="send-button"
                            disabled={!message.trim()}
                        >
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatFAB;
