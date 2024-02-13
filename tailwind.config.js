/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('https://images.unsplash.com/photo-1465877783223-4eba513e27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }
    },
    fontFamily: {
      'protest': ["Protest Revolution"],
      'protest-g':["Protest Guerrilla"],
      'protest-r':["Protest Riot"],
     
    }
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.animate-slide-down': {
          animation: 'slide-down 300ms ease-out forwards',
        },
      };

      const newComponents = {
        '@keyframes slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-3rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
      addComponents(newComponents);
    }

  ],
}

