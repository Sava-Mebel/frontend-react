import { ToolItemType } from 'widgets/ToolCatalog/model/toolItems';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ToolItem.module.scss';

interface ToolItemProps {
  item: ToolItemType;
  onClick: (item: ToolItemType) => void;
}

export const ToolItem = ({ item, onClick }: ToolItemProps) => {
  const { Icon, text } = item;

  return (
    <Button
      className={classNames(cls.ToolItem, {}, [])}
      theme={ButtonTheme.CLEAR}
      onClick={() => onClick(item)}
    >
      <Icon className={cls.icon} />
      <p className={cls.text}>{text}</p>
    </Button>
  );
};

ToolItem.displayName = 'ToolItem';
