import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoutes, RoutesModel } from './routes';

const NotFoundPage = () => {
  return <h1>Página não encontrada</h1>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            {AppRoutes &&
              AppRoutes.map((route: RoutesModel) => (
                <Route key={route.path} path={route.path} exact component={route.component} />
              ))}
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
