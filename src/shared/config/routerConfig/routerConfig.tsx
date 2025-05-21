import { RouteProps } from 'react-router-dom';

import { RenovationPage } from 'pages/RenovationPage';
import { InteriorDesignPage } from 'pages/InteriorDesignPage';
import { MainPage } from 'pages/MainPage';
import { CatalogPage } from 'pages/CatalogPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  RENOVATION = 'renovation',
  INTERIOR_DESIGN = 'interior_design',
  CATALOG = 'catalog',
  CATALOG_CARD = 'catalog_card',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RENOVATION]: '/renovation',
  [AppRoutes.INTERIOR_DESIGN]: '/interior-design',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.CATALOG_CARD]: '/catalog/:id',

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
  [AppRoutes.CATALOG_CARD]: {
    path: RoutePath.catalog_card,
    element: <CatalogPage />, // или отдельная CatalogCardPage
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
