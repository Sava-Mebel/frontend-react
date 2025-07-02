import { memo, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

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
    title = 'Savva Mebel',
    subTitle = 'Создаём мебель вашей мечты — от эскиза до воплощения',
    description = 'Наша мастерская более 10 лет создаёт эксклюзивную мебель для тех, кто ценит безупречные формы, натуральные материалы и продуманные детали. Каждый проект — это гармония эргономики, стиля и ваших привычек.',
    linkText = 'Перейти в каталог',
    linkUrl = '',
    className,
    activeIndex,
  }: MainCarouselContentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const prevIndex = useRef<number | undefined>(undefined);

    useEffect(() => {
      if (!contentRef.current) return;

      if (prevIndex.current === activeIndex) return;

      prevIndex.current = activeIndex;

      gsap.set(contentRef.current, { opacity: 1 });

      const tl = gsap.timeline();

      tl.to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'sine.inOut',
      });

      tl.to(contentRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'sine.inOut',
      });
    }, [activeIndex]);

    return (
      <div className={cls.Content} ref={contentRef}>
        <h2 className={cls.title}>{title}</h2>
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
