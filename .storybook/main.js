const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        }, 
        {
          loader : 'css-loader',
          options:{
            modules: true,
          }
        }, 
        {
          loader: 'sass-loader',
        }
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}

