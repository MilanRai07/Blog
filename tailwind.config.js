/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'customSize': '0.7rem',
      },
      lineHeight: {
        'customLineHeight': '0.7rem'
      },
      backgroundImage: {
        'myImg': "url('/images.jpg')"
      },
      backgroundColor: {
        customGreen: {
          100: '#0D8F4F',
          200: '#0d7340',
          300: '#1ab188'

        },
        'active': '#107869',
        'textBg': 'rgba(0, 0, 0, 0.7)',
        'sliderBg': '#a3dbcc',
        'footballBg': '#1a7489',
        'basketBallBg': '#c85bab',
        'ufcBg': 'rgb(200, 77, 77)',
        'darkTransparent': 'rgb(19,35,47,0.9)'
      },
      animation: {
        rotateSlow: 'rotateSlow 2s linear infinite',
      },
      keyframes: {
        rotateSlow: {
          'to': {
            transform: 'rotate(360deg)'
          }
        }
      },
      height: {
        'homeImg': '432px !important',
        'topImg': '527px',
      },
      minHeight: {
        'formHeight': '470px',
        'customHeight': '21rem'
      },
      width: {
        'fc': '55rem',
        'fcDetail': '40rem',
        'formMW': '400px'
      },
      maxWidth: {
        'fc': '55rem',
        'fcDetail': '40rem'
      },
      boxShadow: {
        'customShadow': '5px 5px 10px 5px #ccb3b3'
      },
      scale: {
        'customScale': '1.01'
      }
    },
    screens: {
      '2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
      'xl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
      'lg': { 'max': '1045px' }, // => @media (max-width: 1045px) { ... }
      'mlg': { 'max': '855px' },
      'md': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
      'm-d': { 'max': '731px' },
      'sm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
      'sm-d':{'max':'500px'},
      'xs': { 'max': '435px' }
    }
  },
  plugins: [],
}

