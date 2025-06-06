import type { Meta, StoryObj } from '@storybook/react';

import { BadgeTypes } from 'shared/ui/Badge/Badge';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'feature/CatalogGroup/ui/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {},
};

export const BadgeTop: Story = {
  args: {
    badge: BadgeTypes.TOP_PICK,
  },
};

export const BadgeClient: Story = {
  args: {
    badge: BadgeTypes.CLIENT_PICK,
  },
};
