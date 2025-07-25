/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
