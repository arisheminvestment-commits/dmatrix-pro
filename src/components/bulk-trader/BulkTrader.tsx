import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
// Dropped Dropdown from imports, replacing with standard HTML selects.
import { Button, Text } from '@deriv-com/quill-ui'; 
import { localize } from '@deriv-com/translations';
// The relative import works because the SCSS file is now in the subfolder.
import './bulk-trader.scss'; 

// Updated Strategy Options: Added 'Rise/Fall' and 'Only Ups/Downs' seen in image_10.png
const strategy_options = [
    { label: localize('Even'), value: 'Even' },
    { label: localize('Odd'), value: 'Odd' },
    { label: localize('Matches'), value: 'Matches' },
    { label: localize('Differs'), value: 'Differs' },
    { label: localize('Over'), value: 'Over' },
    { label: localize('Under'), value: 'Under' },
    { label: localize('Rise'), value: 'Rise' },
    { label: localize('Fall'), value: 'Fall' },
    { label: localize('Only Ups'), value: 'Only Ups' },
    { label: localize('Only Downs'), value: 'Only Downs' },
    { label: localize('Rise Equals'), value: 'Rise Equals' },
    { label: localize('Fall Equals'), value: 'Fall Equals' },
];

const DigitStatistics = () => {
    // Placeholder data representing the sequence analysis from image_10.png
    // In a final implementation, this will be wired to a live MobX store.
    const statistics = [
        { label: '0', value: '10.10%', color: 'var(--brand-white)', ring: 'var(--brand-dark-grey)' },
        { label: '1', value: '10.70%', color: 'var(--brand-warning)', ring: 'var(--brand-warning)' },
        { label: '2', value: '11.60%', color: 'var(--brand-white)', ring: 'var(--brand-success)' },
        { label: '3', value: '9.60%', color: 'var(--brand-tertiary)', ring: 'var(--brand-tertiary)' },
        { label: '4', value: '7.70%', color: 'var(--brand-white)', ring: 'var(--brand-danger)' },
        { label: '5', value: '11.50%', color: 'var(--brand-white)', ring: 'var(--brand-primary)' },
        { label: '6', value: '9.00%', color: 'var(--brand-white)', ring: 'var(--brand-white)' },
        { label: '7', value: '10.20%', color: 'var(--brand-white)', ring: 'var(--brand-dark-grey)' },
        { label: '8', value: '10.40%', color: 'var(--brand-white)', ring: 'var(--brand-dark-grey)' },
        { label: '9', value: '9.20%', color: 'var(--brand-white)', ring: 'var(--brand-dark-grey)' },
    ];

    return (
        <div className='bulk-trader__digit-statistics'>
            {/* Upper grid for the percentage boxes */}
            <div className='bulk-trader__stat-header'>
                {statistics.map((stat, index) => (
                    <div key={index} className='bulk-trader__stat-box' style={{ borderColor: stat.ring, color: stat.color }}>
                        <Text size='sm' weight='bold' color='current'>{stat.label}</Text>
                        <Text size='xs' weight='normal' color='current'>{stat.value}</Text>
                    </div>
                ))}
            </div>
            {/* Placeholder for the Odd/Even grid pattern seen below percentages in image_10.png */}
            <div className='bulk-trader__grid-placeholder'>
                <Text size='xs' weight='normal' style={{ color: 'var(--brand-success)' }}>E</Text>
                <Text size='xs' weight='normal' style={{ color: 'var(--brand-danger)' }}>O</Text>
                {/* ...more placeholders to fill the grid structure... */}
            </div>
        </div>
    );
};

export const BulkTrader = observer(() => {
    // NEW: Setting up local UI state to make inputs interactive, mimicking image_10.png values
    const [market_value, setMarketValue] = useState('Vol 10 (1s)');
    const [strategy_value, setStrategyValue] = useState('Even');
    const [stake_value, setStakeValue] = useState('0.5');
    const [duration_value, setDurationValue] = useState('1');
    const [bulk_trades_value, setBulkTradesValue] = useState('10');

    // UI state for the Run button
    const [is_running, setIsRunning] = useState(false);

    const onRun = () => {
        setIsRunning(true);
        // We'll wire the MobX store logic for executing trades here in Turn 36
        console.log('Starting bulk trades...');
    };

    const onStop = () => {
        setIsRunning(false);
        // MobX store stop logic in Turn 36
        console.log('Stopping bulk trades...');
    };

    return (
        <div className='bulk-trader__wrapper'>
            {/* The Main Content Area with Input and Analysis columns */}
            <div className='bulk-trader__content'>
                
                {/* Left Column: Input Settings Area */}
                <div className='bulk-trader__inputs-panel'>
                    
                    {/* Market Selector: Replaced placeholder with stylized HTML Select */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Market')}</Text>
                        <select
                            className='bulk-trader__select'
                            value={market_value}
                            onChange={(e) => setMarketValue(e.target.value)}
                        >
                            {/* Placeholder Market. Wire to live markets in later turns */}
                            <option value='Vol 10 (1s)'>Vol 10 (1s)</option>
                        </select>
                    </div>

                    {/* Stake Selector: Replaced placeholder with stylized HTML Select */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Stake (USD)')}</Text>
                        <select
                            className='bulk-trader__select'
                            value={stake_value}
                            onChange={(e) => setStakeValue(e.target.value)}
                        >
                            <option value='0.5'>0.5</option>
                            <option value='1.0'>1.0</option>
                        </select>
                    </div>

                    {/* Duration Selector: Replaced placeholder with stylized HTML Select */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Duration (ticks)')}</Text>
                        <select
                            className='bulk-trader__select'
                            value={duration_value}
                            onChange={(e) => setDurationValue(e.target.value)}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>
                    </div>

                    {/* No. of Bulk Trades: Replaced placeholder with stylized HTML Select */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('No. of bulk trades')}</Text>
                        <select
                            className='bulk-trader__select'
                            value={bulk_trades_value}
                            onChange={(e) => setBulkTradesValue(e.target.value)}
                        >
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                        </select>
                    </div>

                    {/* Strategy Selector (Critical complex dropdown from image_10.png) */}
                    {/* Alternative using stylized HTML Select for the entire dropdown mechanism */}
                    <div className='bulk-trader__input-group bulk-trader__strategy-group'>
                        <Text size='sm'>{localize('Strategy')}</Text>
                        <select
                            className='bulk-trader__strategy-select'
                            value={strategy_value}
                            onChange={(e) => setStrategyValue(e.target.value)}
                        >
                            {strategy_options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* Right Column: Sequence Analysis Panel */}
                <div className='bulk-trader__analysis-panel'>
                    <DigitStatistics />
                </div>
            </div>
            
            {/* The unique control area located ABOVE the main Run button */}
            <div className='bulk-trader__bottom-controls'>
                <div className='bulk-trader__bottom-left'>
                    <div className='bulk-trader__controls-icon'>
                        {/* Placeholder for the complex grey cart icon */}
                        <div className='bulk-trader__icon-cart'>🛒</div>
                        <Text size='sm'>{localize('Bulk AI Entry')}</Text>
                    </div>
                </div>
                
                {/* The unique red delta 'Bulk Odd' button seen in image_10.png */}
                <div className='bulk-trader__bottom-right'>
                    <Button
                        color='primary'
                        variant='contained'
                        className='bulk-trader__delta-button'
                        // Special style hook for the non-primary color from mockup
                        style={{ backgroundColor: 'var(--brand-danger)', color: 'var(--brand-white)' }}
                    >
                        {/* Placeholder for the delta triangle icon */}
                        <span>▲</span> {localize('Bulk Odd')}
                    </Button>
                </div>
            </div>
            
            {/* Main Application Run Button: Wired and functional with local UI state */}
            {/* integrated into the generic bottom bar inherited from the generic Bot interface */}
            <div className='bot-dashboard__controls'>
                <Button
                    color='primary'
                    size='lg'
                    variant='contained'
                    onClick={is_running ? onStop : onRun}
                    // Special style hook for the teal green color from the mockup (image_10.png)
                    style={{ backgroundColor: 'var(--brand-success)', color: 'var(--brand-white)' }}
                >
                    {is_running ? localize('Stop') : localize('Run')}
                </Button>
            </div>
        </div>
    );
});
