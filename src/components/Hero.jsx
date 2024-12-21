import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    // Cloud animation: Move the entire set of clouds seamlessly
    const cloudAnimation = {
        animate: {
            x: ["-100%", "100%"], // Move the clouds set from full width to -100% of its width
        },
        transition: {
            duration: 60, // Slower animation
            repeat: Infinity, // Infinite loop
            ease: "linear",
        },
    };

    // Variants for growing buildings and trees
    const bottomUpVariants = {
        hidden: { opacity: 0, scaleY: 0 },
        visible: (index) => ({
            opacity: 1,
            scaleY: 1,
            transition: {
                delay: index * 0.2,
                duration: 1.5,
                ease: "easeOut",
            },
        }),
    };

    // Variants for jump animation
    const jumpVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 0],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
            },
        },
    };

    // Variants for glow animation
    const glowVariants = {
        initial: { opacity: 1, filter: "brightness(1)" },
        animate: {
            filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
            },
        },
    };

    // Data for buildings
    const buildings = [
        { id: 1, height: "200px", color: "bg-primary" },
        { id: 2, height: "300px", color: "bg-secondary" },
        { id: 3, height: "250px", color: "bg-accent-dark" },
        { id: 4, height: "220px", color: "bg-coral" },
    ];

    // Data for trees
    const trees = [
        {
            id: 1,
            trunkHeight: "50px",
            trunkColor: "bg-primary",
            leafColor: "bg-coral",
        },
        {
            id: 2,
            trunkHeight: "60px",
            trunkColor: "bg-secondary",
            leafColor: "bg-primary",
        },
    ];

    return (
        <section className="h-screen flex flex-col justify-center items-center bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Clouds */}
            <div className="absolute inset-0 overflow-hidden">
                {" "}
                {/* Ensures clouds are below the header */}
                {/* Row of Clouds */}
                <motion.div
                    className="absolute w-[200%] flex justify-around items-center top-32" // Adjust vertical position
                    {...cloudAnimation}
                >
                    {/* First set of clouds */}
                    <div className="flex w-[100%] justify-evenly">
                        <div className="w-40 h-20 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-32 h-16 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-28 h-14 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-44 h-22 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                    </div>
                    {/* Duplicated set of clouds */}
                    <div className="flex w-[100%] justify-evenly">
                        <div className="w-40 h-20 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-32 h-16 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-28 h-14 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                        <div className="w-44 h-22 rounded-full bg-cloud-light dark:bg-cloud-dark opacity-80"></div>
                    </div>
                </motion.div>
            </div>

            {/* Buildings */}
            <div className="absolute bottom-0 left-0 w-full flex justify-around items-end z-10">
                {buildings.map((building, index) => (
                    <motion.div
                        key={building.id}
                        className={`${building.color} w-16`}
                        style={{ height: building.height }}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="animate"
                        variants={{
                            ...jumpVariants,
                            ...glowVariants,
                            ...bottomUpVariants,
                        }}
                    />
                ))}
            </div>

            {/* Trees */}
            <div className="absolute bottom-0 left-0 w-full flex justify-around items-end z-10">
                {trees.map((tree, index) => (
                    <motion.div
                        key={tree.id}
                        className="relative flex flex-col items-center"
                        custom={index}
                        variants={bottomUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Tree Trunk */}
                        <motion.div
                            className={`${tree.trunkColor} w-4`}
                            style={{ height: tree.trunkHeight }}
                            variants={{ ...jumpVariants, ...glowVariants }}
                        />
                        {/* Tree Leaves */}
                        <motion.div
                            className={`absolute -top-10 ${tree.leafColor}`}
                            style={{
                                width: 0,
                                height: 0,
                                borderLeft: "20px solid transparent",
                                borderRight: "20px solid transparent",
                                borderBottom: `40px solid`, // Triangle shape
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Streets */}
            <motion.div
                className="absolute bottom-0 w-full h-10 bg-accent-dark z-10"
                variants={glowVariants}
                initial="initial"
                animate="animate"
            />

            {/* Hero Content */}
            <div className="relative z-20 text-center">
                <h1 className="text-5xl font-bold mb-4 text-primary dark:text-background-light">
                    Welcome to Urban Vector
                </h1>
                <p className="text-xl text-secondary dark:text-accent.text">
                    Vibrant designs inspired by modern cities.
                </p>
            </div>
        </section>
    );
};

export default Hero;
