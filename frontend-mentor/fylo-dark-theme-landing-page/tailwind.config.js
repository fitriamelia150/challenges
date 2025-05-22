/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue-email': 'hsl(217, 28%, 15%)',
        'primary-dark-blue-main-background': 'hsl(218, 28%, 13%)',
        'primary-dark-blue-footer-background': 'hsl(216, 53%, 9%)',
        'primary-dark-blue-testimonials-background': 'hsl(219, 30%, 18%)',
        'accent-cyan': 'hsl(176, 68%, 64%)',
        'accent-blue': 'hsl(198, 60%, 50%)',
        'accent-light-red': 'hsl(0, 100%, 63%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

