import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import MainContent from '../components/MainContent/MainContent';
import MainProvider from '../providers/MainProvider';

interface MyRouteProps {
  component: any;
  layout: any;
  path: string;
  rest?: any;
}

const PrivateRoute: React.FC<MyRouteProps & RouteProps> = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  const isAuth = true;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isAuth ? (
          <MainProvider>
            <Layout>
              <Component {...matchProps} />
            </Layout>
          </MainProvider>
        ) : (
          <Redirect to='/auth' />
        )
      }
    />
  );
};

export default PrivateRoute;
