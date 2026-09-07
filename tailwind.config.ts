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
        ground: '#B8D1E0',
        ink: '#2B1D14',
        accent: {
          ink: '#1B4D4D',
          fill: '#2D7373',
        },
      },
      fontFamily: {
        ballet: ['var(--font-ballet)', 'cursive'],
        display: ['var(--font-bebas)', 'sans-serif'],
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
