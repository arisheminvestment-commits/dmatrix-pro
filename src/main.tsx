import React, { useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import BulkTrader from './components/BulkTrader';

export const TAB_IDS = ['dashboard', 'bot_builder', 'charts', 'tutorials', 'bulk_trader'];

const AppWrapper: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className='app-container'>
            {/* Main Navigation Tab Bar */}
            <div className='tabs-wrapper' style={{ display: 'flex', gap: '12px', padding: '12px 24px', backgroundColor: '#161c24', borderBottom: '1px solid #212b36' }}>
                <button
                    onClick={() => handleTabChange(0)}
                    style={{
                        padding: '8px 16px',
                        background: activeTab === 0 ? '#212b36' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: activeTab === 0 ? 'bold' : 'normal',
                    }}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => handleTabChange(1)}
                    style={{
                        padding: '8px 16px',
                        background: activeTab === 1 ? '#212b36' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: activeTab === 1 ? 'bold' : 'normal',
                    }}
                >
                    Bot Builder
                </button>
                <button
                    onClick={() => handleTabChange(2)}
                    style={{
                        padding: '8px 16px',
                        background: activeTab === 2 ? '#212b36' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: activeTab === 2 ? 'bold' : 'normal',
                    }}
                >
                    Charts
                </button>
                <button
                    onClick={() => handleTabChange(3)}
                    style={{
                        padding: '8px 16px',
                        background: activeTab === 3 ? '#212b36' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: activeTab === 3 ? 'bold' : 'normal',
                    }}
                >
                    Tutorials
                </button>
                {/* Bulk Trader placed right next to Tutorials */}
                <button
                    onClick={() => handleTabChange(4)}
                    style={{
                        padding: '8px 16px',
                        background: activeTab === 4 ? '#212b36' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: activeTab === 4 ? 'bold' : 'normal',
                    }}
                >
                    Bulk Trader
                </button>
            </div>

            {/* Tab Views */}
            <div className='tab-content'>
                {activeTab === 0 && <div>Dashboard View</div>}
                {activeTab === 1 && <div>Bot Builder View</div>}
                {activeTab === 2 && <div>Charts View</div>}
                {activeTab === 3 && <div>Tutorials View</div>}
                {activeTab === 4 && <BulkTrader />}
            </div>
        </div>
    );
};

export default AppWrapper;
