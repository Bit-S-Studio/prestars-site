import React, { FC, FunctionComponent, MouseEventHandler } from 'react';

interface MenuButtonProps {
    isMenuOpen: boolean,
    toggleMenu: MouseEventHandler
}

const MenuButton: FC<MenuButtonProps> = (props): JSX.Element => {
    return (
        <div className='p-4'>
            <button
                className="md:hidden px-2 py-1 text-gray-800 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
                onClick={props.toggleMenu}
            >
                <img src={!props.isMenuOpen ? "./menu.svg" : "./close.svg"} alt="React Logo" />
            </button>
        </div>
    );
};

export default MenuButton;