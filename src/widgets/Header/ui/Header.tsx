import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import PhoneIcon from 'shared/assets/icon/phone.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <Logotype />
      <AppLink
        variant={AppLinkVariant.EXTERNAL}
        className={cls.phoneLink}
        href={'tel:+7(499)-994-91-14'}
      >
        <PhoneIcon />
        <p className={cls.phoneText}>8-(499)-994-91-14</p>
      </AppLink>
    </div>
  );
});

Header.displayName = 'Header';
