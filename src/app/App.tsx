import React, { useState } from 'react';

export const BulkTrader: React.FC = () => {
    const [market, setMarket] = useState('Vol 10 (1s)');
    const [strategy, setStrategy] = useState('Even');
    const [stake, setStake] = useState('0.5');
    const [duration, setDuration] = useState('1');
    const [prediction, setPrediction] = useState('1');
    const [bulkCount, setBulkCount] = useState('10');

    const strategyOptions = [
        'Even',
        'Odd',
        'Matches',
        'Differs',
        'Over',
        'Under',
        'Rise',
        'Fall',
        'Only Ups',
        'Only Downs',
        'Rise Equals',
        'Fall Equals',
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

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: '#120e24', color: '#ffffff', borderRadius: '8px' }}>
            {/* Left Controls Panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>Market</label>
                        <select value={market} onChange={(e) => setMarket(e.target.value)} style={{ backgroundColor: '#0b2238', border: '1px solid #1a3d5c', color: '#fff', padding: '10px', borderRadius: '6px' }}>
                            <option value="Vol 10 (1s)">Vol 10 (1s)</option>
                            <option value="R_100">Volatility 100 Index</option>
                            <option value="R_50">Volatility 50 Index</option>
                            <option value="R_25">Volatility 25 Index</option>
                            <option value="R_10">Volatility 10 Index</option>
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
                    <button style={{ flex: 1, background: '#238b68', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Bulk Even</button>
                    <button style={{ background: '#4a5568', color: '#a0aec0', border: 'none', padding: '14px 16px', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer' }}>Bulk AI Entry</button>
                    <button style={{ flex: 1, background: '#a8384a', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Bulk Odd</button>
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
