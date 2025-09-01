export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)", // uses hex code
        text: "var(--text)", // uses hex code
      },
    },
  },
  plugins: [],

  compilerOptions: {
    jsx: "react-jsx",
  },
  include: ["src"],
};
