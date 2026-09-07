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
        ground: '#6C9BB8',
        ink: '#2B1D14',
        accent: {
          ink: '#4C2410',
          fill: '#C36522',
        },
      },
      fontFamily: {
        display: ['var(--font-ballet)', 'cursive'],
        body: ['var(--font-cardo)', 'serif'],
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
