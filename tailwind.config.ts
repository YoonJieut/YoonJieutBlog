import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "collection-1-color": "var(--collection-1-color)",
      },
      backgroundColor: {
        "zinc-900": "#1C1C1C", // Zinc 900 색상
        "stone-300": "#CDCDCD", // Stone 300 색상
        "zinc-300": "#D9D9D9", // Zinc 300 색상
      },
      textColor: {
        "zinc-900": "#1C1C1C", // Zinc 900 색상
        "stone-300": "#CDCDCD", // Stone 300 색상
      },
      borderColor: {
        "zinc-900": "#1C1C1C", // Zinc 900 색상
      },
    },
  },
  plugins: [],
};
export default config;
