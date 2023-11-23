/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
      custom: '.5em',
    },
    colors: {
      'primary-color': '#b85c47',
      'black': '#1A1A1A',
      'white': '#fff',
      'light-green': '#3B8900',
      'gray': '#808080',
      'error': '#F23030'
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px'
    },
    extend: {},
  },
  plugins: [],
}

// 0F5259