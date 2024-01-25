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
      gridTemplateColumns: {
        '23': 'repeat(2, minmax(1fr, 2fr))'
      },
      colors: {
        brown: {
          50: '#F2F1EB'
        },
        green: {
          50: '#AFC8AD',
          55: '#88AB8E'
        },
        custo: {
          50: '#363062',
          51: '#FF6C22',
          52: '#4D4C7D'
        }
      },
    },
  },
  plugins: [
    
  ],
}
// 7286D3
export default config;
