/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // cores do app (src/theme/cores.js): bg-fundo, text-tinta, bg-vermelho, border-linha...
      colors: require("./src/theme/cores"),
      fontFamily: {
        // Mapeia a classe utilitária para o nome carregado pelo Expo
        'roboto-regular': ['Roboto_400Regular'],
        'roboto-bold': ['Roboto_700Bold'],
        spicy: ['SpicyRice_400Regular'],
        
      },
    },
  },
  plugins: [],
}