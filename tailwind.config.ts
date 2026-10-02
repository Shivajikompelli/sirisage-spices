import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F7F2E7",
        "parchment-subtle": "#FCFAF7",
        "parchment-border": "#EAE3D6",
        cream: "#F0E9D8",
        forest: "#244227",
        leaf: "#41AB5D",
        evergreen: "#238B45",
        olive: "#696F41",
        terracotta: "#B15B38",
        saffron: "#C6913E",
        ink: "#1F231B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      borderRadius: {
        // "Soft borders, low-radius cards" per the design deck — avoid large radii
        card: "6px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.95)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Slow cinematic zoom used on hero slides (Ken Burns effect)
        kenburns: {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.14) translate3d(-1.5%, 1.5%, 0)" },
        },
        // One slide of the hero crossfade loop — each slide holds ~5s then fades
        "hero-crossfade": {
          "0%": { opacity: "0" },
          "4%": { opacity: "1" },
          "24%": { opacity: "1" },
          "28%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "70%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // Draws the saffron underline beneath hero key words
        "draw-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        kenburns: "kenburns 16s ease-in-out infinite alternate",
        "hero-crossfade": "hero-crossfade 20s linear infinite",
        "slide-up": "slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        pop: "pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "draw-line": "draw-line 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
      },
    },
  },
  plugins: [],
};

export default config;
