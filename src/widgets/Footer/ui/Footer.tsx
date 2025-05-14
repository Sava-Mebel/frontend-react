import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import { SocialBar } from 'widgets/SocialBar';
import LogoIcon from 'shared/assets/logo/footer-logo.svg';
import { AdvantagesList } from 'widgets/Footer/model/advantages';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;

  const advantages = AdvantagesList.map((advantage) => {
    const { title, Icon, id } = advantage;

    return (
      <li className={cls.advantagesItem} key={id}>
        <Icon className={cls.advantagesIcon} />
        <span className={cls.advantagesTitle}>{title}</span>
      </li>
    );
  });

  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <ul className={cls.advantagesList}>{advantages}</ul>

      <div className={cls.bottom}>
        <Logotype Logo={LogoIcon} className={cls.logo} />
        <SocialBar />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
