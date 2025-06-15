import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;
  useDocumentTitle('Страница не найдена');

  return <div className={classNames(cls.NotFoundPage, {}, [className])}>NOT FOUND PAGE</div>;
});

NotFoundPage.displayName = 'NotFoundPage';
