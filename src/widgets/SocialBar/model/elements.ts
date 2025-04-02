import { JSX, SVGProps } from 'react';
import YouTubeIcon from 'shared/assets/social/youtube.svg';
import VkIcon from 'shared/assets/social/vk.svg';
import InstagramIcon from 'shared/assets/social/instagram.svg';

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
    id: 'instagram',
    path: 'https://example.com',
    name: 'Instagram Icon',
    Icon: InstagramIcon,
  },
  {
    id: 'vk',
    path: 'https://example.com',
    name: 'vk Icon',
    Icon: VkIcon,
  },
];
