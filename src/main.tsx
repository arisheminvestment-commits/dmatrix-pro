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
        </div>
    );
});

export const TradershubLink = observer(() => {
    return null;
});

// Define type including the component namespace
type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

// Assign the static TradershubLink property
(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

// Default export using the specific type
export default MenuItems as MenuItemsType;
