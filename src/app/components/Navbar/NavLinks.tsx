import Link from "next/link";
import React from "react";

const NavLinks = () => {
    const links = [
        { name: 'Para equipes', href: '/teams' },
        { name: 'Para atletas', href: '/athletes' },
        { name: 'Sobre nós', href: '/about' },
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