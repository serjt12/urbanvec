module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cloud: {
                    light: "#ADD8E6", // White for light mode
                    dark: "#cccccc", // Light gray for dark mode
                },
                background: {
                    light: "#EDEDED",
                    dark: "#2E4A3E",
                },
                primary: "#5E8257", // Moss Green
                secondary: "#ADB18C", // Light Sage
                accent: {
                    dark: "#3D5D41", // Deep Green
                    text: "#364E41", // Dark Teal
                },
                coral: "#E67354", // Coral Red (CTA Buttons)
            },
        },
    },
    darkMode: "class", // Enable dark mode via a class

    plugins: [],
};
