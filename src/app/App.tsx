// src/app/App.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
// NEW: Corrected path to import from the dedicated subfolder established above.
import { BulkTrader } from '@/components/bulk-trader/BulkTrader';
import BlocklyLoading from '../components/blockly-loading';
import './app.scss';

export const App = observer(() => {
    const store = useStore();
    const { app } = store;

    // Standard application loading logic.
    // NOTE: This logic determines if a placeholder loader (BlocklyLoading) is shown
    // before the main component renders. If your specific switching mechanism
    // (Tabs, Router, etc.) differs, replace this logic as needed.
    if (app.is_blockly_loading) {
        return <BlocklyLoading />;
    }

    // This returns the main application container.
    return (
        <div className='app-container'>
            {/* The functional Bulk Trader component from image_10.png */}
            <BulkTrader />
        </div>
    );
});

export default App;
