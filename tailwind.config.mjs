export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        poe: {
          bg:           '#0a0a0a',
          panel:        '#141414',
          'panel-hover':'#1a1a1a',
          border:       '#2a2a3a',
          gold:         '#c89a2a',
          'gold-light': '#e5b94a',
          'gold-dark':  '#9a7420',
          text:         '#d4c5a0',
          muted:        '#7a7060',
          gem:          '#1a3a5c',
          danger:       '#8b1a1a',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      typography: (theme) => ({
        poe: {
          css: {
            '--tw-prose-body':        theme('colors.poe.text'),
            '--tw-prose-headings':    theme('colors.poe.gold'),
            '--tw-prose-links':       theme('colors.poe.gold-light'),
            '--tw-prose-bold':        theme('colors.poe.text'),
            '--tw-prose-counters':    theme('colors.poe.muted'),
            '--tw-prose-bullets':     theme('colors.poe.gold-dark'),
            '--tw-prose-hr':          theme('colors.poe.border'),
            '--tw-prose-quotes':      theme('colors.poe.text'),
            '--tw-prose-quote-borders': theme('colors.poe.gold-dark'),
            '--tw-prose-captions':    theme('colors.poe.muted'),
            '--tw-prose-code':        theme('colors.poe.gold-light'),
            '--tw-prose-pre-code':    theme('colors.poe.text'),
            '--tw-prose-pre-bg':      theme('colors.poe.panel'),
            '--tw-prose-th-borders':  theme('colors.poe.border'),
            '--tw-prose-td-borders':  theme('colors.poe.border'),
            'h1,h2,h3,h4': {
              'font-family': '"Cinzel", serif',
            },
            'table': {
              'border-collapse': 'collapse',
            },
            'th': {
              'background-color': '#1a1a1a',
            },
            'tr:nth-child(even)': {
              'background-color': '#111111',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
