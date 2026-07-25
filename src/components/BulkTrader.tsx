import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import './bulk-trader.scss'; // Link the contained style in the same folder

export const BulkTrader = observer(() => {
    return (
        <div className='bulk-trader__wrapper'>
            {/* The Main Bulk Trader Content Area */}
            <div className='bulk-trader__content'>
                
                {/* Left Column: Input Settings (Markets, Strategies, Stakes) */}
                <div className='bulk-trader__inputs-panel'>
                    Inputs and Dropdowns go here...
                </div>

                {/* Right Column: Sequence Analysis (Percentages and E/O Grid) */}
                <div className='bulk-trader__analysis-panel'>
                    Digit Percentages and Analysis Grid go here...
                </div>
            </div>
            
            {/* Optional Bottom Controls (Like the red Delta Button) */}
            <div className='bulk-trader__bottom-controls'>
                Bottom Buttons go here...
            </div>
        </div>
    );
});
