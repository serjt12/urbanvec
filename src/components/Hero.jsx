import React from "react";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-background-light dark:bg-background-dark">
            <h1 className="text-5xl font-bold mb-4 text-primary dark:text-text-light">
                Welcome to Urban Vector
            </h1>
            <p className="text-xl text-secondary dark:text-text-dark">
                Vibrant designs inspired by modern cities.
            </p>
        </section>
    );
};

export default Hero;
