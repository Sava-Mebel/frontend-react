import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product';

interface ContactsPageProps {
  className?: string;
}

export const ContactsPage = memo((props: ContactsPageProps) => {
  const { className } = props;

  return (
    <div className={classNames('ContactsPage', {}, [className])}>
      Contacts Page
      {<Product />}
    </div>
  );
});

ContactsPage.displayName = 'СontactsPage';
