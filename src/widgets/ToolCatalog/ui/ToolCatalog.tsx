import { useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { toolItemLists } from 'widgets/ToolCatalog/model/toolItems';
import { ToolItem } from 'widgets/ToolCatalog/ui/ToolItem/ToolItem';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ToolCatalog.module.scss';

interface ToolCatalogProps {
  className?: string;
}

export const ToolCatalog = (props: ToolCatalogProps) => {
  const { className } = props;

  const toolItemList = useMemo(
    () => toolItemLists.map((item) => <ToolItem key={item.id} item={item} />),
    [],
  );

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
        <Button className={cls.btnInfo} theme={ButtonTheme.OUTLINE}>
          Подобрать
        </Button>
      </div>

      <div className={cls.tool}>{toolItemList}</div>
    </section>
  );
};

ToolCatalog.displayName = 'ToolCatalog';
