/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",
                "primary-active": "var(--color-primary-active)",
                secondary: "var(--color-secondary)",
                "secondary-hover": "var(--color-secondary-hover)",
                "secondary-active": "var(--color-secondary-active)",
                accent: "var(--color-accent)",
                neutral: "var(--color-neutral)",
                danger: "var(--color-danger)",
                warning: "var(--color-warning)",
                success: "var(--color-success)",
            },
            transitionDelay: { 50: "50ms" },
            fontFamily: {
                "bungee-shade": "'Bungee Shade', cursive",
                "bungee-hairline": "'Bungee Hairline', cursive",
                bungee: "'Bungee', cursive",
                handrawn: "'Delicious Handrawn', cursive",
                // "font-family": 'Open Sans', sans-serif;
                quicksand: "'Quicksand', sans-serif",
                roboto: "'Roboto', sans-serif",
                rubik: "'Rubik', sans-serif",
                tajawal: "'Tajawal', sans-serif",
            },
            zIndex: {
                1: "1",
                2: "2",
            },
            spacing: {
                88: "22rem",
                112: "28rem",
                116: "29rem",
                120: "30rem",
                128: "32rem",
                144: "36rem",
                154: "38rem",
                158: "39rem",
                160: "40rem",
                168: "42rem",
                184: "46rem",
                200: "50rem",
                216: "54rem",
                220: "55rem",
                224: "56rem",
                232: "58rem",
                240: "60rem",
                248: "62rem",
                256: "64rem",
                264: "66rem",
                272: "68rem",
                280: "70rem",
            },
            borderRadius: {
                primary: "var(--border-radius-primary)",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
                beat: {
                    "0%, 100%": { scale: "98%" },
                    "50%": { scale: "102%" },
                },
                growAndFade: {
                    "0%": {
                        opacity: ".5",
                        transform: "scale(0)",
                    },
                    "50%": {
                        opacity: ".25",
                        transform: "scale(0.5)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale(1)",
                    },
                },
                float: {
                    "0%": {
                        top: "0%",
                        left: "0%",
                    },
                    "25%": {
                        top: "12.5%",
                        left: "-6.25%",
                    },
                    "50%": {
                        top: "-12.5%",
                        left: "6.25%",
                    },
                    "75%": {
                        top: "6.25%",
                        left: "12.5%",
                    },
                    "100%": {
                        top: "-6.25%",
                        left: "-12.5%",
                    },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                beat: "beat 1s ease-in-out infinite",
                growAndFade: "growAndFade 3s infinite ease-out;",
                float: "float 3s ease-in-out infinite",
            },
            contrast: { 25: ".25" },
            aspectRatio: { "4/3": "4 / 3", "3/4": "3 / 4", "1/2": "1 / 2" },
            boxShadow: {
                card: "10px 10px 0px 0px rgba(0,0,0,0.75)",
            },
        },
    },
    plugins: [
        ({ addUtilities, theme, variants }) => {
            const textTitle = {
                ".text-title": {
                    fontSize: theme("fontSize.4xl"),
                    letterSpacing: theme("letterSpacing.wide"),
                    "@screen sm": {
                        fontSize: theme("fontSize.5xl"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.6xl"),
                        letterSpacing: theme("tracking.wider"),
                    },
                },
            };

            const textH1 = {
                ".text-h1": {
                    fontSize: theme("fontSize.3xl"),
                    "@screen sm": {
                        fontSize: theme("fontSize.4xl"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.5xl"),
                    },
                },
            };

            const textH2 = {
                ".text-h2": {
                    fontSize: theme("fontSize.2xl"),
                    "@screen sm": {
                        fontSize: theme("fontSize.3xl"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.4xl"),
                    },
                },
            };

            const textH3 = {
                ".text-h3": {
                    fontSize: theme("fontSize.xl"),
                    "@screen sm": {
                        fontSize: theme("fontSize.2xl"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.3xl"),
                    },
                },
            };

            const textH4 = {
                ".text-h4": {
                    fontSize: theme("fontSize.lg"),
                    "@screen sm": {
                        fontSize: theme("fontSize.xl"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.2xl"),
                    },
                },
            };

            const textH5 = {
                ".text-h5": {
                    fontSize: theme("fontSize.base"),
                    "@screen sm": {
                        fontSize: theme("fontSize.lg"),
                    },
                    "@screen xl": {
                        fontSize: theme("fontSize.xl"),
                    },
                },
            };

            const textNormal = {
                ".text-normal": {
                    fontSize: theme("fontSize.base"),
                    "@screen xl": {
                        fontSize: theme("fontSize.lg"),
                    },
                },
            };

            addUtilities(
                [textTitle, textH1, textH2, textH3, textH4, textH5, textNormal],
                variants("text")
            );
        },
    ],
};
