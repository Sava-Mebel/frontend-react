import { ComponentType, ImgHTMLAttributes, SVGProps } from 'react';

import ExclusiveSolutionsIcon from 'shared/assets/advantages/exclusive_solutions.svg';
import PremiumMaterialsIcon from 'shared/assets/advantages/premium-materials.svg';
import DiamondIcon from 'shared/assets/advantages/diamond.svg';

export type AdvantagesItem = {
  id: string;
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>> | ComponentType<ImgHTMLAttributes<HTMLImageElement>>;
};

export const AdvantagesList: AdvantagesItem[] = [
  {
    id: 'exclusive_solutions',
    title: 'Эксклюзивные решения',
    Icon: ExclusiveSolutionsIcon,
  },
  {
    id: 'premium-materials',
    title: 'Премиум-материалы',
    Icon: PremiumMaterialsIcon,
  },
  {
    id: 'full-customization',
    title: 'Полная кастомизация',
    Icon: DiamondIcon,
  },
];
