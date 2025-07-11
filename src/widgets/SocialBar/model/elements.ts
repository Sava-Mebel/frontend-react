import { JSX, SVGProps } from 'react';

import VkIcon from 'shared/assets/social/vk.svg';
import TelegramIcon from 'shared/assets/social/tg.svg';
import InstagramIcon from 'shared/assets/social/instagram.svg';

export type SocialElementType = {
  id: string;
  path: string;
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export const SocialElementsList: SocialElementType[] = [
  {
    id: 'instagram',
    path: 'https://www.instagram.com/savva.mebel?igsh=Z2FxOWY4aTI5Nnly',
    name: 'Instagram Icon',
    Icon: InstagramIcon,
  },
  {
    id: 'telegram',
    path: 'https://t.me/savvamebel',
    name: 'Telegram Icon',
    Icon: TelegramIcon,
  },
  {
    id: 'vk',
    path: 'https://example.com',
    name: 'vk Icon',
    Icon: VkIcon,
  },
];
