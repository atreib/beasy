import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoutes, RoutesModel } from './routes';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import LoadingPage from './pages/loading/LoadingPage';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beasy</title>
        <style type="text/css">{`
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100%;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                          sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </Helmet>
      <AppContainer>
        <BrowserRouter>
          <Suspense
            fallback={
              <LoadingPage>
                <>Carregando</>
              </LoadingPage>
            }
          >
            <Switch>
              {AppRoutes &&
                AppRoutes.map((route: RoutesModel) => (
                  <Route key={route.path} path={route.path} exact component={route.component} />
                ))}
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </AppContainer>
    </>
  );
}

export default App;
