import { FC, ReactNode, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: number;
}

export const Tabs: FC<TabsProps> = ({ tabs, defaultActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className={cls.Tabs}>
      <div className={cls.tabBtnItems}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={classNames(cls.btn, { [cls.active]: activeIndex === idx })}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={cls.content}>{tabs[activeIndex].content}</div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
