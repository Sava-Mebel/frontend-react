import React, { Suspense } from 'react';

import AppRouter from 'app/provider/routerProvider/ui/AppRouter';

function App() {
  return (
    <div className={'app'}>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

App.displayName = 'App';

export default App;
