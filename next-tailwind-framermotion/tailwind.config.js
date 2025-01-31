module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
