import { JSX, memo, SVGProps } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Logotype.module.scss';
import LogoIcon from '../../assets/logo/Logotype.svg';

interface LogotypeProps {
  className?: string;
  Logo?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const Logotype = memo((props: LogotypeProps) => {
  const { className, Logo = LogoIcon } = props;

  return (
    <Link to={'/'} className={classNames(cls.Logotype, {}, [className])}>
      <Logo className={cls.logo} />
    </Link>
  );
});

Logotype.displayName = 'Logotype';
