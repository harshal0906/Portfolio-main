import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full z-20 top-0 start-0 mb-5k bg-[#0a0e1a] text-white py-4 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold">
                        Harshal.<span className="text-violet-500">dev</span>
                    </span>
                </Link>

                {/* Right Side Icons + Hamburger */}
                <div className="flex items-center md:order-2">
                    <button
                        type="button"
                        className="text-white text-xl mr-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        <i className="ri-sun-line"></i>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <i className="ri-close-line text-2xl"></i>
                        ) : (
                            <i className="ri-menu-line text-2xl"></i>
                        )}
                    </button>
                </div>

                {/* Navbar Links */}
                <div
                    className={`w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"
                        }`}
                >
                    <ul className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 mt-4 md:mt-0 font-medium border md:border-0 border-gray-700 rounded-lg md:rounded-none p-4 md:p-0 bg-[#0a0e1a] md:bg-transparent">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/skills", label: "Skills" },
                            { to: "/achievement", label: "Achievement" },
                            { to: "/projects", label: "Projects" },
                            { to: "/contact", label: "Contact" },
                        ].map(({ to, label }) => (
                            <li key={to} className="w-full md:w-auto">
                                <Link
                                    to={to}
                                    onClick={() => setMenuOpen(false)} // close on click (mobile)
                                    className={`block py-2 md:py-0 ${pathname === to
                                            ? "text-white border-b-2 border-violet-600"
                                            : "hover:border-b-2 hover:border-violet-600 border-transparent transition-all"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
