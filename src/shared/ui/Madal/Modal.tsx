import { ReactNode, useEffect } from 'react';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;

  console.log('Props:', props);

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
      <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
        <button className={cls.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.displayName = 'Madal';
