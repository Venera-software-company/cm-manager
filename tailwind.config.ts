import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindscrollbar from "tailwind-scrollbar";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {  
        'xxs': {'max': '639px', "min": "0px"},
        'xxl': {'min': '2000px', 'max': '3000px'},
        '3xl': {'min': '3001px'},
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [daisyui, tailwindscrollbar],
}

export default config;