/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        darkBrown: "hsl(25, 47%, 15%)",
        medBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
