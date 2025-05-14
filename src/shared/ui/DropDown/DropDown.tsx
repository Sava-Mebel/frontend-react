import React, { memo } from 'react';

import cls from './Dropdown.module.scss';

export interface DropDownItems {
  label: string;
  subItems?: string[];
}

interface DropdownProps {
  items: DropDownItems[];
  isVisible: boolean;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { items, isVisible } = props;

  if (!isVisible || !items) return null;

  return (
    <div className={cls.dropdown}>
      {items.map((item, index) => (
        <div key={index}>
          <div className={cls.item}>{item.label}</div>
          {item.subItems && (
            <div className={cls.submenu}>
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className={cls.subitem}>
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
