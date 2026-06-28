export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        poe: {
          bg:           '#07050f',
          panel:        '#120d28',
          'panel-hover':'#1e1545',
          border:       '#3d2d6a',
          gold:         '#a855f7',
          'gold-light': '#c084fc',
          'gold-dark':  '#7c3aed',
          text:         '#ddd6f3',
          muted:        '#7c6fa0',
          gem:          '#1a0a3c',
          danger:       '#9f1239',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: (theme) => ({
        poe: {
          css: {
            '--tw-prose-body':          theme('colors.poe.text'),
            '--tw-prose-headings':      theme('colors.poe.gold-light'),
            '--tw-prose-links':         theme('colors.poe.gold'),
            '--tw-prose-bold':          theme('colors.poe.text'),
            '--tw-prose-counters':      theme('colors.poe.muted'),
            '--tw-prose-bullets':       theme('colors.poe.gold-dark'),
            '--tw-prose-hr':            theme('colors.poe.border'),
            '--tw-prose-quotes':        theme('colors.poe.text'),
            '--tw-prose-quote-borders': theme('colors.poe.gold-dark'),
            '--tw-prose-captions':      theme('colors.poe.muted'),
            '--tw-prose-code':          theme('colors.poe.gold-light'),
            '--tw-prose-pre-code':      theme('colors.poe.text'),
            '--tw-prose-pre-bg':        '#120d28',
            '--tw-prose-th-borders':    theme('colors.poe.border'),
            '--tw-prose-td-borders':    theme('colors.poe.border'),
            'h1,h2,h3,h4': {
              'font-family': '"Cinzel", serif',
            },
            'table': {
              'border-collapse': 'collapse',
            },
            'th': {
              'background-color': 'rgba(30, 21, 69, 0.8)',
            },
            'tr:nth-child(even)': {
              'background-color': 'rgba(18, 13, 40, 0.5)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
