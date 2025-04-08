import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import { SocialBar } from 'widgets/SocialBar';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;
  const currentYear: number = new Date().getFullYear();

  return (
    <div className={classNames(cls.Footer, {}, [className])}>
      <Logotype className={cls.logo} />
      <div className={cls.menu}>MENU</div>
      <div className={cls.contact}>CONTACT</div>
      <SocialBar className={cls.socialBar} />
      <div className={cls.itemsMenu}>menu item</div>
      <div className={cls.itemsContact}>items contact</div>
      <div className={cls.copyright}>
        <p>&copy; {currentYear}, Все права защищены</p>
      </div>
      <div className={cls.privacy}>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';
