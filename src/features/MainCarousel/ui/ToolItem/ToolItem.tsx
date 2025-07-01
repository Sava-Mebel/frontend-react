import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ToolItemType } from 'features/MainCarousel/model/toolItems';

import cls from './ToolItem.module.scss';

interface ToolItemProps {
  item: ToolItemType;
  isActive: boolean;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ToolItem = (props: ToolItemProps) => {
  const { item, isActive, onClick, onFocus, onBlur, onMouseEnter, onMouseLeave } = props;
  const { Icon, text } = item;

  const mods: Mods = {
    [cls.active]: isActive,
  };

  return (
    <Button
      className={classNames(cls.ToolItem, mods, [])}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      aria-pressed={isActive}
    >
      <Icon className={cls.icon} />
      <span className={cls.text}>{text}</span>
    </Button>
  );
};

ToolItem.displayName = 'ToolItem';
