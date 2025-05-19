import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Badge.module.scss';

export enum BadgeTypes {
  TOP_PICK = 'TOP_PICK',
  CLIENT_PICK = 'CLIENT_PICK',
  STARS_PICK = 'STARS_PICK',
}
const BADGE_TEXTS = {
  [BadgeTypes.TOP_PICK]: 'Топ выбор',
  [BadgeTypes.CLIENT_PICK]: 'Выбор клиентов',
  [BadgeTypes.STARS_PICK]: '5/5 ⭐⭐⭐⭐⭐',
};
const BADGE_IMG = {
  [BadgeTypes.TOP_PICK]: '/media/badge/TopPick.png',
  [BadgeTypes.CLIENT_PICK]: '/media/badge/ClientPick.png',
  [BadgeTypes.STARS_PICK]: null,
};

interface BadgeProps {
  className?: string;
  mods: BadgeTypes;
}

export const Badge = (props: BadgeProps) => {
  const { className, mods } = props;
  const modsBadge: Mods = mods ? { [cls[mods]]: true } : {};
  const imageSrc = BADGE_IMG[mods];
  const badgeText = BADGE_TEXTS[mods];

  return (
    <span className={classNames(cls.Badge, modsBadge, [className])}>
      {imageSrc && <img src={imageSrc} className={cls.badgeIcon} alt="Бейджик" />}
      {badgeText}
    </span>
  );
};

Badge.displayName = 'Badge';
