import { JSX, SVGProps } from 'react';

import kitchenSetsIcon from 'shared/assets/toolCategory/kitchenSets.svg';
import HallwaysIcon from 'shared/assets/toolCategory/hallways.svg';
import CabinetsIcon from 'shared/assets/toolCategory/cabibets.svg';
import WardrobesIcon from 'shared/assets/toolCategory/wardrobes.svg';
import TablesIcon from 'shared/assets/toolCategory/tables.svg';
import SofasIcon from 'shared/assets/toolCategory/sofas.svg';
import ChairsIcon from 'shared/assets/toolCategory/сhairs.svg';
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
    Icon: kitchenSetsIcon,
    urlBg: `${BASE_PATH_MEDIA}/KitchenSet.jpg`,
    urlLink: `/${CatalogGroupID.KITCHEN_SETS}`,
  },
  {
    id: 2,
    text: 'Прихожие',
    Icon: HallwaysIcon,
    urlBg: `${BASE_PATH_MEDIA}/Hallway.jpg`,
    urlLink: `/${CatalogGroupID.HALLWAYS}`,
  },
  {
    id: 3,
    text: 'Шкафы',
    Icon: CabinetsIcon,
    urlBg: `${BASE_PATH_MEDIA}/Cabinets.jpeg`,
    urlLink: `/${CatalogGroupID.BEDROOM_FURNITURE}`,
  },
  {
    id: 4,
    text: 'Гардеробная',
    Icon: WardrobesIcon,
    urlBg: `${BASE_PATH_MEDIA}/Wardrobes.jpg`,
    urlLink: `/${CatalogGroupID.WARDROBE_BED}`,
  },
  {
    id: 5,
    text: 'Столы',
    Icon: TablesIcon,
    urlBg: `${BASE_PATH_MEDIA}/Tables.png`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
  {
    id: 6,
    text: 'Диваны',
    Icon: SofasIcon,
    urlBg: `${BASE_PATH_MEDIA}/Sofas.jpg`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
  {
    id: 7,
    text: 'Стулья',
    Icon: ChairsIcon,
    urlBg: `${BASE_PATH_MEDIA}/Chairs.jpg`,
    // urlLink: `/${CatalogGroupID.}`, пока не понятно
  },
];
