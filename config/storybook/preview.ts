import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
  decorators: [StyleDecorator, RouteDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1e1e1e' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    controls: { expanded: true },
    docs: {
      inlineStories: true,
      theme: themes.dark,
    },
  },
};

export default preview;
