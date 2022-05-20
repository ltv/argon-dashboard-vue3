module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'left-bar-yellow': '#ffd600',
        'left-bar-indigo': '#5e72e4',
        'left-bar-gray': '#939cac',
        'left-bar-red': '#f5365c',
        'left-bar-orange': '#fb6340',
        'left-bar-cyan': '#22d1f0',
        'left-bar-rose': '#f4645f',
        primary: {
          DEFAULT: 'rgb(50 50 93)',
          100: 'rgb(82 95 127)',
          200: 'rgb(136 152 170)',
          blue: 'rgb(94 114 228)',
          red: 'rgb(245 54 92)',
        },
        muted: {
          DEFAULT: 'rgb(136 152 170)',
        },
        warnning: {
          DEFAULT: 'rgb(251 99 64)',
        },
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
        80: ['80%', '1.5'],
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
