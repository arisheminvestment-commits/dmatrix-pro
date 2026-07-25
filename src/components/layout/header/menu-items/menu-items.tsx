import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

export const MenuItems = observer(() => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <NavLink 
                to='/' 
                className={({ isActive }) => `app-header__menu-item ${isActive ? 'app-header__menu-item--active' : ''}`}
            >
                <span>Dashboard</span>
            </NavLink>

            <NavLink 
                to='/bot-builder' 
                className={({ isActive }) => `app-header__menu-item ${isActive ? 'app-header__menu-item--active' : ''}`}
            >
                <span>Bot Builder</span>
            </NavLink>

            <NavLink 
                to='/charts' 
                className={({ isActive }) => `app-header__menu-item ${isActive ? 'app-header__menu-item--active' : ''}`}
            >
                <span>Charts</span>
            </NavLink>

            <NavLink 
                to='/tutorials' 
                className={({ isActive }) => `app-header__menu-item ${isActive ? 'app-header__menu-item--active' : ''}`}
            >
                <span>Tutorials</span>
            </NavLink>

            {/* --- BULK TRADER TAB --- */}
            <NavLink 
                to='/bulk-trader' 
                className={({ isActive }) => `app-header__menu-item ${isActive ? 'app-header__menu-item--active' : ''}`}
            >
                <span>Bulk Trader</span>
            </NavLink>
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
