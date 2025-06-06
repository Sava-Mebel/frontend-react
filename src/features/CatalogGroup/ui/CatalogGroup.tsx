import { classNames } from 'shared/lib/classNames/classNames';
import { BadgeTypes } from 'shared/ui/Badge/Badge';
import { Card } from 'features/CatalogGroup/ui/Card/Card';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './CatalogGroup.module.scss';

interface CatalogCardProps {
  className?: string;
  title: string;
  description: string;
  toCatalog?: string;
}

export const CatalogGroup = (props: CatalogCardProps) => {
  const { className, title, description, toCatalog } = props;

  return (
    <div className={classNames(cls.CatalogGroup, {}, [className])}>
      <div className={cls.container}>
        <div className={cls.containerHeader}>
          <h2 className={cls.title}>{title}</h2>
          <h3 className={cls.subTitle}>{description}</h3>
        </div>

        {toCatalog && (
          <AppLink className={cls.link} variant={AppLinkVariant.ROUTE} to={toCatalog}>
            Перейти в раздел
          </AppLink>
        )}
      </div>

      <div className={cls.catalogList}>
        <Card badge={BadgeTypes.TOP_PICK} />
        <Card badge={BadgeTypes.CLIENT_PICK} />
        <Card />
      </div>
    </div>
  );
};

CatalogGroup.displayName = 'CatalogGroup';
