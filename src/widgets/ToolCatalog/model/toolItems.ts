import { JSX, SVGProps } from 'react';

import CabinetDrawerIcon from 'shared/assets/toolCategory/cabinet-and-drawer.svg';
import KitchenFurnitureIcon from 'shared/assets/toolCategory/kitchen-furniture.svg';
import FurnitureIcon from 'shared/assets/toolCategory/furniture.svg';

export interface ToolItemType {
  id: number;
  text: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const toolItemLists: ToolItemType[] = [
  {
    id: 1,
    text: 'Кухонные гарнитуры'.replace(' ', '\n'),
    Icon: KitchenFurnitureIcon,
  },
  {
    id: 2,
    text: 'Прихожие',
    Icon: FurnitureIcon,
  },
  {
    id: 3,
    text: 'Шкафы',
    Icon: CabinetDrawerIcon,
  },
  {
    id: 4,
    text: 'Гардеробы',
    Icon: CabinetDrawerIcon,
  },
  {
    id: 5,
    text: 'Столы',
    Icon: CabinetDrawerIcon,
  },
  {
    id: 6,
    text: 'Диваны',
    Icon: CabinetDrawerIcon,
  },
  {
    id: 7,
    text: 'Стулья',
    Icon: CabinetDrawerIcon,
  },
];
