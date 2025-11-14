
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'}`}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'}`}>Shop</NavLink>
        <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'}`}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'}`}>Contact</NavLink>
    </>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex items-center">
                            <svg className="h-8 w-auto text-brand-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.592 18 15.0487 17.4042 16.1213 16.4142L12 12.2929L7.87868 16.4142C6.70711 15.2426 6 13.6569 6 12C6 8.68629 8.68629 6 12 6Z" />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-brand-dark">First Bake Tortillas</span>
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-brand-light inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-white hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinks />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
