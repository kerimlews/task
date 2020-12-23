import React from 'react';
import Navigation from 'components/Navigation';

const Layout = ({ children, title }) => (
  <>
    <Navigation />
    <div className="container">
      {
        title && (
          <div className="row">
            <h3 className="col-12 border-bottom">{title}</h3>
          </div>
        )
      }
      <div className="row">
        {children}
      </div>
    </div>
  </>
);

export default Layout;
