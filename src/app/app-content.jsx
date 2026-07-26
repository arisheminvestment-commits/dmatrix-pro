// src/app/app-content.jsx
import React from 'react';
import { useStore } from '@/hooks/useStore';
import './app-content.scss';

export const AppContent = () => {
    const { ui } = useStore();

    return (
        <div className="deriv-app-container">
            {/* TOP NAVIGATION HEADER */}
            <header className="deriv-header">
                <div className="deriv-logo-area">
                    <span className="brand-title">DMatrix Pro</span>
                </div>
                <nav className="deriv-nav-tabs">
                    <button className="tab-item active">Strategy</button>
                    <button className="tab-item">Analysis Tool</button>
                    <button className="tab-item">Tutorials</button>
                </nav>
            </header>

            {/* MAIN DASHBOARD WORKSPACE */}
            <main className="deriv-workspace">
                <div className="workspace-inner">
                    {/* Your existing trading components and panels render here */}
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
