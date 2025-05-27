/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Adjust if your content files are elsewhere
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: using Inter font
        serif: ['Merriweather', 'serif'], // Example
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}