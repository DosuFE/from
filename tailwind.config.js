/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
        "gilroy-heavy": ["Gilroy-Heavy ☞"],
        "gilroy-bold": ["Gilroy-Bold ☞"],
        "gilroy-light": ["Gilroy-Light ☞"],
        "gilroy-medium": ["Gilroy-Medium ☞"],
        "gilroy-regular": ["Gilroy-Regular ☞"],
      },
      backgroundImage: {
        'data-bg': "url('/images/data-bg.svg')",
      },
      animation: {
        marquee: "marquee 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  plugins: [],
}
}