/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["'Noto Sans Mono'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: "#7148FC",
        darkest: "#161f2c", //#000212 #0C121C
        dark: "#1E293B",
        gray: "#3f5374",
        lightgray: "#f3f5f8",
        mid: "#B8BFC6",
        regular: "#8892b0",
        light: "#D6DEE7",
        lightest: "#f5f8fc", //"#FFFFFF",

        github: "#161b22",
        linkedin: "#0a66c2",
        gmail: "#dd4b39",
      },
      fontSize: {
        xs: ["13px", "1.7rem"],
        sm: ["16px", "1.8rem"],
        md: ["18px", "2.6rem"],
        lg: ["20px", "2.6rem"],
        xl: ["32px", "3.5rem"],
        xxl: ["50px", "5.7rem"], //"6rem", "6.8rem"
      },
      spacing: {
        navHeight: "var(--nav-height)",
      },
    },
  },
  plugins: [],
};
