import { useState, useEffect, useRef, FC, TouchEvent } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { toolItemLists } from '../../model/toolItems';
import { ToolItem } from '../ToolItem/ToolItem';
import { CarouselBackground } from '../CarouselBackground/CarouselBackground';
import { MainCarouselContent } from '../MainCarouselContent/MainCarouselContent';
import cls from './MainCarousel.module.scss';

interface MainCarouselProps {
  className?: string;
}

export const MainCarousel: FC<MainCarouselProps> = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % toolItemLists.length;
        setPrevIndex(current);
        setDirection('left');
        return next;
      });
    }, 5000); // 5 секунд

    return () => clearInterval(interval);
  }, [autoScroll]);

  const changeIndex = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setPrevIndex(activeIndex);
    setDirection(newIndex > activeIndex ? 'left' : 'right');
    setActiveIndex(newIndex);
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (deltaX > 50) {
      changeIndex(activeIndex === 0 ? toolItemLists.length - 1 : activeIndex - 1);
    } else if (deltaX < -50) {
      changeIndex((activeIndex + 1) % toolItemLists.length);
    }

    touchStartX.current = null;
  };

  const pauseAutoScroll = () => {
    setAutoScroll(false);
  };

  const resumeAutoScroll = () => {
    setAutoScroll(true);
  };

  const activeItem = toolItemLists[activeIndex];
  const pathCatalogGroups = '/catalog/groups';

  return (
    <section
      className={classNames(cls.MainCarousel, {}, [className])}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <CarouselBackground activeIndex={activeIndex} prevIndex={prevIndex} direction={direction} />

      <MainCarouselContent
        className={cls.content}
        title="Savva Mebel"
        subTitle="Создаём мебель вашей мечты — от эскиза до воплощения"
        description="Наша мастерская более 10 лет создает эксклюзивную мебель для тех, кто ценит безупречные формы, натуральные материалы и продуманные детали..."
        linkText="Подробнее"
        linkUrl={activeItem?.urlLink ? `${pathCatalogGroups}${activeItem.urlLink}` : '/catalog'}
      />

      <div className={cls.tool}>
        {toolItemLists.map((item, index) => (
          <ToolItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onClick={() => changeIndex(index)}
            onFocus={pauseAutoScroll}
            onBlur={resumeAutoScroll}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          />
        ))}
      </div>
    </section>
  );
};

MainCarousel.displayName = 'MainCarousel';
