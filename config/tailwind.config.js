const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chivo', ...defaultTheme.fontFamily.sans],
        'playfair': ['Playfair Display'],
      },
      colors: {
        based: withOpacity('--color-text-based'),
        'based-hover': withOpacity('--color-text-based-hover'),
        muted: withOpacity('--color-text-muted'),
        primary: withOpacity('--color-primary'),
        'primary-hover': withOpacity('--color-primary-hover'),
        'primary-press': withOpacity('--color-primary-press'),
        'bg-base': withOpacity('--color-bg'),
        'surface': withOpacity('--color-bg-surface'),
        'surface-accent': withOpacity('--color-bg-surface-accent'),
      },
      textColor: {
        based: withOpacity('--color-text-based'),
        muted: withOpacity('--color-text-muted'),
        inverted: withOpacity('--color-text-inverted'),
        // primary: withOpacity('--color-text-primary'),
      },
      backgroundImage: {
        'transparent-overlay': "background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);",
      },
      backgroundColor: {
        base: withOpacity('--color-bg'),
        primary: withOpacity('--color-primary'),
      },
      borderColor: {
        base: withOpacity('--color-bg'),
      },
      gradientColorStops: {
        base: {
          hue: withOpacity('--color-bg'),
          surface: withOpacity('--color-bg-surface'),
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
