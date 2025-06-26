import { ReactNode, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import CloseIcon from '../../../assets/icon/close.svg';
import cls from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, className, title } = props;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={cls.overlay} onClick={onClose}>
      <div className={classNames(cls.modal, {}, [className])} onClick={(e) => e.stopPropagation()}>
        <div className={cls.wrapper}>
          <div className={cls.contentBlock}>
            {title && <h2 className={cls.title}>{title}</h2>}
            <div className={cls.content}>{children}</div>
          </div>

          <div className={cls.sideBlock}>
            <button className={cls.closeButton} onClick={onClose} aria-label="Закрыть">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
