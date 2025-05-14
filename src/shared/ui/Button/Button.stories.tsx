import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ButtonTheme),
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
