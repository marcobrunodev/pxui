import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/addon-a11y/preview.js',
          '@storybook/addon-actions/preview.js',
          '@storybook/addon-backgrounds/preview.js',
          'babel-plugin-open-source/script.js',
          'chromatic/isChromatic',
          'storybook-dark-mode',
        ],
      },
    });
  },
};
export default config;
