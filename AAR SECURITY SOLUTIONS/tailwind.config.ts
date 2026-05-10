import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        navy: "#0A84FF",
        electric: "#0A84FF",
        mist: "#111827"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 28px 90px rgba(0, 0, 0, 0.42)",
        glow: "0 0 0 1px rgba(10, 132, 255, 0.24), 0 22px 70px rgba(10, 132, 255, 0.28)"
      },
      backgroundImage: {
        "blue-sheen": "linear-gradient(135deg, #051225 0%, #0A2B59 46%, #0A84FF 100%)"
      }
    }
  },
  plugins: []
};

export default config;
