import { AppLink, AppLinkVariant } from 'shared/ui/AppLink';

import cls from './MainCarouselContent.module.scss';

interface MainCarouselContentProps {
  title?: string;
  subTitle?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
}

export const MainCarouselContent = (props: MainCarouselContentProps) => {
  const {
    title = 'Savva Mebel',
    subTitle = 'Создаём мебель вашей мечты — от эскиза до воплощения',
    description = 'Наша мастерская более 10 лет создает эксклюзивную мебель для тех, кто ценит безупречные формы, натуральные материалы и продуманные детали.\n' +
      'Каждый проект — это гармония эргономики, стиля и ваших привычек',
    linkText = 'Перейти в каталог',
    linkUrl = '',
    className,
  } = props;

  return (
    <div className={cls.Content}>
      <h2 className={cls.title}>{title}</h2>
      <h3 className={cls.subTitle}>{subTitle}</h3>
      <p className={cls.description}>{description}</p>

      <AppLink className={cls.linkInfo} variant={AppLinkVariant.ROUTE} to={linkUrl || '/catalog'}>
        <p className={cls.linkText}>{linkText}</p>
      </AppLink>
    </div>
  );
};

MainCarouselContent.displayName = 'MainCarouselContent';
