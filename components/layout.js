import React from 'react';
import Header from './header';
import Navigation from './navigation';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="content-wrapper">
        <Navigation />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;