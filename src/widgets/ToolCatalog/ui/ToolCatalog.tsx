import { useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { toolItemLists } from 'widgets/ToolCatalog/model/toolItems';
import { ToolItem } from 'widgets/ToolCatalog/ui/ToolItem/ToolItem';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';

import cls from './ToolCatalog.module.scss';

interface ToolCatalogProps {
  className?: string;
}

export const ToolCatalog = ({ className }: ToolCatalogProps) => {
  const [activeItemId, setActiveItemId] = useState<number>(toolItemLists[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemId((prevId) => {
        const currentIndex = toolItemLists.findIndex((item) => item.id === prevId);
        const nextIndex = (currentIndex + 1) % toolItemLists.length;
        const nextItem = toolItemLists[nextIndex];

        return nextItem.id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classNames(cls.ToolCatalog, {}, [className])}>
      <div className={cls.content}>
        <div className={cls.header}>
          <h2 className={cls.title}>Savva Mebel</h2>
          <h3 className={cls.subTitle}>Создаём мебель вашей мечты — от эскиза до воплощения</h3>
        </div>

        <p className={cls.description}>
          Наша мастерская более 10 лет создает эксклюзивную мебель для тех, кто ценит безупречные
          формы, натуральные материалы и продуманные детали. Каждый проект — это гармония
          эргономики, стиля и ваших привычек
        </p>

        <AppLink className={cls.linkInfo} variant={AppLinkVariant.ROUTE} to={AppRoutes.CATALOG}>
          <p className={cls.linkText}>Подобрать</p>
        </AppLink>
      </div>

      <div className={cls.tool}>
        {toolItemLists.map((item) => (
          <ToolItem key={item.id} item={item} isActive={item.id === activeItemId} />
        ))}
      </div>
    </section>
  );
};

ToolCatalog.displayName = 'ToolCatalog';
