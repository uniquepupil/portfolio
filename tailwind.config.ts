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
        base: "#0d0d0d",
        panel: "#1e1e20",
        panelAlt: "#222224",
        line: "#383838",
        text: "#f7f7f8",
        muted: "#bdbdc2",
        accent: "#f6c453"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      borderRadius: {
        panel: "1.75rem"
      },
      backgroundImage: {
        panel: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        glow: "radial-gradient(circle at top left, rgba(246,196,83,0.08), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
