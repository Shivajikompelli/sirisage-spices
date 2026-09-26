import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F7F2E7",
        forest: "#244227",
        olive: "#696F41",
        terracotta: "#B15B38",
        saffron: "#C6913E",
        ink: "#1F231B",
      },
      borderRadius: {
        // "Soft borders, low-radius cards" per the design deck — avoid large radii
        card: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
