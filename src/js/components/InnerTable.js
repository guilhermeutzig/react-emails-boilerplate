import React from 'react';
import PropTypes from 'prop-types';

const InnerTable = props => (
  <table className="w-100" valign="top">
    <tbody>
      <tr>{props.children}</tr>
    </tbody>
  </table>
);

InnerTable.propTypes = {
  children: PropTypes.node.isRequired
};

export default InnerTable;
