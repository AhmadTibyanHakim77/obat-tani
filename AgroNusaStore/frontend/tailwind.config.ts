import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#123c2a",
        leaf: "#2f7d4f",
        olive: "#778b3f",
        cream: "#f7f1df",
        earth: "#7a5635",
        gold: "#c8a348"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(18,60,42,0.18)",
        soft: "0 12px 40px rgba(18,60,42,0.10)"
      },
      borderRadius: {
        panel: "28px"
      }
    }
  },
  plugins: []
};

export default config;
