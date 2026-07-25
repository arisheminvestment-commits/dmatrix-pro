import React, { useState } from 'react';
import { api_base } from '@/external/bot-skeleton';

export const BulkTrader: React.FC = () => {
    const [market, setMarket] = useState('1HZ10V');
    const [strategy, setStrategy] = useState('Even');
    const [stake, setStake] = useState('0.5');
    const [duration, setDuration] = useState('1');
    const [prediction, setPrediction] = useState('1');
    const [bulkCount, setBulkCount] = useState('10');
    const [isTrading, setIsTrading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const marketOptions = [
        { symbol: 'R_10', name: 'Volatility 10 Index' },
        { symbol: 'R_25', name: 'Volatility 25 Index' },
        { symbol: 'R_50', name: 'Volatility 50 Index' },
        { symbol: 'R_75', name: 'Volatility 75 Index' },
        { symbol: 'R_100', name: 'Volatility 100 Index' },
        { symbol: '1HZ10V', name: 'Volatility 10 (1s) Index' },
        { symbol: '1HZ25V', name: 'Volatility 25 (1s) Index' },
        { symbol: '1HZ50V', name: 'Volatility 50 (1s) Index' },
        { symbol: '1HZ75V', name: 'Volatility 75 (1s) Index' },
        { symbol: '1HZ100V', name: 'Volatility 100 (1s) Index' },
        { symbol: '1HZ150V', name: 'Volatility 150 (1s) Index' },
        { symbol: '1HZ250V', name: 'Volatility 250 (1s) Index' },
        { symbol: 'JD10', name: 'Jump 10 Index' },
        { symbol: 'JD25', name: 'Jump 25 Index' },
        { symbol: 'JD50', name: 'Jump 50 Index' },
        { symbol: 'JD75', name: 'Jump 75 Index' },
        { symbol: 'JD100', name: 'Jump 100 Index' },
    ];

    const strategyOptions = [
        'Even',
        'Odd',
        'Matches',
        'Differs',
        'Over',
        'Under',
        'Rise',
        'Fall',
    ];

    const digitStats = [
        { digit: 0, percentage: '10.10%' },
        { digit: 1, percentage: '10.70%' },
        { digit: 2, percentage: '11.60%' },
        { digit: 3, percentage: '9.60%', active: true },
        { digit: 4, percentage: '7.70%' },
        { digit: 5, percentage: '11.50%' },
        { digit: 6, percentage: '9.00%' },
        { digit: 7, percentage: '10.20%' },
        { digit: 8, percentage: '10.40%' },
        { digit: 9, percentage: '9.20%' },
    ];

    const addLog = (message: string) => {
        setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev.slice(0, 49)]);
    };

    const executeBulkTrades = async (contractType: string) => {
        if (!api_base?.api) {
            addLog('Error: Deriv API connection not initialized. Please log in.');
            return;
        }

        const count = parseInt(bulkCount, 10) || 1;
        const stakeValue = parseFloat(stake) || 0.55;
        const durationValue = parseInt(duration, 10) || 1;

        setIsTrading(true);
        addLog(`Initiating ${count} bulk trades for type: ${contractType}...`);

        for (let i = 1; i <= count; i++) {
            try {
                const proposalReq = {
                    proposal: 1,
                    amount: stakeValue,
                    basis: 'stake',
                    contract_type: contractType,
                    currency: 'USD',
                    duration: durationValue,
                    duration_unit: 't',
                    symbol: market,
                    barrier: ['OVER', 'UNDER', 'MATCHES', 'DIGITDIFF'].includes(contractType) ? prediction : undefined,
                };

                const proposalRes = await api_base.api.send(proposalReq);

                if (proposalRes.error) {
                    addLog(`Trade #${i} proposal failed: ${proposalRes.error.message}`);
                    continue;
                }

                const buyRes = await api_base.api.send({
                    buy: proposalRes.proposal.id,
                    price: stakeValue,
                });

                if (buyRes.error) {
                    addLog(`Trade #${i} execution failed: ${buyRes.error.message}`);
                } else {
                    addLog(`Trade #${i} placed successfully! ID: ${buyRes.buy.contract_id}`);
                }
            } catch (err: any) {
                addLog(`Trade #${i} failed: ${err?.message || 'Unknown network error'}`);
            }
        }

        setIsTrading(false);
        addLog(`Bulk execution completed.`);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: '#0d1117', color: '#ffffff', borderRadius: '8px', minHeight: 'calc(100vh - 120px)' }}>
            {/* Left Controls Panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Market</label>
                        <select value={market} onChange={(e) => setMarket(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }}>
                            {marketOptions.map((m) => (
                                <option key={m.symbol} value={m.symbol}>{m.name}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Strategy</label>
                        <select value={strategy} onChange={(e) => setStrategy(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }}>
                            {strategyOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Stake (USD)</label>
                    <input type="number" value={stake} onChange={(e) => setStake(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Duration (ticks)</label>
                        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                    </div>
                    {['Over', 'Under', 'Matches', 'Differs'].includes(strategy) && (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Prediction</label>
                            <input type="number" value={prediction} onChange={(e) => setPrediction(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>No. of bulk trades</label>
                    <input type="number" value={bulkCount} onChange={(e) => setBulkCount(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                </div>

                {/* Bulk Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    <button 
                        disabled={isTrading}
                        onClick={() => executeBulkTrades('DIGITEVEN')}
                        style={{ flex: 1, background: '#238b68', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 600, cursor: isTrading ? 'not-allowed' : 'pointer' }}
                    >
                        {isTrading ? 'Executing...' : 'Bulk Even'}
                    </button>
                    
                    <button 
                        disabled={isTrading}
                        onClick={() => executeBulkTrades('DIGITODD')}
                        style={{ background: '#4a5568', color: '#ffffff', border: 'none', padding: '14px 16px', borderRadius: '20px', fontSize: '0.8rem', cursor: isTrading ? 'not-allowed' : 'pointer' }}
                    >
                        Bulk AI Entry
                    </button>
                    
                    <button 
                        disabled={isTrading}
                        onClick={() => executeBulkTrades('DIGITODD')}
                        style={{ flex: 1, background: '#a8384a', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 600, cursor: isTrading ? 'not-allowed' : 'pointer' }}
                    >
                        {isTrading ? 'Executing...' : 'Bulk Odd'}
                    </button>
                </div>

                {/* Console Log Output */}
                <div style={{ marginTop: '12px', background: '#080612', padding: '12px', borderRadius: '6px', height: '120px', overflowY: 'auto', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#8c9ba5', marginBottom: '6px', fontWeight: 600 }}>Console Output:</div>
                    {logs.length === 0 ? (
                        <div style={{ fontSize: '0.75rem', color: '#4a5568' }}>Awaiting execution...</div>
                    ) : (
                        logs.map((log, idx) => (
                            <div key={idx} style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: log.includes('failed') || log.includes('Error') ? '#e53e3e' : '#38a169', marginBottom: '3px' }}>
                                {log}
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Right Live Analysis Panel */}
            <div style={{ flex: 1.2, background: '#eef2f5', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#120e24' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px' }}>
                    {digitStats.map((stat) => (
                        <div key={stat.digit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '44px', height: '52px', background: stat.active ? '#2b3648' : '#181c24', border: stat.active ? '2px solid #3182ce' : 'none', borderRadius: '24px', color: '#fff' }}>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{stat.digit}</span>
                            <span style={{ fontSize: '0.65rem', color: '#a0aec0' }}>{stat.percentage}</span>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px', background: '#f7fafc', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontWeight: 700 }}>
                        <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#e53e3e' }}>O</span> <span style={{ color: '#e53e3e' }}>O</span> <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#38a169' }}>E</span> <span style={{ color: '#e53e3e' }}>O</span> <span style={{ color: '#38a169' }}>E</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BulkTrader;
