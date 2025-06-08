/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./features/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"
    ],
    theme: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
  
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        mainblue: "#1A5DBC",
        maingreen: "#00917C",
        darkgray: "#535353",
        
      },
      fontFamily: {
        sans: ['var(--font-bnazanin)'],
      },
      extend: {
        fontSize: {
          tiny: ["12px", "16px"],
          base: ["14px", "18px"],
          lg: ["16px", "20px"],
          xl: ["18px", "22px"],
          "2xl": ["24px", "28px"],
          "5xl": ["28px", "32px"],
          "6xl": ["32px", "36px"],
          "7xl": ["38px", "42px"],
        },
        borderColor: {
          transparent: "transparent",
        },
        backgroundImage: {
          "custom-gradient":
            "radial-gradient(50% 50% at 50% 50%, #186DAC 0%, #223B72 100%)",
        },
        colors:{
          blue: require('tailwindcss/colors').blue, // Adds default blue colors
        }
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
    important: true,
  };
  