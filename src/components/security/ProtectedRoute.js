import React from "react";
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  authenticated: auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {console.log("auth::"+auth);
       return  auth?<Component {...rest} {...props} />:<Redirect to="/home" />;
      }}
    />
  );
};

export default ProtectedRoute;
