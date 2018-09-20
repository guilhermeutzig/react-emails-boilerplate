import React from 'react';
import PropTypes from 'prop-types';

const Link = props => (
  <a
    href={props.href}
    className={props.className}
    title={props.title}
    style={props.style}
    target="__blank"
  >
    {props.children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

Link.defaultProps = {
  title: '',
  className: ''
};

export default Link;
