import { AnchorHTMLAttributes, ReactNode } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { AppLinkTheme, AppLinkVariant } from '../const/const';

interface BaseProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export interface RouteLinkProps
  extends BaseProps,
    Omit<RouterLinkProps, 'className' | 'children' | 'to'> {
  variant: AppLinkVariant.ROUTE;
  to: string;
}

export interface ExternalLinkProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  variant: AppLinkVariant.EXTERNAL;
  href: string;
}

export type AppLinkProps = RouteLinkProps | ExternalLinkProps;
