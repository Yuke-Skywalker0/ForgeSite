/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          bg: "#15171C",
          surface: "#1D2027",
          "surface-raised": "#262A33",
          border: "#2E323C",
          ember: {
            DEFAULT: "#FF6A39",
            soft: "#FF8A5F",
            dim: "#3D2A22",
          },
          text: {
            primary: "#EDEEF0",
            secondary: "#8B919C",
            muted: "#5C6270",
          },
          success: "#3DDC84",
          danger: "#FF5C5C",
          warning: "#FFC857",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      keyframes: {
        "heat-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "heat-sweep": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "heat-pulse": "heat-pulse 2s ease-in-out infinite",
        "heat-sweep": "heat-sweep 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
