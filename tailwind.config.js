/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        "regal-blue": "#243c5a",
        gold: "#FFD700",
        lightBlue: "#8a84ba",
      },
      backgroundImage: {
        developerImage: "url('/src/assets/pic.png')",
        custom:
          "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(116,1,122,1) 100%)",
      },
      backgroundColor: {
        primary: "#4a044e",
        inageBg: "#6d1271",
        hero: "#42174a",
      },
      height: {
        800: "900px",
      },
      borderRadius: {
        image: "73% 27% 72% 28% / 37% 55% 45% 63% ",
      },
    },
  },
  plugins: [],
};
