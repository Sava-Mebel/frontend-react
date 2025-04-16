import { FC } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLinkTheme, AppLinkVariant } from './models/const/const';
import { AppLinkProps, ExternalLinkProps, RouteLinkProps } from './models/types/types';
import cls from './AppLink.module.scss';

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.PRIMARY, children, ...restProps } = props;

  const linkClassName = classNames(cls.AppLink, {}, [className, cls[theme]]);

  if (props.variant === AppLinkVariant.ROUTE) {
    const { to, ...linkProps } = restProps as RouteLinkProps;

    return (
      <Link to={to} className={linkClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href, ...anchorProps } = restProps as ExternalLinkProps;

  return (
    <a href={href} className={linkClassName} {...anchorProps}>
      {children}
    </a>
  );
};

AppLink.displayName = 'AppLink';
