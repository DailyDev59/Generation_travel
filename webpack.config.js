const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    pakistan: './src/js/pakistan.js',
    calendar: './src/js/calendar.js',
    blog: './src/js/blog.js',
    // article: './src/js/article.js',
    // contacts: './src/js/contacts.js',
    // cruises: './src/js/cruises.js'
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
