import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme, AppLinkVariant } from 'shared/ui/AppLink/models/const/const';

const meta: Meta<typeof AppLink> = {
  title: 'shared/ui/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY, AppLinkTheme.RED],
    },
    variant: {
      control: { type: 'radio' },
      options: [AppLinkVariant.ROUTE, AppLinkVariant.EXTERNAL],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const RouteLink: Story = {
  args: {
    variant: AppLinkVariant.ROUTE,
    to: '/home',
    theme: AppLinkTheme.PRIMARY,
    children: 'Go to Home',
  },
};

export const ExternalLink: Story = {
  args: {
    variant: AppLinkVariant.EXTERNAL,
    href: 'https://github.com',
    theme: AppLinkTheme.SECONDARY,
    children: 'Visit GitHub',
  },
};
