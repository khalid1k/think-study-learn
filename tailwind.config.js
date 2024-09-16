export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-r-custom": "linear-gradient(to right, #191AD3, #EE920A)",
      },
    },
  },
  plugins: [],
};
