module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9" },
        red: { 900: "#8a0202", A700_00: "#ff000000" },
        gray: { 900: "#1e1e1e" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#8a0202,#ff000000)",
      },
      fontFamily: { jost: "Jost" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
