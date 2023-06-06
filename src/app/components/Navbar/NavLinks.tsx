import Link from "next/link";
import React from "react";

const NavLinks = () => {
    const links = [
        { name: 'Para equipes', href: '/pages/teams' },
        { name: 'Para atletas', href: '/pages/athletes' },
        { name: 'Sobre nós', href: '/pages/about' },
    ];
    return (
        <>
            {links.map((link) => (


                <div className="px-3 py-7 text-left md:cursor-pointer">
                    <Link href={link.href}>
                        {link.name}
                    </Link>
                </div>
            ))}
        </>
    );
};

export default NavLinks;