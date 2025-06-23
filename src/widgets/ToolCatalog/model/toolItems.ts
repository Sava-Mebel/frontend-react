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

const BASE_PATH_MEDIA: string = '/media/background';

export const toolItemLists: ToolItemType[] = [
  {
    id: 1,
    text: 'Кухонные гарнитуры'.replace(' ', '\n'),
    Icon: KitchenFurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/KitchenSet.jpg`,
  },
  {
    id: 2,
    text: 'Прихожие',
    Icon: FurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/Hallway.jpg`,
  },
  {
    id: 3,
    text: 'Шкафы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Cabinets.jpeg`,
  },
  {
    id: 4,
    text: 'Гардеробная',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Wardrobes.jpg`,
  },
  {
    id: 5,
    text: 'Столы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Tables.png`,
  },
  {
    id: 6,
    text: 'Диваны',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Sofas.jpg`,
  },
  {
    id: 7,
    text: 'Стулья',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Chairs.jpg`,
  },
];
