import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24201c",
        paper: "#fbf4e8",
        cream: "#fffaf1",
        leaf: "#4f7f58",
        "leaf-dark": "#315c43",
        berry: "#b85b54",
        honey: "#d69a45",
        sky: "#4c7f96"
      },
      fontFamily: {
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-nunito)", "Nunito", "sans-serif"]
      },
      boxShadow: {
        warm: "0 22px 70px rgba(76, 54, 31, 0.16)",
        soft: "0 14px 34px rgba(76, 54, 31, 0.11)"
      }
    }
  },
  plugins: []
};

export default config;
