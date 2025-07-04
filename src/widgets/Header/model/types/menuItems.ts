import { JSX, SVGProps } from 'react';

import { CatalogGroupID, RoutePath } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icon/home.svg';

export type DropdownItem =
  | {
      type: 'item';
      label: string;
      to: string;
      Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
      noActive?: boolean;
    }
  | {
      type: 'group';
      label: string;
      to: string;
      subItems: { label: string; to: string }[];
      Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    };

export interface MenuItem {
  label: string;
  to?: string;
  dropdownItems?: DropdownItem[];
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  noActive?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Главная',
    to: RoutePath.main,
    Icon: HomeIcon,
    noActive: true,
  },
  {
    label: 'Каталог',
    dropdownItems: [
      { type: 'item', label: 'Кухонный гарнитур', to: `/${CatalogGroupID.KITCHEN_SETS}` },
      { type: 'item', label: 'Прихожие', to: `/${CatalogGroupID.WINDOW_WORKSPACES}` },
      {
        type: 'group',
        label: 'Шкафы',
        to: `/${CatalogGroupID.CABINETS}`,
        subItems: [
          { label: 'Распашные', to: `/${CatalogGroupID.SWING_WARDROBES}` },
          { label: 'Купе', to: `/${CatalogGroupID.SLIDING_WARDROBES}` },
          { label: 'Шкаф кровать', to: `/${CatalogGroupID.WARDROBE_BED}` },
        ],
      },
      { type: 'item', label: 'Гардеробные', to: `/${CatalogGroupID.DRESSING_ROOMS}` },
      { type: 'item', label: 'Рабочие зоны у окна', to: `/${CatalogGroupID.WINDOW_WORKSPACES}` },
      {
        type: 'item',
        label: 'Зеркала с подвесными тумбами',
        to: `/${CatalogGroupID.MIRRORS_WITH_CABINETS}`,
      },
      {
        type: 'item',
        label: 'Мебель для ванной / туалета',
        to: `/${CatalogGroupID.BATHROOM_FURNITURE}`,
      },
      { type: 'item', label: 'Мебель для спальни', to: `/${CatalogGroupID.BEDROOM_FURNITURE}` },
      {
        type: 'item',
        label: 'Мебель для столовой',
        to: `/${CatalogGroupID.DINING_ROOM_FURNITURE}`,
      },
      { type: 'item', label: 'Другая мебель', to: `/${CatalogGroupID.OTHER_FURNITURE}` },
    ],
  },
  {
    label: 'Ремонт квартир под ключ',
    to: RoutePath.renovation,
  },
  {
    label: 'Дизайн-проект интерьера',
    to: RoutePath.interior_design,
  },
];
