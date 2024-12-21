import React from "react";

const About = () => {
    return (
        <section className="py-12 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold text-primary dark:text-text-light mb-4">
                    About Urban Vector
                </h2>
                <p className="text-lg text-secondary dark:text-text-dark">
                    Urban Vector is a platform dedicated to showcasing vibrant
                    designs inspired by modern cities. Our goal is to merge art
                    and urban aesthetics to create something extraordinary.
                </p>
            </div>
        </section>
    );
};

export default About;
