
export default {
  content: [
    "./App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0e150f",
        "brand-green": "#22C55E",
        "accent-yellow": "#EAB308",
        "on-secondary-fixed": "#002109",
        "on-primary-container": "#003111",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}