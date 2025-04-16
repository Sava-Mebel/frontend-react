import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { CatalogPage } from 'pages/CatalogPage';

export enum CatalogCategoryRoutes {
  KITCHEN = 'kitchen',
  BEDROOM = 'bedroom',
  HALLWAY = 'hallway',
  LIVING_ROOM = 'living-room',
  KIDS_ROOM = 'kids-room',
  HOME_OFFICE = 'home-office',
  WARDROBE = 'wardrobe',
}

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  CATALOG = 'catalog',
  CATALOG_CARD = 'catalog_card',

  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CATALOG_CARD]: '/catalog/:category',

  // LAST
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />,
  },
  [AppRoutes.CATALOG_CARD]: {
    path: RoutePath.catalog_card,
    element: <CatalogPage />,
  },

  // LAST
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
