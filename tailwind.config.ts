import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E8890C",
          "orange-dark": "#C96F05",
          "orange-light": "#F2A93E",
          cream: "#FFF7E6",
          dark: "#2B1D0E",
        },
        card: {
          yellow: "#FDF3D7",
          blue: "#E3F1FB",
          pink: "#FBE7ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FCE7A6 0%, #F6B94A 55%, #EE9A3C 100%)",
        "footer-gradient": "linear-gradient(90deg, #F2A93E 0%, #E8890C 100%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
