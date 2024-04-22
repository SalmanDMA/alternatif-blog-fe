import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", 'sans-serif'],
        gelasio: ["'Gelasio'", 'serif'],
      },
    },
  },
  plugins: [
    createThemes({
      // light: {
      //   white: '#FFFFFF',
      //   black: '#242424',
      //   grey: '#F3F3F3',
      //   'dark-grey': '#6B6B6B',
      //   red: '#FF4E4E',
      //   transparent: 'transparent',
      //   twitter: '#1DA1F2',
      //   purple: '#8B46FF',
      // },
      // dark: {
      //   white: '#242424',
      //   black: '#F3F3F3',
      //   grey: '#2A2A2A',
      //   'dark-grey': '#E7E7E7',
      //   red: '#991F1F',
      //   transparent: 'transparent',
      //   twitter: '#0E71A8',
      //   purple: '#582C8E',
      // },
    }),
  ],
};
export default config;
