/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  plugins: [require("flowbite/plugin")],
  content: [
    // ...
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    fontFamily: {
      regular: ["Mulish-Regular"],
      medium: ["Mulish-medium"],
      bold: ["Mulish-bold"],
    },
    extend: {},
  },
  plugins: [],
};
