/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          bg: "#101512",
          surface: "#161D19",
          "surface-raised": "#1E2922",
          border: "#2A3830",
          accent: {
            DEFAULT: "#34D399",
            soft: "#6EE7B7",
            dim: "#1C3329",
          },
          text: {
            primary: "#F3F6F4",
            secondary: "#9CA8A1",
            muted: "#5E6E66",
          },
          danger: "#F87171",
          warning: "#FBBF24",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "18px",
      },
      keyframes: {
        "node-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        "node-pulse": "node-pulse 2.4s ease-in-out infinite",
        "flow-dash": "flow-dash 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
