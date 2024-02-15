import { BorderBottom } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
};/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#F2F1EB'
        },
        green: {
          50: '#AFC8AD',
          55: '#04e762'
        },
        custo: {
          50: '#42C2FF',
          51: '#4D77FF',
          52: '#FBFD8A'
        }
      },
      backgroundImage: {
        'darkhow': "url('./public/images/pattern_batik-5_1_10_0-0_15_1__ffffff_42c3ff_4d76ff.png')"
      },
    },
  },
  plugins: [
    
  ],
}
// 7286D3
export default config;
// 42C2FF