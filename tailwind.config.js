module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        '8/100': '8%',
        '9/100': '9%',
        '10/100': '10%',
        18: '4.5rem'
      },
      translate: {
        '3/2': '150%',
        '0.25': '0.075rem',
      },
      padding: {
        2.75: '0.6875rem',
        3.7: '0.975rem',
        4.25: '1rem',
        4.5: '1.15rem',
        4.625: '1.175rem',
        4.75: '1.2rem',
        5.5: '1.375rem'
      },
      margin: {
        '64': '15.5rem',
        '68': '17rem',
      },
      width: {
        12.5: '3.15rem',
        13: '3.275rem',
        15: '3.75rem',
        62: '15.5rem',
        63: '15.75rem',
        68: '17rem',
        73: '17.75rem',
        73.5: '18rem',
        74: '18.5rem',
        76: '19rem',
        82: '20.5rem',
        84: '21rem',
        88: '22rem',
        98: '26rem',
        100: '28rem',
        '97/100': '97%'
      },
      maxWidth: {
        '2/3': '66.666667%',
      },
      height: {
        10.5: '2.625rem',
        11.5: '2.875rem',
        12.5: '3.15rem',
        13: '3.275rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
      },
      colors: {
        'left-bar-yellow': '#ffd600',
        'left-bar-indigo': '#5e72e4',
        'left-bar-gray': '#939cac',
        'left-bar-red': '#f5365c',
        'left-bar-orange': '#fb6340',
        'left-bar-cyan': '#22d1f0',
        'left-bar-rose': '#f4645f',
        'left-bar-green': '#2dce89',
        primary: {
          DEFAULT: 'rgb(50 50 93)',
          100: 'rgb(82 95 127)',
          200: 'rgb(136 152 170)',
          blue: {
            DEFAULT: 'rgb(94 114 228)',
            active: 'rgb(50 76 221)'
          },
          red: 'rgb(245 54 92)',
          white: 'rgba(0, 0, 0, 0.05)',
        },
        muted: {
          DEFAULT: 'rgb(136 152 170)',
        },
        secondary: {
          DEFAULT: 'rgb(67 133 177)',
        },
        info: {
          DEFAULT: 'rgb(17 205 239)',
          active: 'rgb(13 165 192)'
        },
        warning: {
          DEFAULT: 'rgb(251 99 64)',
          active: 'rgb(250 58 14)'
        },
        success: {
          DEFAULT: 'rgb(45 206 137)',
          active: 'rgb(36 164 109)'
        },
        danger: {
          DEFAULT: 'rgb(245 54 92)',
          active: 'rgb(236 12 56)'
        },
        'btn-default': {
          DEFAULT: 'rgb(23 43 77)',
          active: 'rgb(11 21 38)'
        },
        icon: {
          DEFAULT: 'rgb(246 249 252)'
        },
        webkit: {
          DEFAULT: '-webkit-focus-ring-color'
        }
      },
      fontSize: {
        0.625: ['0.625rem', '1.5'],
        0.8125: ['0.8125rem', '1.5'],
        0.9375: ['0.9375rem', '1.5'],
        0.95: ['0.95rem', '1.5'],
        1.0625: ['1.0625rem', '1.5'],
        1.375: ['1.375rem', '1.5'],
        1.625: ['1.625rem', '1.5'],
        1.6275: ['1.6275rem', '1.5'],
        2.1875: ['2.1875rem', '1.5'],
        2.75: ['2.75rem', '1.5'],
        3.3: ['3.3rem', '1.5'],
        90: ['90%', '1.5'],
        80: ['80%', '1.5'],
        70: ['70%', '1.5'],
        60: ['60%', '1.5'],
        'sm': ['.875rem', '1.5'],
      },
      lineHeight: {
        '1.7': '1.7',
      },
      boxShadow: {},
    },
    translate: {},
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
