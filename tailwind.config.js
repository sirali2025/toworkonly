/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#0A1F44',
        'electric-cyan': '#00FFFF',
        'magenta': '#FF00FB',
      },
    },
  },
  plugins: [],
};
