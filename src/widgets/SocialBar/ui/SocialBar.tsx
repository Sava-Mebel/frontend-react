import { memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { SocialElementsList } from '../model/elements';
import { SocialElement } from './SocialElement/SocialElement';
import cls from './SocialBar.module.scss';

interface SocialBarProps {
  className?: string;
}

export const SocialBar = memo((props: SocialBarProps) => {
  const { className } = props;

  const elementList = useMemo(
    () =>
      SocialElementsList.map((element, index) => {
        return <SocialElement elm={element} key={element.path + index} />;
      }),
    [],
  );

  return <div className={classNames(cls.SocialBar, {}, [className])}>{elementList}</div>;
});

SocialBar.displayName = 'SocialBar';
