import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Text } from '@deriv-com/quill-ui';
import { localize } from '@deriv-com/translations';
import { useStore } from '@/hooks/useStore';
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
    // Store access (optional, if we use MobX state management later)
    // const store = useStore();
    
    // UI State management for inputs, mimicking image_10.png values
    const [market_value, setMarketValue] = useState('Vol 10 (1s)');
    const [strategy_value, setStrategyValue] = useState('Even');
    const [stake_value, setStakeValue] = useState('0.5');
    const [duration_value, setDurationValue] = useState('1');
    const [bulk_trades_value, setBulkTradesValue] = useState('10');

    const [is_running, setIsRunning] = useState(false);

    const onRun = () => {
        // Placeholder for the Bulk Trader start logic
        setIsRunning(true);
        console.log('Starting bulk trades...');
    };

    const onStop = () => {
        // Placeholder for the Bulk Trader stop logic
        setIsRunning(false);
        console.log('Stopping bulk trades...');
    };

    return (
        <div className='bulk-trader__wrapper'>
            {/* The Main Content Layout Area */}
            <div className='bulk-trader__content'>
                
                {/* Left Column: All Input Settings (Markets, Strategies, Stakes) */}
                <div className='bulk-trader__inputs-panel'>
                    
                    {/* Market Selector */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Market')}</Text>
                        <Dropdown
                            variant='fill'
                            label={localize('Market')}
                            value={market_value}
                            onChange={(e) => setMarketValue(e.value)}
                            // In real integration, we'd use active_symbols here
                            options={[{ label: 'Vol 10 (1s)', value: 'Vol 10 (1s)' }]}
                        />
                    </div>

                    {/* Stake Selector */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Stake (USD)')}</Text>
                        <Dropdown
                            variant='fill'
                            label={localize('Stake (USD)')}
                            value={stake_value}
                            onChange={(e) => setStakeValue(e.value)}
                            options={[{ label: '0.5', value: '0.5' }, { label: '1.0', value: '1.0' }]}
                        />
                    </div>

                    {/* Duration Selector */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('Duration (ticks)')}</Text>
                        <Dropdown
                            variant='fill'
                            label={localize('Duration (ticks)')}
                            value={duration_value}
                            onChange={(e) => setDurationValue(e.value)}
                            options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
                        />
                    </div>

                    {/* Number of Bulk Trades */}
                    <div className='bulk-trader__input-group'>
                        <Text size='sm'>{localize('No. of bulk trades')}</Text>
                        <Dropdown
                            variant='fill'
                            label={localize('No. of bulk trades')}
                            value={bulk_trades_value}
                            onChange={(e) => setBulkTradesValue(e.value)}
                            options={[{ label: '10', value: '10' }, { label: '20', value: '20' }]}
                        />
                    </div>

                    {/* Strategy Selector (Critical complex dropdown from image_10.png) */}
                    <div className='bulk-trader__input-group bulk-trader__strategy-group'>
                        <Text size='sm'>{localize('Strategy')}</Text>
                        <Dropdown
                            variant='fill'
                            label={localize('Strategy')}
                            value={strategy_value}
                            onChange={(e) => setStrategyValue(e.value)}
                            options={strategy_options}
                            // Important style hook to make this dropdown stand out as seen in the mockup
                            className='bulk-trader__strategy-dropdown'
                        />
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
                        // This matches the target button color/look
                        style={{ backgroundColor: 'var(--brand-danger)', color: 'var(--brand-white)' }}
                    >
                        {/* Placeholder for the delta triangle icon */}
                        <span>▲</span> {localize('Bulk Odd')}
                    </Button>
                </div>
            </div>
            
            {/* The primary platform run/stop action button, integrated into the generic bottom bar */}
            <div className='bot-dashboard__controls'>
                <div className='bot-dashboard__controls-left'>
                    <Button
                        color='primary'
                        size='md'
                        variant='contained'
                        onClick={is_running ? onStop : onRun}
                        // Teal green button seen in the target design (image_10.png)
                        style={{ backgroundColor: 'var(--brand-success)', color: 'var(--brand-white)' }}
                    >
                        {is_running ? localize('Stop') : localize('Run')}
                    </Button>
                    {/* Status area placeholders (matching bottom bar of image_10.png) */}
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
