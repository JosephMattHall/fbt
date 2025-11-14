
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center">
                            <svg className="h-8 w-auto text-brand-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.592 18 15.0487 17.4042 16.1213 16.4142L12 12.2929L7.87868 16.4142C6.70711 15.2426 6 13.6569 6 12C6 8.68629 8.68629 6 12 6Z" />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-brand-dark">First Bake Tortillas</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">Authentic, family-made tortillas since 1998.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Navigation</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/" className="text-base text-gray-500 hover:text-brand-dark">Home</Link></li>
                            <li><Link to="/shop" className="text-base text-gray-500 hover:text-brand-dark">Shop</Link></li>
                            <li><Link to="/about" className="text-base text-gray-500 hover:text-brand-dark">About</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-500 hover:text-brand-dark">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-500">123 Tortilla Ln,<br />Fresno, CA 93722</li>
                            <li className="text-base text-gray-500">contact@firstbake.com</li>
                            <li className="text-base text-gray-500">(559) 555-1234</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} First Bake Tortillas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
