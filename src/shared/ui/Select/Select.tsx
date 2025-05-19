import { useState, useRef, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import DownIcon from 'shared/assets/icon/down.svg';

import cls from './Select.module.scss';

interface SelectProps {
  className?: string;
  options: string[];
}

export const Select = (props: SelectProps) => {
  const { className, options } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])} ref={ref}>
      <div className={classNames(cls.Select, {}, [])} role="listbox" aria-expanded={isOpen}>
        <div className={classNames(cls.trigger, { [cls.opened]: isOpen })} onClick={toggleOpen}>
          {selected || 'Выберите опцию'}
          <DownIcon className={classNames(cls.icon, { [cls.opened]: isOpen })} />
        </div>

        {isOpen && (
          <ul className={classNames(cls.options, { [cls.opened]: isOpen })}>
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={selected === opt}
                className={cls.option}
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Select.displayName = 'Select';
