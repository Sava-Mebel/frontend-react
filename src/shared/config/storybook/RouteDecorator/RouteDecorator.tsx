import { Decorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const RouteDecorator: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);
