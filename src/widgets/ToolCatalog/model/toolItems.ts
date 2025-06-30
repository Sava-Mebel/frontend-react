import { JSX, SVGProps } from 'react';

import CabinetDrawerIcon from 'shared/assets/toolCategory/cabinet-and-drawer.svg';
import KitchenFurnitureIcon from 'shared/assets/toolCategory/kitchen-furniture.svg';
import FurnitureIcon from 'shared/assets/toolCategory/furniture.svg';
import { CatalogGroupID } from 'shared/config/routerConfig/routerConfig';

export interface ToolItemType {
  id: number;
  text: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  urlBg: string;
  urlLink?: string;
}

const BASE_PATH_MEDIA: string = '/media/background';

export const toolItemLists: ToolItemType[] = [
  {
    id: 1,
    text: 'Кухонные гарнитуры'.replace(' ', '\n'),
    Icon: KitchenFurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/KitchenSet.jpg`,
    urlLink: `/${CatalogGroupID.KITCHEN_SETS}`,
  },
  {
    id: 2,
    text: 'Прихожие',
    Icon: FurnitureIcon,
    urlBg: `${BASE_PATH_MEDIA}/Hallway.jpg`,
    urlLink: `/${CatalogGroupID.HALLWAYS}`,
  },
  {
    id: 3,
    text: 'Шкафы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Cabinets.jpeg`,
    urlLink: `/${CatalogGroupID.BEDROOM_FURNITURE}`,
  },
  {
    id: 4,
    text: 'Гардеробная',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Wardrobes.jpg`,
    urlLink: `/${CatalogGroupID.WARDROBE_BED}`,
  },
  {
    id: 5,
    text: 'Столы',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Tables.png`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
  {
    id: 6,
    text: 'Диваны',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Sofas.jpg`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
  {
    id: 7,
    text: 'Стулья',
    Icon: CabinetDrawerIcon,
    urlBg: `${BASE_PATH_MEDIA}/Chairs.jpg`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
];
