import React from 'react'
import { ContenedorPerfil, MenuDesktop } from '../organisms';

const NavbarMobil = () => {

    function openNavbar() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
        
    };

    function onClose() {
         const menu = document.querySelector(".mobile-menu");
        menu.classList.add("hidden");
    }

    return (
        <nav className="bg-white shadow-lg ">
            <div className="px-4 ">
                <div className="flex justify-between ">

                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={openNavbar} >
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 " x-show="!showMenu" fill="none"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-1 justify-between ">
                        <ContenedorPerfil />

                    </div>
                </div>
            </div>
            <div className="hidden relative mobile-menu text-[1rem] z-50 transition-all duration-300" onMouseLeave={onClose}>
                <div className='absolute  bg-white '>
                    <MenuDesktop />
                </div>

            </div>

        </nav>
    )
}

export default NavbarMobil