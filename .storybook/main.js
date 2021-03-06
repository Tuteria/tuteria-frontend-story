const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    // Assign aliases from snowpack.config.js
    let prepend = "";
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/styled": toPath(`${prepend}node_modules/@emotion/styled`),
      "@emotion/core": toPath(`${prepend}node_modules/@emotion/react`),
      // "emotion-theming": toPath("packages/old-shared-lib/node_modules/emotion-theming")
      // "@emotion/core": toPath("packages/old-shared-lib/node_modules/@emotion/core"),
      // 'emotion-theming': toPath('node_modules/@emotion/react'),
    };

    return config;
  },
};
