module.exports = {
  core: {
    "builder": "webpack5"
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // addons: [
  //   // '@storybook/addon-links',
  //   // '@storybook/addon-essentials',
  //   // {
  //   //   name: '@storybook/addon-postcss',
  //   //   options: {
  //   //     postcssLoaderOptions: {
  //   //       implementation: require('postcss')
  //   //     }
  //   //   }
  //   // }
  // ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  // See issue
  // https://github.com/storybookjs/addon-postcss/issues/23#issuecomment-884810214
  webpackFinal(webpackConfig) {
    webpackConfig.module.rules.push({
      test: /\.postcss$/,
      sideEffects: true,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("postcss-loader")
      ]
    })
    return webpackConfig
  }
}