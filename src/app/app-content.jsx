// src/app/app-content.jsx
import React, { useState } from 'react';
import { useStore } from '@/hooks/useStore';
import './app.scss';

export const AppContent = () => {
    const { ui } = useStore();
    const [activeTab, setActiveTab] = useState('strategy');

    return (
        <div className="deriv-app-container">
            {/* TOP NAVIGATION HEADER */}
            <header className="deriv-header">
                <div className="deriv-logo-area">
                    <span className="brand-title">DMatrix Pro</span>
                </div>
                <nav className="deriv-nav-tabs">
                    <button 
                        className={`tab-item ${activeTab === 'strategy' ? 'active' : ''}`}
                        onClick={() => setActiveTab('strategy')}
                    >
                        Strategy
                    </button>
                    <button 
                        className={`tab-item ${activeTab === 'analysis' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analysis')}
                    >
                        Analysis Tool
                    </button>
                    <button 
                        className={`tab-item ${activeTab === 'tutorials' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tutorials')}
                    >
                        Tutorials
                    </button>
                </nav>
            </header>

            {/* MAIN DASHBOARD WORKSPACE */}
            <main className="deriv-workspace">
                <div className="workspace-inner">
                    {activeTab === 'strategy' && (
                        <div className="tab-pane">
                            <h2>Strategy Workspace</h2>
                            <p>Configure your automated bot rules, parameters, and execution logic here.</p>
                        </div>
                    )}
                    {activeTab === 'analysis' && (
                        <div className="tab-pane">
                            <h2>Analysis Tool</h2>
                            <p>Inspect live market data, statistics, and pattern trackers.</p>
                        </div>
                    )}
                    {activeTab === 'tutorials' && (
                        <div className="tab-pane">
                            <h2>Tutorials & Guides</h2>
                            <p>Learn how to optimize your automated trading strategies.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* RISK DISCLAIMER FOOTER (Anchored Bottom-Left) */}
            <footer className="deriv-footer">
                <div className="risk-disclaimer-text">
                    <strong>Risk Warning:</strong> The financial products offered via this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone.
                </div>
            </footer>
        </div>
    );
};

export default AppContent;
