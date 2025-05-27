import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonThemeTypes } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ButtonThemeTypes),
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    theme: ButtonThemeTypes.OUTLINE,
  },
};

export const Clear: Story = {
  args: {
    children: 'Очистить',
    theme: ButtonThemeTypes.CLEAR,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Отключена',
    theme: ButtonThemeTypes.OUTLINE,
    disabled: true,
  },
};
