import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ColorTool.module.scss';

export interface DataColorType {
  color: string;
  nameColor: string;
}

interface ColorToolProps {
  className?: string;
  dataColor?: DataColorType[];
}

export const ColorTool = ({ className, dataColor }: ColorToolProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('#C4C4C4');

  const handleClick = (color: string) => {
    setSelectedColor(color);
  };

  const colors: DataColorType[] = dataColor || [
    { color: '#C4C4C4', nameColor: 'Светло-серый' },
    { color: '#4E4E4E', nameColor: 'Тёмно-серый' },
    { color: '#7A7A7A', nameColor: 'Средне-серый' },
  ];

  return (
    <div className={classNames(cls.ColorTool, {}, [className])}>
      {colors.map(({ color, nameColor }) => (
        <span
          key={color}
          className={classNames(cls.colorItem, {
            [cls.active]: selectedColor === color,
          })}
          style={{ background: color }}
          onClick={() => handleClick(color)}
          title={nameColor}
        />
      ))}
    </div>
  );
};

ColorTool.displayName = 'ColorTool';
