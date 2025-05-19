import React, { Suspense, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import AppRouter from 'app/provider/routerProvider/ui/AppRouter';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

function App() {
  const { pathname } = useLocation();

  const footerMode = useMemo(() => {
    return pathname === '/' ? 'fixed' : 'static';
  }, [pathname]);

  return (
    <div className={'app'}>
      <Header />
      <main className={`app__main ${footerMode === 'fixed' ? 'with-fixed-footer' : ''}`}>
        <Suspense fallback={null}>
          <AppRouter />
        </Suspense>
      </main>
      <Footer mode={footerMode} />
    </div>
  );
}

App.displayName = 'App';

export default App;
