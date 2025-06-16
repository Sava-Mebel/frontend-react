import { ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

export const productTabs: Tab[] = [
  {
    label: 'Характеристики',
    content: <div>Контент профиля</div>,
  },
  {
    label: 'Доставка и оплата',
    content: <div>Контент профиля</div>,
  },
  {
    label: 'Гарантия и отзыв',
    content: <div>Контент профиля</div>,
  },
];
