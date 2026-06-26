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
          info: {
            DEFAULT: "#60A5FA",
            dim: "#1E2A3D",
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "soft-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "node-pulse": "node-pulse 2.4s ease-in-out infinite",
        "flow-dash": "flow-dash 1.2s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 1.5s infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "soft-bounce": "soft-bounce 1.8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
