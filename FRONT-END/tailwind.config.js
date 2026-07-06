/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Mapeia a classe utilitária para o nome carregado pelo Expo
        'roboto-regular': ['Roboto_400Regular'],
        'roboto-bold': ['Roboto_700Bold'],
      },
    },
  },
  plugins: [],
}