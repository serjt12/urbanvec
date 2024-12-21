import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 border-t border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <p className="text-sm text-secondary dark:text-text-dark">
                    © {new Date().getFullYear()} Urban Vector. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
