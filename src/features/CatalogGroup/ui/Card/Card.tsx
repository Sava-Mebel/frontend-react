import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Badge, BadgeTypes } from 'shared/ui/Badge/Badge';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  badge?: BadgeTypes;
  toPaht?: string;
}

export const Card = (props: CardProps) => {
  const { className, badge, toPaht = '/catalog/kitchen-sets/1' } = props;

  const modsBadge: Mods = badge ? { [cls[badge]]: true } : {};

  return (
    <AppLink variant={AppLinkVariant.ROUTE} to={toPaht} className={cls.AppLink}>
      <figure className={classNames(cls.Card, {}, [className])}>
        {badge && (
          <span className={classNames(cls.badge, modsBadge)}>
            <Badge mods={badge} />
          </span>
        )}

        <img
          className={cls.img}
          src={'https://www.arboro.de/blog/wp-content/uploads/2010/05/img-tag.jpg'}
          alt="img"
        />
        <figcaption className={cls.header}>
          <h3 className={cls.title}>Заголовок для карточки</h3>
          <p className={cls.description}>Изготовление индивидуальной мебели на заказ</p>
        </figcaption>
      </figure>
    </AppLink>
  );
};

Card.displayName = 'Card';
