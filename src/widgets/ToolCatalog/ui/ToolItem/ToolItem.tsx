import { ToolItemType } from 'widgets/ToolCatalog/model/toolItems';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './ToolItem.module.scss';

interface ToolItemProps {
  item: ToolItemType;
  isActive: boolean;
  onClick?: () => void;
}

export const ToolItem = ({ item, isActive, onClick }: ToolItemProps) => {
  const { Icon, text } = item;
  console.log('isActive', isActive);
  const mods: Mods = {
    [cls.active]: isActive,
  };

  console.log('mods', mods);

  return (
    <Button className={classNames(cls.ToolItem, mods, [])} onClick={onClick}>
      <Icon className={cls.icon} />
      <p className={cls.text}>{text}</p>
    </Button>
  );
};

ToolItem.displayName = 'ToolItem';
