import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      white: '#FFF',
      black: '#000',
      red: '#FF3C3C',
      green: '#55E0B5',
      blue1: '#1261FF',
      blue2: '#1161FA',
      blue3: '#1161FB',
      blue4: '#2670FC',
      blue5: '#29C0ED',
      blue6: '#0C81E5',
      blue7: '#0C81E5',
      bg1: '#F5F5F5',
      blue8: '#707070',
      blue9: '#DADADA',
      blue10: '#696969',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
