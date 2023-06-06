"use client"; // This is a client component 👈🏽
import HorizontalLogo from '../HorizontalLogo';
import MenuButton from './MenuButton';
import NavLinks from './NavLinks';
import StartButton from './StartButton';

import { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-white px-4'>
            <div className='flex items-center font-medium gap-8 justify-around'>
                <div className='z-50 p-0 md:w-auto w-full flex justify-between'>
                    <HorizontalLogo />
                    <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-exo2'>
                    <NavLinks />
                </ul>
                <div className='md:block hidden'>
                    <StartButton />
                </div>
                {/* Mobile nav*/}
                <ul className={
                    `
                    md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
                    duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}
                    `
                }>
                    <li>
                        <NavLinks />
                    </li>
                    <div className='py-5'>
                        <StartButton />
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;