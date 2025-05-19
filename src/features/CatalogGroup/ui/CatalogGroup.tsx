import { classNames } from 'shared/lib/classNames/classNames';
import { BadgeTypes } from 'shared/ui/Badge/Badge';
import { Card } from 'features/CatalogGroup/ui/Card/Card';

import cls from './CatalogGroup.module.scss';

interface CatalogCardProps {
  className?: string;
  title: string;
  description: string;
}

export const CatalogGroup = (props: CatalogCardProps) => {
  const { className, title, description } = props;

  return (
    <div className={classNames(cls.CatalogGroup, {}, [className])}>
      <h2 className={cls.title}>{title}</h2>
      <h3 className={cls.subTitle}>{description}</h3>

      <div className={cls.catalogList}>
        <Card badge={BadgeTypes.TOP_PICK} />
        <Card />
        <Card />
        <Card />
        <Card badge={BadgeTypes.CLIENT_PICK} />
        <Card />
      </div>
    </div>
  );
};

CatalogGroup.displayName = 'CatalogGroup';
