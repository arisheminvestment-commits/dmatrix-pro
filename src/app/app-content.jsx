// src/app/app-content.jsx
import React from 'react';
import { useStore } from '@/hooks/useStore';
import './app-content.scss';

export const AppContent = () => {
    const { ui } = useStore();

    return (
        <div className="app-layout-container">
            {/* MAIN APP WORKSPACE */}
            <div className="app-main-content">
                
                {/* TOP NAVIGATION HEADER WITH NEW TABS */}
                <nav className="bot-header-nav">
                    <div className="nav-tabs-group">
                        <button className="nav-tab-item active">Strategy</button>
                        <button className="nav-tab-item">Analysis Tool</button>
                        <button className="nav-tab-item">Tutorials</button>
                    </div>
                </nav>

                {/* WORKSPACE CONTENT AREA */}
                <div className="workspace-canvas">
                    {/* Your core trading bot workspace and components render here */}
                </div>
            </div>

            {/* RISK DISCLAIMER FOOTER (Anchored at the bottom) */}
            <footer className="app-footer-disclaimer">
                <p>
                    <strong>Risk Warning:</strong> The financial products offered via this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone.
                </p>
            </footer>
        </div>
    );
};

export default AppContent;
