import { observer } from 'mobx-react-lite';

export const MenuItems = observer(() => {
    return (
        <div className='app-header__menu-items' style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href='/' className='app-header__menu-item'>
                <span>Dashboard</span>
            </a>

            <a href='/bot-builder' className='app-header__menu-item'>
                <span>Bot Builder</span>
            </a>

            <a href='/charts' className='app-header__menu-item'>
                <span>Charts</span>
            </a>

            <a href='/tutorials' className='app-header__menu-item'>
                <span>Tutorials</span>
            </a>

            {/* --- BULK TRADER TAB --- */}
            <a href='/bulk-trader' className='app-header__menu-item'>
                <span>Bulk Trader</span>
            </a>
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
