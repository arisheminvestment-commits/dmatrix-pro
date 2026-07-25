import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export const MenuItems = observer(() => {
    return (
        <div className='app-header__menu-items' style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '0 24px' }}>
            <Link to='/' className='app-header__menu-item'>
                <span>Dashboard</span>
            </Link>

            <Link to='/bot-builder' className='app-header__menu-item'>
                <span>Bot Builder</span>
            </Link>

            <Link to='/charts' className='app-header__menu-item'>
                <span>Charts</span>
            </Link>

            <Link to='/tutorials' className='app-header__menu-item'>
                <span>Tutorials</span>
            </Link>

            {/* --- BULK TRADER TAB ADDED NEXT TO TUTORIALS --- */}
            <Link to='/bulk-trader' className='app-header__menu-item'>
                <span>Bulk Trader</span>
            </Link>
        </div>
    );
});

export const TradershubLink = observer(() => {
    return null;
});

// Create a namespace for MenuItems to include TradershubLink
type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

// Assign TradershubLink to MenuItems
(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

export default MenuItems as MenuItemsType;
