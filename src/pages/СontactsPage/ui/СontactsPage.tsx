import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

interface ContactsPageProps {
  className?: string;
}

export const ContactsPage = memo((props: ContactsPageProps) => {
  const { className } = props;

  return <div className={classNames('ContactsPage', {}, [className])}>Contacts Page</div>;
});

ContactsPage.displayName = 'СontactsPage';
