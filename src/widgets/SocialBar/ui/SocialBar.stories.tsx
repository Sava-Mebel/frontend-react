import type { Meta, StoryObj } from '@storybook/react';

import { SocialBar } from './SocialBar';

const meta: Meta<typeof SocialBar> = {
  title: 'widgets/SocialBar',
  component: SocialBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SocialBar>;

export const Outline: Story = {
  args: {},
};
