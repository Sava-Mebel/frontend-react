import { useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Badge, BadgeTypes } from 'shared/ui/Badge/Badge';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  badge?: BadgeTypes;
  toPaht?: string;
}

const arrImg: string[] = [
  'https://raw.githubusercontent.com/Sava-Mebel/images/refs/heads/main/.idea/card/2.png',
  // ... остальные URL из массива
  'https://raw.githubusercontent.com/Sava-Mebel/images/refs/heads/main/.idea/card/22.png',
];

export const Card = (props: CardProps) => {
  const { className, badge, toPaht = '/catalog/kitchen-sets/1' } = props;

  const [randomImage, setRandomImage] = useState<string>('');

  useEffect(() => {
    const index = Math.floor(Math.random() * arrImg.length);
    setRandomImage(arrImg[index]);
  }, []); // пустой массив зависимостей — сработает один раз при монтировании

  return (
    <AppLink variant={AppLinkVariant.ROUTE} to={toPaht} className={cls.AppLink}>
      <figure className={classNames(cls.Card, {}, [className])}>
        {badge && (
          <span className={classNames(cls.badge, { [cls[badge]]: true })}>
            <Badge mods={badge} />
          </span>
        )}

        <img className={cls.img} src={randomImage} alt="img" />
        <figcaption className={cls.header}>
          <h3 className={cls.title}>Заголовок для карточки</h3>
          <p className={cls.description}>Изготовление индивидуальной мебели на заказ</p>
        </figcaption>
      </figure>
    </AppLink>
  );
};

Card.displayName = 'Card';
