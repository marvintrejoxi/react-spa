import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Header';

const SiteLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="SiteLayout">
        <div className="Header">
          <Header />
        </div>
          <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  )
};

export default SiteLayout;