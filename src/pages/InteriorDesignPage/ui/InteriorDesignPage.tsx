import { memo } from 'react';

interface InteriorDesignPageProps {
  className?: string;
}

const InteriorDesignPage = memo((props: InteriorDesignPageProps) => {
  const { className } = props;

  return <>PAGE: InteriorDesignPage</>;
});

InteriorDesignPage.displayName = 'MainPage';

export default InteriorDesignPage;
