/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-cyan-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
  ],
  plugins: [],
};