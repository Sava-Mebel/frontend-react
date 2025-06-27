import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Madal';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './ContactClientModal.module.scss';

export interface ContactClientModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ContactClientModal = (props: ContactClientModalProps) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Хотите заказать мебель или проконсультироваться?"
      className={classNames('', {}, [className])}
    >
      <div className={cls.content}>
        <p>
          🔹 Напишите нам в Telegram {'\u2192'}{' '}
          <AppLink
            variant={AppLinkVariant.EXTERNAL}
            href="https://t.me/your_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={cls.link1}
          >
            Перейти в чат
          </AppLink>
        </p>

        <p>
          📞 Позвоните нам:
          <AppLink className={cls.phone} variant={AppLinkVariant.EXTERNAL} href="tel:+7XXXXXXXXXX">
            +7 XXX XXX-XX-XX
          </AppLink>
        </p>

        <p>💡 Заявки до 18:00 обрабатываем сегодня!</p>

        <div className={cls.socials}>
          <span>Наши работы:</span>
          <div className={cls.links}>
            <AppLink
              className={cls.link}
              variant={AppLinkVariant.EXTERNAL}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </AppLink>
            <AppLink
              className={cls.link}
              variant={AppLinkVariant.EXTERNAL}
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ВКонтакте
            </AppLink>
            <AppLink
              className={cls.link}
              variant={AppLinkVariant.EXTERNAL}
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram-канал
            </AppLink>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ContactClientModal.displayName = 'ContactClientModal';
