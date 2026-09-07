import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#F5F0EB',
          100: '#D4CFC9',
          200: '#9A9590',
          300: '#6B5F56',
          400: '#4D423A',
          500: '#3B2921',
          600: '#2B1D14',
          700: '#1F150E',
          800: '#140D08',
          900: '#0A0503',
        },
        accent: {
          DEFAULT: '#88C0DD',
          surface: '#2D5876',
        },
        bone: '#F5F0EB',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'serif'],
        body: ['var(--font-work-sans)', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
};

export default config;
