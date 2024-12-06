/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FEFBEF',
          200: '#F9D342',
        },
        secondary: { 100: "#80706b", 200: '#3D251E' },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
