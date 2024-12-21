import React from "react";
import vectorData from "../assets/vectorData"; // Import an array of vector data

const Portfolio = () => {
    return (
        <section className="py-12 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold text-primary dark:text-text-light mb-8 text-center">
                    Portfolio
                </h2>
                <p className="text-lg text-secondary dark:text-accent-text mb-12 text-center">
                    Discover our unique collection of urban vectors. Click on a
                    design to explore more or purchase it.
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vectorData.map((vector) => (
                        <div
                            key={vector.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-secondary transition-all"
                        >
                            {/* Image */}
                            <img
                                src={vector.image}
                                alt={vector.title}
                                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white">
                                        {vector.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 mb-4">
                                        {vector.description}
                                    </p>
                                    <button className="px-4 py-2 bg-coral text-white rounded-lg hover:bg-opacity-90 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
