const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, [
      './index.{js,jsx,ts,tsx}',
      './src/App.{js,jsx,ts,tsx}',
      './App.{js,jsx,ts,tsx}',
      './src/components/*.{js,jsx,ts,tsx}',
      './src/modules/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
    ]),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        inactive: '#C4C4C4',
        tint: 'rgb(216, 216, 216)',
        'rapio-green': '#00C17C',
        'rapio-pink': '#dd016b',
        warning: '#FFC046',
        alert: '#FF7575',
        success: '#06D98D',
        info: '#2196f3',
        space: '#F9F9F9',
      },
    },
  },
  plugins: [],
};
