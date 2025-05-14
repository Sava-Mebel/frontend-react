import React, { Suspense } from 'react';

import AppRouter from 'app/provider/routerProvider/ui/AppRouter';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

function App() {
  return (
    <div className={'app'}>
      <Header />
      <main className={'app__main'}>
        <Suspense fallback={null}>
          <AppRouter />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

App.displayName = 'App';

export default App;
