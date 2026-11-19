import type { Config } from "tailwindcss";

// Brand tokens, defined once. Coral is for fills and the logo dot only:
// small text is ink on coral, or coral on midnight. Never coral text on ivory.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: { DEFAULT: "#101B33", soft: "#1A2744" },
        coral: "#F0674F",
        mist: "#E6E9F0",
        ivory: { DEFAULT: "#F7F3EC", card: "#FCFAF6" },
        ink: "#0B1324",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "6px", control: "4px" },
      letterSpacing: {
        label: "0.22em",
        wordmark: "0.42em",
        display: "-0.02em",
      },
    },
  },
  plugins: [],
} satisfies Config;
