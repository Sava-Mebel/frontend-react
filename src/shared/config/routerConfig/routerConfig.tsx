import { RouteProps } from 'react-router-dom';

import { RenovationPage } from 'pages/RenovationPage';
import { InteriorDesignPage } from 'pages/InteriorDesignPage';
import { MainPage } from 'pages/MainPage';
import { CatalogPage } from 'pages/CatalogPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { CatalogGroupPage } from 'pages/CatalagGroupPage';
import { CatalogCardPage } from 'pages/CatalogCardPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum CatalogGroupID {
  KITCHEN_SETS = 'kitchen-sets',
  HALLWAYS = 'hallways',
  CABINETS = 'Cabinets',
  SWING_WARDROBES = 'swing-wardrobes',
  SLIDING_WARDROBES = 'sliding-wardrobes',
  WARDROBE_BED = 'wardrobe-bed',
  DRESSING_ROOMS = 'dressing-rooms',
  WINDOW_WORKSPACES = 'window-workspaces',
  MIRRORS_WITH_CABINETS = 'mirrors-with-cabinet',
  BATHROOM_FURNITURE = 'bathroom-furniture',
  BEDROOM_FURNITURE = 'bedroom-furniture',
  DINING_ROOM_FURNITURE = 'dining-room-furniture',
  OTHER_FURNITURE = 'other-furniture',
}

export enum AppRoutes {
  MAIN = 'main',
  RENOVATION = 'renovation',
  INTERIOR_DESIGN = 'interior_design',
  CATALOG = 'catalog',
  CATALOG_GROUP = 'catalog_group',
  CATALOG_CARD = 'catalog_card',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RENOVATION]: '/renovation',
  [AppRoutes.INTERIOR_DESIGN]: '/interior-design',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CATALOG_GROUP]: '/catalog/groups/:groupId',
  [AppRoutes.CATALOG_CARD]: '/catalog/:groupId/:id', // или '/catalog/item/:id'

  // последний
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.RENOVATION]: {
    path: RoutePath.renovation,
    element: <RenovationPage />,
  },
  [AppRoutes.INTERIOR_DESIGN]: {
    path: RoutePath.interior_design,
    element: <InteriorDesignPage />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />,
  },
  [AppRoutes.CATALOG_GROUP]: {
    path: RoutePath.catalog_group,
    element: <CatalogGroupPage />,
  },
  [AppRoutes.CATALOG_CARD]: {
    path: RoutePath.catalog_card,
    element: <CatalogCardPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
