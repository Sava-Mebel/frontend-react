import { ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './TabContent.module.scss';

type TabLink = {
  to: string;
  label: string;
};

interface TabContentProps {
  className?: string;
  title: string;
  link?: TabLink;
  children: ReactNode;
}

export const TabContent = (props: TabContentProps) => {
  const { className, title, children, link } = props;
  return (
    <div className={classNames(cls.TabContent, {}, [className])}>
      <div className={cls.header}>
        <h3 className={cls.title}>{title}</h3>
        {link && (
          <AppLink className={cls.link} variant={AppLinkVariant.ROUTE} to={link.to}>
            {link.label}
          </AppLink>
        )}
      </div>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';
