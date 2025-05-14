import { memo, useState, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import HeaderIcon from 'shared/assets/logo/header-logo.svg';
import { Button } from 'shared/ui/Button/Button';

import cls from './Header.module.scss';
import { Dropdown, DropDownItems } from 'shared/ui/DropDown/DropDown';

interface HeaderProps {
  className?: string;
}

interface MenuItem {
  label: string;
  dropdownItems?: DropDownItems;
}

const menuItems = [
  {
    label: 'Каталог',
    dropdownItems: [
      'Кухонный гарнитур',
      'Прихожие',
      {
        label: 'Шкафы',
        subItems: ['Распашные', 'Купе', 'Шкаф кровать'],
      },
      'Гардеробные',
      'Рабочие зоны у окна',
      'Зеркала с подвесными тумбами',
      'Мебель для ванной / туалета',
      'Мебель для столовой',
      'Другая мебель',
    ],
  },
  {
    label: 'Ремонт квартир под ключ',
  },
  {
    label: 'Дизайн-проект интерьера',
  },
];

const useHover = (delay: number) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, delay);
  };

  return { isHovered, handleMouseEnter, handleMouseLeave };
};

export const Header = memo((props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <nav className={cls.nav}>
        <ul className={cls.itemList}>
          <Logotype Logo={HeaderIcon} />

          {menuItems.map((item, index) => {
            const { isHovered, handleMouseEnter, handleMouseLeave } = useHover(300);

            return (
              <li
                key={index}
                className={cls.item}
                onMouseEnter={item.dropdownItems ? handleMouseEnter : undefined}
                onMouseLeave={item.dropdownItems ? handleMouseLeave : undefined}
              >
                <h2 className={cls.label}>{item.label}</h2>
                {/*{item.dropdownItems && (*/}
                {/*  <Dropdown items={item.dropdownItems} isVisible={isHovered} />*/}
                {/*)}*/}
              </li>
            );
          })}

          <Button>Позвонить мне</Button>
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
