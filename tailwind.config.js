/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryBg: "rgb(49,51,56)",
      primaryHover: "rgb(46,48,53)",
      secondaryBg: "rgb(43,45,49)",
      secondaryHover: "rgb(64,66,73)",
      dark: "rgb(30,31,34)",
      black: "rgb(17,18,20)",
      primaryText: "rgb(242,243,234)",
      secondaryText: "rgb(120,120,130)",
      darkText: "rgb(43,45,49)",
      secondaryIcon: "rgb(126,130,135)",
      primaryIcon: "rgb(35,165,89)",
    },
    extend: {},
  },
  plugins: [],
};
