import { JSX, SVGProps } from 'react';

import CabinetDrawerIcon from 'shared/assets/toolCategory/cabinet-and-drawer.svg';
import KitchenFurnitureIcon from 'shared/assets/toolCategory/kitchen-furniture.svg';
import FurnitureIcon from 'shared/assets/toolCategory/furniture.svg';

export interface ToolItemType {
  id: number;
  text: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  urlBg: string;
}

const BASE_PATH_MEDIA: string = '/media';

export const toolItemLists: ToolItemType[] = [
  {
    id: 1,
    text: 'Кухонные гарнитуры'.replace(' ', '\n'),
    Icon: KitchenFurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/kitchen.png`,
  },
  {
    id: 2,
    text: 'Прихожие',
    Icon: FurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/hallway.png`,
  },
  {
    id: 3,
    text: 'Шкафы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/сabinets.png`,
  },
  {
    id: 4,
    text: 'Гардеробы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/kitchen.png`,
  },
  {
    id: 5,
    text: 'Столы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/hallway.png`,
  },
  {
    id: 6,
    text: 'Диваны',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/сabinets.png`,
  },
  {
    id: 7,
    text: 'Стулья',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/kitchen.png`,
  },
];
