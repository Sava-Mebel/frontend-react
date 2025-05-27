import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import { SocialBar } from 'widgets/SocialBar';
import LogoIcon from 'shared/assets/logo/footer-logo.svg';

import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
  mode?: 'fixed' | 'static';
}

export const Footer = memo((props: FooterProps) => {
  const { className, mode = 'static' } = props;

  return (
    <footer className={classNames(cls.Footer, { [cls[mode]]: mode }, [className])}>
      <div className={cls.bottom}>
        <Logotype Logo={LogoIcon} className={cls.logo} />
        <SocialBar />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
