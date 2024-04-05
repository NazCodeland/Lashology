import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "red",
        "secondary": "",
        "tertiary": "",
      }
    }
  },
  plugins: [
    plugin(({ addUtilities, theme, }) => {
      const libraryMainThemeColors = ['primary', 'secondary', 'tertiary']
      const libraryStateThemeColors = ['success', 'warning', 'error', 'fail']

      const neonUtilities = {}
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof (colors[color]) === 'object') {
          const color1 = colors[color][500];
          const color2 = colors[color][700];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          }
        }
      }
      console.log(neonUtilities)
      addUtilities(neonUtilities)
    })
  ]
};