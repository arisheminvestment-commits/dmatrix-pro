import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const MenuItems = observer(() => {
    return (
        <div className='app-header__menu-items'>
            <NavLink
                to='/dashboard'
                className={({ isActive }) => classNames('app-header__menu-item', { 'app-header__menu-item--active': isActive })}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='/bot-builder'
                className={({ isActive }) => classNames('app-header__menu-item', { 'app-header__menu-item--active': isActive })}
            >
                Bot Builder
            </NavLink>
            <NavLink
                to='/charts'
                className={({ isActive }) => classNames('app-header__menu-item', { 'app-header__menu-item--active': isActive })}
            >
                Charts
            </NavLink>
            <NavLink
                to='/tutorials'
                className={({ isActive }) => classNames('app-header__menu-item', { 'app-header__menu-item--active': isActive })}
            >
                Tutorials
            </NavLink>
            {/* ADDED Bulk Trader */}
            <NavLink
                to='/bulk-trader'
                className={({ isActive }) => classNames('app-header__menu-item', { 'app-header__menu-item--active': isActive })}
            >
                Bulk Trader
            </NavLink>
        </div>
    );
});

export const TradershubLink = observer(() => {
    return null;
});

// Create a namespace definition to satisfy MobX and TypeScript structure
type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

// Properly assign the namespace component
(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

// Explicitly export using the corrected type
export default MenuItems as MenuItemsType;
