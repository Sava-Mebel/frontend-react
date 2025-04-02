import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SocialElementType } from 'widgets/SocialBar/model/elements';
import cls from './SocialElement.module.scss';

interface SocialElementProps {
  className?: string;
  elm: SocialElementType;
}

export const SocialElement = memo((props: SocialElementProps) => {
  const { className, elm } = props;

  return (
    <a className={classNames(cls.SocialElement, {}, [className])} href={elm.path}>
      <elm.Icon className={cls.icon} />
    </a>
  );
});

SocialElement.displayName = 'SocialElement';
