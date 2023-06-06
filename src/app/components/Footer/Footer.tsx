"use client";
import HorizontalLogo from "../HorizontalLogo";
import NavLinks from "../Navbar/NavLinks";

// This is a client component 👈🏽


const Footer = () => {

    return (
        <footer className="bg-primary rounded shadow">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <h1 className="text-xl text-white sm:text-center">
                    PRESTARS
                </h1>
                <span className="text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Bit-s Studios</a>. All Rights Reserved.
                </span>
            </div>
        </footer >
    );
};

export default Footer;