import type { Meta, StoryObj } from '@storybook/react';

import { Logotype } from './Logotype';

const meta: Meta<typeof Logotype> = {
  title: 'shared/Logotype',
  component: Logotype,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Logotype>;

export const Default: Story = {};
