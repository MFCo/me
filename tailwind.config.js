/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#D4FF00',
        'deep-black': '#050505',
        'surface-dark': '#121212',
        'surface-light': '#FFFFFF',
        'neon-border-light': '#000000', // Black border for light mode instead of neon
        'accent-light': '#0891b2', // Cyan-600 for light mode accents
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
