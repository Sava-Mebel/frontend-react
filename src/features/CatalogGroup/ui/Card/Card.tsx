import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum BadgeTypes {
  TOP_PICK = 'TOP_PICK',
  CLIENT_PICK = 'CLIENT_PICK',
}

const BADGE_TEXTS = {
  [BadgeTypes.TOP_PICK]: 'Топ выбор',
  [BadgeTypes.CLIENT_PICK]: 'Выбор клиентов',
};
const BADGE_IMG = {
  [BadgeTypes.TOP_PICK]: '/media/badge/TopPick.png',
  [BadgeTypes.CLIENT_PICK]: '/media/badge/ClientPick.png',
};

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
          <img src={BADGE_IMG[badge]} className={cls.badgeIcon} />
          {BADGE_TEXTS[badge]}
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
