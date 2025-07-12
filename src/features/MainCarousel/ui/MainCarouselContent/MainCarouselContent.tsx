import { memo, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';
import LogoIcon from 'shared/assets/logo/logo-main.svg';

import cls from './MainCarouselContent.module.scss';

interface MainCarouselContentProps {
  title?: string;
  subTitle?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
  activeIndex?: number;
}

export const MainCarouselContent = memo(
  ({
    subTitle = 'Создаём мебель вашей мечты — от эскиза до воплощения',
    description = 'Наша мастерская более 10 лет создаёт эксклюзивную мебель для тех, кто ценит безупречные формы, натуральные материалы и продуманные детали. Каждый проект — это гармония эргономики, стиля и ваших привычек.',
    linkText = 'Перейти в каталог',
    linkUrl = '',
    className,
  }: MainCarouselContentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!contentRef.current) return;

      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'sine.inOut',
      });
    }, []);

    return (
      <div className={cls.Content} ref={contentRef}>
        <LogoIcon className={cls.logo} />
        <h3 className={cls.subTitle}>{subTitle}</h3>
        <p className={cls.description}>{description}</p>

        <AppLink className={cls.linkInfo} variant={AppLinkVariant.ROUTE} to={linkUrl || '/catalog'}>
          <p className={cls.linkText}>{linkText}</p>
        </AppLink>
      </div>
    );
  },
);

MainCarouselContent.displayName = 'MainCarouselContent';
