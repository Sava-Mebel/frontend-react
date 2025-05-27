import { memo, useState, useRef, useCallback, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import HeaderIcon from 'shared/assets/logo/header-logo.svg';
import { Button } from 'shared/ui/Button/Button';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';
import { CatalogGroupID, RoutePath } from 'shared/config/routerConfig/routerConfig';

import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

interface DropdownItem {
  label: string;
  to: string;
}

interface MenuItem {
  label: string;
  to?: string;
  dropdownItems?: (DropdownItem | { label: string; subItems: DropdownItem[] })[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Каталог',
    dropdownItems: [
      { label: 'Кухонный гарнитур', to: `/${CatalogGroupID.KITCHEN_SETS}` },
      { label: 'Прихожие', to: `/${CatalogGroupID.WINDOW_WORKSPACES}` },
      {
        label: 'Шкафы',
        subItems: [
          { label: 'Распашные', to: `/${CatalogGroupID.SWING_WARDROBES}` },
          { label: 'Купе', to: `/${CatalogGroupID.SLIDING_WARDROBES}` },
          { label: 'Шкаф кровать', to: `/${CatalogGroupID.WARDROBE_BED}` },
        ],
      },
      { label: 'Гардеробные', to: `/${CatalogGroupID.DRESSING_ROOMS}` },
      { label: 'Рабочие зоны у окна', to: `/${CatalogGroupID.WINDOW_WORKSPACES}` },
      { label: 'Зеркала с подвесными тумбами', to: `/${CatalogGroupID.MIRRORS_WITH_CABINETS}` },
      { label: 'Мебель для ванной / туалета', to: `/${CatalogGroupID.BATHROOM_FURNITURE}` },
      { label: 'Мебель для спальни', to: `/${CatalogGroupID.BEDROOM_FURNITURE}` },
      { label: 'Мебель для столовой', to: `/${CatalogGroupID.DINING_ROOM_FURNITURE}` },
      { label: 'Другая мебель', to: `/${CatalogGroupID.OTHER_FURNITURE}` },
    ],
  },
  {
    label: 'Ремонт квартир под ключ',
    to: RoutePath.renovation,
  },
  {
    label: 'Дизайн-проект интерьера',
    to: RoutePath.interior_design,
  },
];

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathCatalogGroups: string = '/catalog/groups';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveIndex(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 400);
  };

  const handleLabelClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Обработчик клика по ссылке в dropdown
  const handleLinkClick = () => {
    closeDropdown();
  };

  const renderDropdownItems = (items: MenuItem['dropdownItems']) => {
    return (
      <div className={cls.dropdown} ref={dropdownRef}>
        {items?.map((item, index) => {
          if ('to' in item) {
            return (
              <AppLink
                key={index}
                variant={AppLinkVariant.ROUTE}
                className={cls.dropdownItem}
                to={`${pathCatalogGroups}${item.to}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </AppLink>
            );
          }

          if ('subItems' in item) {
            return (
              <ul key={index} className={cls.dropdownGroup}>
                <span className={cls.dropdownLabel}>{item.label}</span>
                {item.subItems.map((sub, subIdx) => (
                  <li key={subIdx} className={cls.dropdownItem}>
                    <AppLink
                      variant={AppLinkVariant.ROUTE}
                      to={`${pathCatalogGroups}${sub.to}`}
                      onClick={handleLinkClick}
                    >
                      {sub.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    );
  };

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <nav className={cls.nav}>
        <ul className={cls.itemList}>
          <Logotype Logo={HeaderIcon} />

          {menuItems.map((item, idx) => {
            const hasDropdown = !!item.dropdownItems;
            const isActive = activeIndex === idx;
            const isDimmed = activeIndex !== null && activeIndex !== idx;

            return (
              <li
                key={idx}
                className={classNames(cls.item, {
                  [cls.active]: isActive,
                  [cls.dimmed]: isDimmed,
                })}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {item.to ? (
                  <AppLink variant={AppLinkVariant.ROUTE} className={cls.label} to={item.to}>
                    {item.label}
                  </AppLink>
                ) : (
                  <h2 className={cls.label} onClick={() => hasDropdown && handleLabelClick(idx)}>
                    {item.label}
                  </h2>
                )}

                {hasDropdown && isActive && renderDropdownItems(item.dropdownItems)}
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
