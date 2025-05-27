import { ButtonHTMLAttributes, FC } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonThemeTypes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeTypes;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children = 'Кнопка',
    theme = ButtonThemeTypes.OUTLINE,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: theme,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
