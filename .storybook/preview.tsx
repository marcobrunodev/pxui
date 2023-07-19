import React from 'react'
import type { Preview } from "@storybook/react";
import XGlobalStyles from '../src/XGlobalStyles'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <XGlobalStyles />

      <Story />
    </>
  )
]

export default preview;
