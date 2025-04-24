import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { toolItemLists, ToolItemType } from 'widgets/ToolCatalog/model/toolItems';
import { ToolItem } from 'widgets/ToolCatalog/ui/ToolItem/ToolItem';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppBackground } from 'shared/lib/hooks/useAppBackground/useAppBackground';

import cls from './ToolCatalog.module.scss';

interface ToolCatalogProps {
  className?: string;
}

export const ToolCatalog = ({ className }: ToolCatalogProps) => {
  const [activeBackground, setActiveBackground] = useState('/media/kitchen.png');
  useAppBackground(activeBackground);

  const handleClick = (item: ToolItemType) => {
    console.log(item.urlBg);
    setActiveBackground(item.urlBg);
  };

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

        <Button
          className={cls.btnInfo}
          theme={ButtonTheme.OUTLINE}
          onClick={() => console.log('test')}
        >
          Подобрать
        </Button>
      </div>

      <div className={cls.tool}>
        {toolItemLists.map((item) => (
          <ToolItem key={item.id} item={item} onClick={handleClick} />
        ))}
      </div>
    </section>
  );
};

ToolCatalog.displayName = 'ToolCatalog';
