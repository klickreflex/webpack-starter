module.exports = {
    purge: [
        './dist/**/*.html',
        './src/**/*.html',
        './src/**/*.njk',
      ],
  theme: {
    extend: {
        fontFamily: {
            sans: [
                'iA Writer Duospace',
            ],
            serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
          },
    },
  },
  variants: {},
  plugins: [],
}
