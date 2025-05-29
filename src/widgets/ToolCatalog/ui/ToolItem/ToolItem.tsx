import { ToolItemType } from 'widgets/ToolCatalog/model/toolItems';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './ToolItem.module.scss';

interface ToolItemProps {
  item: ToolItemType;
  isActive: boolean;
}

export const ToolItem = ({ item, isActive }: ToolItemProps) => {
  const { Icon, text } = item;
  console.log('isActive', isActive);
  const mods: Mods = {
    [cls.active]: isActive,
  };

  console.log('mods', mods);

  return (
    <div className={classNames(cls.ToolItem, mods, [])}>
      <Icon className={cls.icon} />
      <p className={cls.text}>{text}</p>
    </div>
  );
};

ToolItem.displayName = 'ToolItem';
