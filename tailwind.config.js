module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1DBF0",
          200: "#3C64B9",
          300: "#14213D",
        },
      },
      boxShadow: {
        primary: "0px 6px 10px 2px rgba(0, 0, 0, 0.25)",
        centered: "0px 0px 15px 2px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        spinreverse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: { spinreverse: "spinreverse 1s linear infinite" },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
