import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Button, Text } from '@deriv-com/quill-ui'; // NOTE: Dropdown removed from imports
import { localize } from '@deriv-com/translations';
import './bulk-trader.scss'; // Link the contained style in the same folder

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
    // Placeholder data for the numbered sequence grid seen in image_10.png
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
            <div className='bulk-trader__stat-header'>
                {statistics.map((stat, index) => (
                    <div key={index} className='bulk-trader__stat-box' style={{ borderColor: stat.ring, color: stat.color }}>
                        <Text size='sm' weight='bold' color='current'>{stat.label}</Text>
                        <Text size='xs' weight='normal' color='current'>{stat.value}</Text>
                    </div>
                ))}
            </div>
            {/* The Odd/Even sequence grid placeholder (refer to image_10.png grid pattern) */}
            <div className='bulk-trader__grid-placeholder'>
                <Text size='xs' weight='normal' style={{ color: 'var(--brand-success)' }}>E</Text>
                <Text size='xs' weight='normal' style={{ color: 'var(--brand-danger)' }}>O</Text>
                {/* ...more placeholders to fill the grid... */}
            </div>
        </div>
    );
};

export const BulkTrader = observer(() => {
    // UI State management for input values, mimicking image_10.png values
    const [market_value, setMarketValue] = useState('Vol 10 (1s)');
    const [strategy_value, setStrategyValue] = useState('Even');
    const [stake_value, setStakeValue] = useState('0.5');
    const [duration_value, setDurationValue] = useState('1');
    const [bulk_trades_value, setBulkTradesValue] = useState('10');

    const [is_running, setIsRunning] = useState(false);

    const onRun = () => {
        setIsRunning(true);
        console.log('Starting bulk trades...');
    };

    const onStop = () => {
        setIsRunning(false);
        console.log('Stopping bulk trades...');
    };

    return (
        <div className='bulk-trader__wrapper'>
            {/* The Main Content Layout Area */}
            <div className='bulk-trader__content'>
                
                {/* Left Column: All Input Settings (Markets, Strategies, Stakes) */}
                <div className='bulk-trader__inputs-panel'>
                    
                    {/* Market Selector: Alternatives uses stylized HTML Select with <Text> Label */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Market')}</Text>
                        <select
                            className='bulk-trader__select'
                            value={market_value}
                            onChange={(e) => setMarketValue(e.target.value)}
                        >
                            <option value='Vol 10 (1s)'>Vol 10 (1s)</option>
                        </select>
                    </div>

                    {/* Stake Selector: Alternatives uses stylized HTML Select with <Text> Label */}
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

                    {/* Duration Selector: Alternatives uses stylized HTML Select with <Text> Label */}
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

                    {/* Number of Bulk Trades: Alternatives uses stylized HTML Select with <Text> Label */}
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
                    {/* Alternative uses stylized HTML Select for the entire dropdown mechanism */}
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

                {/* Right Column: Sequence Analysis (Percentages and E/O Grid) */}
                <div className='bulk-trader__analysis-panel'>
                    <DigitStatistics />
                </div>
            </div>
            
            {/* The complex bottom control section, including the unique red delta button */}
            <div className='bulk-trader__bottom-controls'>
                <div className='bulk-trader__bottom-left'>
                    <div className='bulk-trader__controls-icon'>
                        {/* Placeholder for the grey cart icon */}
                        <div className='bulk-trader__icon-cart'>🛒</div>
                        <Text size='sm'>{localize('Bulk AI Entry')}</Text>
                    </div>
                </div>
                
                {/* The unique red delta 'Bulk Odd' button from image_10.png */}
                <div className='bulk-trader__bottom-right'>
                    <Button
                        color='primary'
                        variant='contained'
                        className='bulk-trader__delta-button'
                        // Matches target color/look
                        style={{ backgroundColor: 'var(--brand-danger)', color: 'var(--brand-white)' }}
                    >
                        {/* Placeholder for the delta triangle icon */}
                        <span>▲</span> {localize('Bulk Odd')}
                    </Button>
                </div>
            </div>
            
            {/* The primary platform run/stop action button, integrated into the bottom bar */}
            <div className='bot-dashboard__controls'>
                <div className='bot-dashboard__controls-left'>
                    <Button
                        color='primary'
                        size='md'
                        variant='contained'
                        onClick={is_running ? onStop : onRun}
                        // Teal green button seen in image_10.png
                        style={{ backgroundColor: 'var(--brand-success)', color: 'var(--brand-white)' }}
                    >
                        {is_running ? localize('Stop') : localize('Run')}
                    </Button>
                    <Text size='sm'>{localize('Bot is not running')}</Text>
                    <Text size='sm'>0</Text>
                    <Text size='sm'>0</Text>
                </div>
                <div className='bot-dashboard__controls-right'>
                    <Text size='sm'>{localize('Bot is not running')}</Text>
                    {/* Placeholder for Profile/Denara ID seen in bottom right */}
                    <div className='bulk-trader__profile-placeholder'>D Denara ID</div>
                </div>
            </div>
        </div>
    );
});
