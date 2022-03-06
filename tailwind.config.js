module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Berkeley Mono"'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
