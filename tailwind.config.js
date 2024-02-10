/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'protest': ["Protest Revolution"],
      'protest-g':["Protest Guerrilla"],
      'protest-r':["Protest Riot"]
    }
  },
  plugins: [],
}

