import React from 'react';
import PropTypes from 'prop-types';

const Layout = props => (
  <table className="grid" align="center" width="600">
    <tbody>{props.children}</tbody>
  </table>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
