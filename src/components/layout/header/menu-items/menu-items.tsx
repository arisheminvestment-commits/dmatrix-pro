import React from 'react';
import { observer } from 'mobx-react-lite';

export const MenuItems = observer(() => {
    return <div className='app-header__menu-items' />;
});

export const TradershubLink = observer(() => {
    return null;
});

type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

export default MenuItems as MenuItemsType;
