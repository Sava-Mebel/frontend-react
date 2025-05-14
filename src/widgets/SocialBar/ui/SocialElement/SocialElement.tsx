import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { SocialElementType } from 'widgets/SocialBar/model/elements';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './SocialElement.module.scss';

interface SocialElementProps {
  className?: string;
  elm: SocialElementType;
}

export const SocialElement = memo((props: SocialElementProps) => {
  const { className, elm } = props;

  return (
    <AppLink
      variant={AppLinkVariant.EXTERNAL}
      className={classNames(cls.SocialElement, {}, [className])}
      href={elm.path}
      target="_blank"
    >
      <elm.Icon className={cls.icon} />
    </AppLink>
  );
});

SocialElement.displayName = 'SocialElement';
