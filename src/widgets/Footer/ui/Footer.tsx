import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import { SocialBar } from 'widgets/SocialBar';

import cls from './Footer.module.scss';

export enum VariantTypes {
  DARK = 'dark',
  BLUR = 'blur',
}

interface FooterProps {
  className?: string;
  variant?: VariantTypes;
}

export const Footer = memo((props: FooterProps) => {
  const { className, variant = VariantTypes.BLUR } = props;
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={classNames(cls.Footer, {}, [className, cls[variant]])}>
      <div className={cls.top}>
        <Logotype />

        <ul className={cls.menu}>
          <h2 className={cls.menu__header}>Меню</h2>
          <li className={cls.menu__item}>Кухонные гарнитуры</li>
          <li className={cls.menu__item}>Шкафы</li>
          <li className={cls.menu__item}>Прихожие</li>
        </ul>

        <ul className={cls.menu}>
          <h2 className={cls.menu__header}>Контакты</h2>
          <li className={cls.menu__item}>заказать звонок</li>
          <li className={cls.menu__item}>example@gmail.com</li>
          <li className={cls.menu__item}>+7 999-999-99-99</li>
        </ul>
        <SocialBar />
      </div>
      <div className={cls.bottom}>
        <p className={cls.typography}>© {currentYear}, Все права защищены</p>
        <p className={cls.typography}>Политика конфиденциальности</p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
