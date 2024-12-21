import React, { useState, useEffect } from "react";
import useThemeDetector from "./hooks/useThemeDetector";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
    const isSystemDark = useThemeDetector();
    const savedTheme = localStorage.getItem("theme");

    const [theme, setTheme] = useState(
        savedTheme || (isSystemDark ? "dark" : "light")
    );

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-all">
            {/* Header */}
            <Header toggleTheme={toggleTheme} currentTheme={theme} />

            {/* Main Content */}
            <main className="container mx-auto px-6 lg:px-12 my-12">
                <Home />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
