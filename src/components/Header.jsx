import React from "react";
import { ReactComponent as Logo } from "../assets/logo_Urbanvec.svg";

const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="py-6 border-b border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Logo className="w-40 h-40 fill-primary dark:fill-coral" />

                <h1 className="text-2xl font-bold text-primary dark:text-text-light">
                    Urban Vector
                </h1>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-coral text-white dark:bg-secondary dark:text-text-light transition-all"
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
