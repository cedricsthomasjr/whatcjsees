/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(1.03)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "drift-slow": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-15px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "drift-alt": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10px, 15px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        drift: "drift 20s ease-in-out infinite",
        "drift-slow": "drift-slow 30s ease-in-out infinite",
        "drift-alt": "drift-alt 25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
