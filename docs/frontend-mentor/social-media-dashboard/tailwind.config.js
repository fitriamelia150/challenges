/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'fb': 'hsl(208, 92%, 53%)',
        'tw': 'hsl(203, 89%, 53%)',
        'ig-from': 'hsl(37, 97%, 70%)',
        'ig-to': 'hsl(329, 70%, 58%)',
        'yt': 'hsl(348, 97%, 39%)',
        'toggle': 'hsl(230, 22%, 74%)',
        'white': 'hsl(0, 0%, 100%)',
        'Very-Pale-Blue': 'hsl(225, 100%, 98%)',
        'Light-Grayish-Blue': 'hsl(227, 47%, 96%)',
        'Dark-Grayish-Blue': 'hsl(228, 12%, 44%)',
        'Very-Dark-Blue': 'hsl(230, 17%, 14%)',
        'Bg-Very-Dark-Blue': 'hsl(230, 17%, 14%)',
        'TopBgPattern-Very-Dark-Blue': 'hsl(232, 19%, 15%)',
        'CardBg-Dark-Desaturated-Blue': 'hsl(228, 28%, 20%)',
        'CardBg-Dark-Desaturated-Blue-hover': 'hsl(228, 28%, 25%)',
        'Text-Desaturated Blue': 'hsl(228, 34%, 66%)',
        'Text-White': 'hsl(0, 0%, 100%)',
        'toggle-grad-from': 'hsl(210, 78%, 56%)',
        'toggle-grad-to': 'hsl(146, 68%, 55%)',
      }
    },
  },
  plugins: [],
}

