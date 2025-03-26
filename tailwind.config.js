/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,md}'
  ],
  theme: {
    extend: {
      colors: {
        base : {
          "50": '#eaeaea',
          "100": '#d4d4d4',
          "200": '#bbbbbb',
          "300": '#cccccc',
          "400": '#b3b3b3',
          "500": '#999999',
          "600": '#333333',
          "700": '#1a1a1a',
          "800": '#666666',
          "900": '#000000',
        }
      }
    },
  },
  plugins: [],
}

