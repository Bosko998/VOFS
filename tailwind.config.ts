import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Primary color
        "default-blue": "#051d40",//"#1C75BC",
        //default: "#2B59FF", //I like this one!
        // Secondary color
        "secondary-blue": "#0B334F",
        "light-blue": "#82C5D6",
        turquoise: "#2594A9",
        alternative: "#F5F8FF",
        "main-orange": "#f79761",
        grey: "#747A88",
      },
      animation:{
        breathing: 'breathing 2s ease-in-out infinite'
      },
      keyframes: {
        breathing:{
          '0%': {transform:'scale(0.9)'},  
          '25%':{transform:'scale(1.25)'},
          '60%': {transform:'scale(0.9)'},
          '100%': {transform:'scale(0.9)'},
        },
      }
    },
  },
  plugins: [],
};
export default config;
