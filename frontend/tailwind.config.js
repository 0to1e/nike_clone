/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p_bg: "#F3F3F2",
        s_bg: "#FCFAEF",
      },
      fontFamily: {
        hvm: ["hvm", "sans"], // Fallback to sans-serif
      },
      screens: {
        mob: "425px", // small devices
        mid: "675px", // difference for mobile and others
        tb: "768px", // medium devices
        lp: "1145px", // large devices
      },
      width: {
        padded:"var(--padded-width)", // Custom width for mobile
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
