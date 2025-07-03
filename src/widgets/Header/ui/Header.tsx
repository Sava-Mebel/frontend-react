import { memo, useState, useRef, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { Logotype } from 'shared/ui/Logotype/Logotype';
import HeaderIcon from 'shared/assets/logo/header-logo.svg';
import HomeIcon from 'shared/assets/icon/home.svg';
import { Button, ButtonThemeTypes } from 'shared/ui/Button/Button';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';
import { DropdownItem, menuItems } from 'widgets/Header/model/types/menuItems';
import { ContactClientModal } from 'widgets/modal';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

import cls from './Header.module.scss';

export enum ThemeTypes {
  NONE = 'none',
  GREY = 'grey',
}

interface HeaderProps {
  className?: string;
  theme?: ThemeTypes;
}

export const Header = memo((props: HeaderProps) => {
  const { className, theme = ThemeTypes.NONE } = props;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [opened, setOpened] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const pathCatalogGroups = '/catalog/groups';

  const closeDropdown = useCallback(() => {
    setActiveIndex(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

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
  }, [closeDropdown]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const item = menuItems[index];
    if (item?.dropdownItems) {
      setActiveIndex(index);
    } else {
      closeDropdown();
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 300);
  };

  const handleLabelClick = (index: number) => {
    if (!menuItems[index].dropdownItems) return;
    const isSame = activeIndex === index;
    setActiveIndex(isSame ? null : index);
  };

  const handleLinkClick = () => {
    closeDropdown();
  };

  const handleModalOpen = () => {
    setOpened((prevState) => !prevState);
  };

  const renderDropdownItems = (items: DropdownItem[] = []) => (
    <div className={classNames(cls.dropdown, { [cls.opened]: isDropdownOpened })} ref={dropdownRef}>
      {items.map((item, index) => {
        if (item.type === 'item') {
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

        if (item.type === 'group') {
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

  const isDropdownOpened = activeIndex !== null && !!menuItems[activeIndex]?.dropdownItems;

  return (
    <header
      className={classNames(cls.Header, { [cls[theme]]: theme, [cls.opened]: isDropdownOpened }, [
        className,
      ])}
    >
      <nav className={cls.nav} onMouseLeave={handleMouseLeave}>
        <ul className={cls.itemList}>
          <Logotype Logo={HeaderIcon} />

          <AppLink
            className={classNames(cls.link, {
              [cls.active]: location.pathname === RoutePath.main,
              [cls.dimmed]: activeIndex !== null && location.pathname !== RoutePath.main,
            })}
            variant={AppLinkVariant.ROUTE}
            to={RoutePath.main}
            onMouseEnter={closeDropdown}
          >
            <HomeIcon className={cls.homeIcon} />
            <span className={cls.linkLabel}>Главная</span>
          </AppLink>

          {menuItems.map((item, idx) => {
            const hasDropdown = !!item.dropdownItems;
            const isActive = activeIndex === idx;
            const isDimmed = activeIndex !== null && activeIndex !== idx;
            const isCurrentPage = location.pathname === item.to;

            return (
              <li
                key={idx}
                className={classNames(cls.item, {
                  [cls.active]: isActive,
                  [cls.dimmed]: isDimmed,
                })}
                onMouseEnter={() => handleMouseEnter(idx)}
              >
                {item.to ? (
                  <AppLink
                    variant={AppLinkVariant.ROUTE}
                    className={classNames(cls.link, {
                      [cls.active]: isCurrentPage || isActive, // подсветка лейбла рыжим при открытом дропе или текущей странице
                    })}
                    to={item.to}
                    onClick={() => handleLabelClick(idx)}
                  >
                    {item.label}
                  </AppLink>
                ) : (
                  <h2
                    className={classNames(cls.label, {
                      [cls.active]: isActive, // подсветка лейбла, если дроп открыт
                    })}
                    onClick={() => handleLabelClick(idx)}
                  >
                    {item.label}
                  </h2>
                )}

                {hasDropdown && isActive && renderDropdownItems(item.dropdownItems)}
              </li>
            );
          })}

          <Button theme={ButtonThemeTypes.OUTLINE} onClick={handleModalOpen}>
            Позвонить мне
          </Button>
        </ul>
      </nav>
      <ContactClientModal isOpen={opened} onClose={handleModalOpen} />
    </header>
  );
});

Header.displayName = 'Header';
