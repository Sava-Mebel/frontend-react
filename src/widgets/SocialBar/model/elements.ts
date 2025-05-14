import { JSX, SVGProps } from 'react';

import VkIcon from 'shared/assets/social/vk.svg';
import YouTubeIcon from 'shared/assets/social/youtube.svg';
import TelegramIcon from 'shared/assets/social/tg.svg';

export type SocialElementType = {
  id: string;
  path: string;
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export const SocialElementsList: SocialElementType[] = [
  {
    id: 'youtube',
    path: 'https://example.com',
    name: 'YouTube Icon',
    Icon: YouTubeIcon,
  },
  {
    id: 'telegram',
    path: 'https://example.com',
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
