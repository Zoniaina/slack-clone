import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

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
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to='/auth' />
        )
      }
    />
  );
};

export default PrivateRoute;
