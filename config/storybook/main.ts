import type { StorybookConfig } from '@storybook/react-webpack5';
import { configWebpackStorybook } from './webpack.config';

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: configWebpackStorybook,
};

export default config;
