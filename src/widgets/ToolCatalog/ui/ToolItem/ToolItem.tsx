import { ToolItemType } from 'widgets/ToolCatalog/model/toolItems';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './ToolItem.module.scss';

interface ToolItemProps {
  item: ToolItemType;
  onClick: (item: ToolItemType) => void;
  isActive: boolean;
}

export const ToolItem = ({ item, onClick, isActive }: ToolItemProps) => {
  const { Icon, text } = item;
  console.log('isActive', isActive);
  const mods: Mods = {
    [cls.active]: isActive,
  };

  console.log('mods', mods);

  return (
    <Button
      className={classNames(cls.ToolItem, mods, [])}
      theme={ButtonTheme.CLEAR}
      onClick={() => onClick(item)}
    >
      <Icon className={cls.icon} />
      <p className={cls.text}>{text}</p>
    </Button>
  );
};

ToolItem.displayName = 'ToolItem';
