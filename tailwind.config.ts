/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        navy: "#001e3a",
        palePeach: "#fff9d9",
        lightGold: "#f4d24c",
        mediumGold: "#d6ac34",
        darkGold: "#c7a84e",
        brown: "#74725E",
        shinyBlack: "#151A1C",
        cameo: "#94a585",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        playwrite: ['Playwrite IS', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
