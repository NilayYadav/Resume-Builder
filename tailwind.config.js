module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0fa6e9",
        black: "#111827",
        white: "white",
        grey: "#6b7280",
        lightGrey: "#cbd5e169",
        btn_hover: "#0091d2",
        green: "#059669",
        orange: "#f59e0b",
      },

      screens: {
        md: "640px",
      },

      zIndex: {
        "-10": "-10",
      },

      width: {
        99: "99%",
        96: "96%",
        600: "600px",
        800: "800px",
      },

      margin: {
        "-16": "-1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
