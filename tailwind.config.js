/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vk-teal-deep': '#207060',
        'vk-teal-blue': '#207080',
        'vk-mint': '#60B090',
        'vk-aqua': '#E0F0F0',
        'vk-aqua-light': '#F0F8F8',
        'vk-orange': '#F08010',
        'vk-gold': '#F0C020',
        'vk-dark': '#404F50',
        'vk-bg': '#E0F0F0',
        'vk-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(240, 128, 16, 0.4)',
        'glow-teal': '0 0 25px rgba(32, 112, 96, 0.25)',
        'glass-light': '0 8px 32px 0 rgba(32, 112, 96, 0.08)',
      },
    },
  },
  plugins: [],
}
