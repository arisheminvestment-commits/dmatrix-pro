import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthWrapper } from './app/AuthWrapper';
import BulkTrader from './components/BulkTrader'; // Working interface
import './app/app-root.scss';

// TAB IDENTIFIERS (Add bulk_trader)
export const TAB_IDS = ['dashboard', 'bot_builder', 'charts', 'tutorials', 'bulk_trader'];

const AppWrapper: React.FC = () => {
    // STARTING TAB (e.g., Dashboard)
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <AuthWrapper>
            <div className='app-container'>
                {/* 1. TOP HEADER (Fix: Branding bar is now clean) */}
                <div className='app-header' style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#111827', borderBottom: '1px solid #1f2937' }}>
                    <div className='app-header__logo' style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>Dmatrix pro</div>
                    {/* Header right controls (Balance, Transfer, Run) are managed by AuthWrapper/Header components */}
                </div>

                {/* 2. MAIN NAVIGATION TAB ROW (Fix: Bulk Trader placed next to Tutorials) */}
                <div className='app-tabs-header' style={{ display: 'flex', gap: '12px', padding: '12px 24px', backgroundColor: '#161c24', borderBottom: '1px solid #212b36' }}>
                    <button onClick={() => handleTabChange(0)} style={{ padding: '8px 16px', background: activeTab === 0 ? '#212b36' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTab === 0 ? 'bold' : 'normal' }}>Dashboard</button>
                    <button onClick={() => handleTabChange(1)} style={{ padding: '8px 16px', background: activeTab === 1 ? '#212b36' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTab === 1 ? 'bold' : 'normal' }}>Bot Builder</button>
                    <button onClick={() => handleTabChange(2)} style={{ padding: '8px 16px', background: activeTab === 2 ? '#212b36' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTab === 2 ? 'bold' : 'normal' }}>Charts</button>
                    <button onClick={() => handleTabChange(3)} style={{ padding: '8px 16px', background: activeTab === 3 ? '#212b36' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTab === 3 ? 'bold' : 'normal' }}>Tutorials</button>
                    
                    {/* --- ADDED NEXT TO TUTORIALS --- */}
                    <button onClick={() => handleTabChange(4)} style={{ padding: '8px 16px', background: activeTab === 4 ? '#212b36' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTab === 4 ? 'bold' : 'normal' }}>Bulk Trader</button>
                </div>

                {/* 3. TAB CONTENT AREA (Fix: Renders working Bulk Trader interface) */}
                <div className='tab-content' style={{ padding: '24px' }}>
                    {activeTab === 0 && <div>{/* Core Dashboard Component */}</div>}
                    {activeTab === 1 && <div>{/* Core Bot Builder Component */}</div>}
                    {activeTab === 2 && <div>{/* Core Charts Component */}</div>}
                    {activeTab === 3 && <div>{/* Core Tutorials Component */}</div>}
                    
                    {/* --- RENDER BULK TRADER --- */}
                    {activeTab === 4 && <BulkTrader />}
                </div>
            </div>
        </AuthWrapper>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <AppWrapper />
        </React.StrictMode>
    );
}
