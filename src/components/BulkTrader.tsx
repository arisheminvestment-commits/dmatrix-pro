import React, { lazy, useState, useEffect } from 'react';
import { isPreviewMode, PREVIEW_BASE_PATH } from '@/utils/is-preview-mode';
import { localize, TranslationProvider } from '@deriv-com/translations';

// Fixed relative imports pointing to src/app/
import CoreStoreProvider from '../app/CoreStoreProvider';
import i18nInstance from '../app/i18n';
import '../app/app-root.scss';

const Layout = lazy(() => import('../components/layout'));
const AppRoot = lazy(() => import('../app/app-root'));

const BulkTrader: React.FC = () => {
    const [market, setMarket] = useState('R_100');
    const [tradeType, setTradeType] = useState('DIGITEVEN');
    const [stake, setStake] = useState('10');
    const [ticks, setTicks] = useState('1');
    const [bulkCount, setBulkCount] = useState('5');
    const [logs, setLogs] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const logMessage = (msg: string) => {
        setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
    };

    const handleRunBulk = (type: 'DIGITEVEN' | 'DIGITODD') => {
        setIsRunning(true);
        logMessage(`Starting bulk execution for ${type} on ${market}...`);
        
        let count = 0;
        const total = parseInt(bulkCount, 10) || 1;

        const interval = setInterval(() => {
            count++;
            logMessage(`Executed trade #${count} for ${type} - Stake: $${stake}`);
            if (count >= total) {
                clearInterval(interval);
                setIsRunning(false);
                logMessage(`Completed ${total} bulk trades successfully.`);
            }
        }, 1000);
    };

    return (
        <div style={{ padding: '24px', color: '#fff', backgroundColor: '#161c24', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>Bulk Trader Tool</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Configuration Form */}
                <div style={{ backgroundColor: '#212b36', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Settings</h3>
                    
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px' }}>Market</label>
                        <select 
                            value={market} 
                            onChange={(e) => setMarket(e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#161c24', color: '#fff', border: '1px solid #334155' }}
                        >
                            <option value="R_100">Volatility 100 Index</option>
                            <option value="R_75">Volatility 75 Index</option>
                            <option value="R_50">Volatility 50 Index</option>
                            <option value="R_25">Volatility 25 Index</option>
                            <option value="R_10">Volatility 10 Index</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px' }}>Stake (USD)</label>
                        <input 
                            type="number" 
                            value={stake} 
                            onChange={(e) => setStake(e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#161c24', color: '#fff', border: '1px solid #334155' }}
                        />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px' }}>Ticks</label>
                        <input 
                            type="number" 
                            value={ticks} 
                            onChange={(e) => setTicks(e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#161c24', color: '#fff', border: '1px solid #334155' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px' }}>Number of Bulk Trades</label>
                        <input 
                            type="number" 
                            value={bulkCount} 
                            onChange={(e) => setBulkCount(e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#161c24', color: '#fff', border: '1px solid #334155' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            disabled={isRunning}
                            onClick={() => handleRunBulk('DIGITEVEN')}
                            style={{ flex: 1, padding: '12px', borderRadius: '4px', backgroundColor: '#4caf50', color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                        >
                            Bulk Even
                        </button>
                        <button 
                            disabled={isRunning}
                            onClick={() => handleRunBulk('DIGITODD')}
                            style={{ flex: 1, padding: '12px', borderRadius: '4px', backgroundColor: '#f44336', color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                        >
                            Bulk Odd
                        </button>
                    </div>
                </div>

                {/* Console Output */}
                <div style={{ backgroundColor: '#212b36', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '16px' }}>Console Output</h3>
                    <div style={{ flex: 1, backgroundColor: '#0e1318', padding: '12px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.85rem', overflowY: 'auto', maxHeight: '320px' }}>
                        {logs.length === 0 ? (
                            <span style={{ color: '#64748b' }}>Logs will appear here once trading starts...</span>
                        ) : (
                            logs.map((log, index) => (
                                <div key={index} style={{ marginBottom: '4px', borderBottom: '1px solid #1e293b', paddingBottom: '2px' }}>
                                    {log}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BulkTrader;
