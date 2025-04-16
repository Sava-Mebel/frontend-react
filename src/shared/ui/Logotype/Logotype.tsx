import { JSX, memo, SVGProps } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkVariant } from 'shared/ui/AppLink';

import cls from './Logotype.module.scss';
import LogoIcon from '../../assets/logo/Logotype.svg';

interface LogotypeProps {
  className?: string;
  Logo?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const Logotype = memo((props: LogotypeProps) => {
  const { className, Logo = LogoIcon } = props;

  return (
    <AppLink
      variant={AppLinkVariant.ROUTE}
      to={'/'}
      className={classNames(cls.Logotype, {}, [className])}
    >
      <Logo className={cls.logo} />
      <p className={cls.header}>производство мебели по индивидуальным размерам</p>
    </AppLink>
  );
});

Logotype.displayName = 'Logotype';
