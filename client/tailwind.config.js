import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#0A192f",
        secondary: "#f97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      sm: { max: "1000px" },
      // => @media (max-width: 1000px) { ... }
    },
  },
  plugins: [flowbite.plugin()],
};
