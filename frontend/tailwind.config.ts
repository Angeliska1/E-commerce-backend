export default {
  // 👇 Where Tailwind should look for classes
  content: [
    "./index.html",           // Vite HTML entry
    "./src/**/*.{js,ts,jsx,tsx}" // All your React components
  ],

  // 👇 Theme customization (extend default Tailwind)
  theme: {
    extend: {},
  },

  // 👇 Any Tailwind plugins (none needed now)
  plugins: [],
};
