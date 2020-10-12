const { environment } = require('@rails/webpacker')

// create condition to load .graphql files on webpacker

environment.loaders.append('graphql', {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader'
});

module.exports = environment
