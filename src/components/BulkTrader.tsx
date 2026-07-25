import React, { useState } from 'react';
import './BulkTrader.css';

export const BulkTrader: React.FC = () => {
    const [market, setMarket] = useState('Vol 10 (1s)');
    const [strategy, setStrategy] = useState('Even');
    const [stake, setStake] = useState('0.5');
    const [duration, setDuration] = useState('1');
    const [prediction, setPrediction] = useState('1');
    const [bulkCount, setBulkCount] = useState('10');

    // Strategy Dropdown Options (exact options from trading setup)
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

    // Real-time digit stats bar data (0 to 9)
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
        <div className="bulk-trader-container">
            {/* Left Controls Panel */}
            <div className="bulk-controls-panel">
                <div className="input-group-row">
                    <div className="input-field">
                        <label>Market</label>
                        <select value={market} onChange={(e) => setMarket(e.target.value)}>
                            <option value="Vol 10 (1s)">Vol 10 (1s)</option>
                            <option value="R_100">Volatility 100 Index</option>
                            <option value="R_50">Volatility 50 Index</option>
                            <option value="R_25">Volatility 25 Index</option>
                            <option value="R_10">Volatility 10 Index</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Strategy</label>
                        <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
                            {strategyOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="input-field full-width">
                    <label>Stake (USD)</label>
                    <input type="number" value={stake} onChange={(e) => setStake(e.target.value)} />
                </div>

                <div className="input-group-row">
                    <div className="input-field">
                        <label>Duration (ticks)</label>
                        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    {['Over', 'Under', 'Matches', 'Differs'].includes(strategy) && (
                        <div className="input-field">
                            <label>Prediction</label>
                            <input type="number" value={prediction} onChange={(e) => setPrediction(e.target.value)} />
                        </div>
                    )}
                </div>

                <div className="input-field full-width">
                    <label>No. of bulk trades</label>
                    <input type="number" value={bulkCount} onChange={(e) => setBulkCount(e.target.value)} />
                </div>

                {/* Bulk Execution Buttons */}
                <div className="bulk-actions-row">
                    <button className="btn-bulk-even">
                        <span className="icon">⸬</span>
                        Bulk Even
                    </button>
                    <button className="btn-bulk-ai">Bulk AI Entry</button>
                    <button className="btn-bulk-odd">
                        <span className="icon">▲</span>
                        Bulk Odd
                    </button>
                </div>
            </div>

            {/* Right Live Analysis Panel */}
            <div className="bulk-analysis-panel">
                <div className="digits-stat-bar">
                    {digitStats.map((stat) => (
                        <div key={stat.digit} className={`digit-circle ${stat.active ? 'highlight' : ''}`}>
                            <span className="digit-num">{stat.digit}</span>
                            <span className="digit-percent">{stat.percentage}</span>
                        </div>
                    ))}
                </div>

                <div className="history-grid">
                    <div className="history-row">
                        <span className="even">E</span> <span className="odd">O</span> <span className="odd">O</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span>
                    </div>
                    <div className="history-row">
                        <span className="odd">O</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span>
                    </div>
                    <div className="history-row">
                        <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="odd">O</span> <span className="odd">O</span> <span className="odd">O</span> <span className="even">E</span> <span className="odd">O</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span> <span className="even">E</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
