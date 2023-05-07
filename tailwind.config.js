/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['"SF-Pro Display"', '"-apple-system"', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', '"sans-serif"'],
        strong: ['var(--font-gt-walsheim)', '"-apple-system"', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', '"sans-serif"'],
        raleway: ['var(--font-raleway)', '"GT Walsheim Bold"', '"-apple-system"', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', '"sans-serif"'],
        montserrat: ['var(--font-montserrat)'],
        nunito: ['var(--font-nunito)'],
      },
      fontSize: {
        xs: "1.3rem",
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.8rem",
        xl: ["2.2rem", "1.3"],
        "2xl": "2.4rem",
        "3xl": "2.6rem",
        "4xl": "3.2rem",
        "5xl": "4rem",
        "6xl": ["4.4rem", "1.1"],
        "7xl": ["4.8rem", "1.1"],
        "8xl": ["8rem", "1.1"],
      },
      colors: {
        background: "rgb(249,250,251)",
        tisain: "#2C73A5"
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
        "navigation-height": "var(--navigation-height)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #000a12 0%, #000a12 100%)",
        "whatsapp": "linear-gradient(180deg, #25D366 0%, #4fce5d 100%)",
      },
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
