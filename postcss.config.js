module.exports = {
    // Use postcss-scss parser to support inline comments
    parser: 'postcss-scss',

    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer'),
    ]
  }
