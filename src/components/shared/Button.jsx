import React from "react";

const Button = ({ text, onClick, variant = "primary" }) => {
    const baseStyles =
        "px-4 py-2 rounded-lg font-semibold focus:outline-none transition-all";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary: "bg-secondary text-white hover:bg-secondary-dark",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
