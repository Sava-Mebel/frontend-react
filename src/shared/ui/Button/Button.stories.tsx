import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme, ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ButtonTheme),
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Clear: Story = {
  args: {
    children: 'Очистить',
    theme: ButtonTheme.CLEAR,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Отключена',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    square: true,
  },
};

export const SizeM: Story = {
  args: {
    children: 'Размер M',
    size: ButtonSize.M,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Размер L',
    size: ButtonSize.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Размер XL',
    size: ButtonSize.XL,
  },
};
