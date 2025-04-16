import type { Meta, StoryObj } from '@storybook/react';

import { Footer, VariantTypes } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: Object.values(VariantTypes),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Dark: Story = {
  args: {
    variant: VariantTypes.DARK,
  },
};

export const Blur: Story = {
  args: {
    variant: VariantTypes.BLUR,
  },
};
