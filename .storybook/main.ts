module.exports = {
  core: {
    "builder": "webpack5"
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  // See issue
  // https://github.com/storybookjs/addon-postcss/issues/23#issuecomment-884810214
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.postcss$/,
      sideEffects: true,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ],
      // include: path.resolve(__dirname, '../')
    })
    return config
  }
}