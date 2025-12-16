/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                core: {
                    /* -----------------------------------------------------
                       BRAND COLORS
                    ----------------------------------------------------- */
                    brand: "#6A1B9A",
                    brandLight: "#9C4DCC",
                    brandDark: "#4A0A70",

                    accent: "#F37B27",
                    accentDark: "#C45F1D",

                    /* -----------------------------------------------------
                       LIGHT MODE SURFACES
                    ----------------------------------------------------- */
                    lightBg: "#FFFFFF",
                    lightSurface: "#F7F7F7",
                    lightBorder: "#E5E5E5",
                    lightCard: "#FFFFFF",

                    /* -----------------------------------------------------
                       DARK MODE SURFACES
                    ----------------------------------------------------- */
                    darkBg: "#121212",
                    darkSurface: "#39107cff",
                    darkBorder: "#2A2A2A",
                    darkCard: "#181818",

                    /* -----------------------------------------------------
                       TEXT COLORS
                    ----------------------------------------------------- */
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    textMuted: "#A1A1A1",
                    textAccent: "#F37B27"
                },
            },

            /* ---------------------------------------------------------
               RADIUS (for cards, buttons, modals)
            --------------------------------------------------------- */
            borderRadius: {
                card: "16px",
                button: "8px",
                footer: "48px",
            },

            /* ---------------------------------------------------------
               SHADOWS
            --------------------------------------------------------- */
            boxShadow: {
                card: "0 4px 25px rgba(0,0,0,0.08)",
            },
        },
    },

    plugins: [],
};
