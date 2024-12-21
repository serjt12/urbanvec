import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo_Urbanvec.svg";

const Header = ({ toggleTheme, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Logo className="w-40 h-40 fill-primary dark:fill-coral" />

                {/* Hamburger Icon */}
                <button
                    className="lg:hidden block text-primary dark:text-coral"
                    onClick={handleMenuToggle}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:flex justify-center lg:items-center lg:space-x-6 absolute lg:static top-32 left-0 w-full bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent p-6 lg:p-0 z-10`}
                >
                    <li className="mb-4 lg:mb-0 flex justify-end lg:hidden"></li>
                    <li className="mb-4 lg:mb-0">
                        <a
                            href="#"
                            className="text-primary dark:text-coral transition-all"
                        >
                            PAISAJE
                        </a>
                    </li>
                    <li className="mb-4 lg:mb-0">
                        <a
                            href="#"
                            className="text-primary dark:text-coral transition-all"
                        >
                            ARQUITECTURA
                        </a>
                    </li>
                    <li className="mb-4 lg:mb-0">
                        <a
                            href="#"
                            className="text-primary dark:text-coral transition-all"
                        >
                            URBANISMO
                        </a>
                    </li>
                    <li className="lg:hidden mb-4">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-primary text-white dark:bg-coral transition-all z-10"
                        >
                            {currentTheme === "light"
                                ? "🌙 Dark Mode"
                                : "☀️ Light Mode"}
                        </button>
                    </li>
                </ul>

                {/* Theme Toggle Button for larger screens */}
                <button
                    onClick={toggleTheme}
                    className="z-10 hidden lg:block w-40 p-2 rounded-full bg-primary text-white dark:bg-coral transition-all"
                >
                    {currentTheme === "light"
                        ? "🌙 Dark Mode"
                        : "☀️ Light Mode"}
                </button>
            </div>
        </header>
    );
};

export default Header;
