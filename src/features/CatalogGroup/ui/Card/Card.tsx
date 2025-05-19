import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Badge, BadgeTypes } from 'shared/ui/Badge/Badge';

import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  badge?: BadgeTypes;
}

export const Card = (props: CardProps) => {
  const { className, badge } = props;

  const modsBadge: Mods = badge ? { [cls[badge]]: true } : {};

  return (
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
      <figcaption className={cls.title}>Лол njg kjg</figcaption>
    </figure>
  );
};

Card.displayName = 'Card';
