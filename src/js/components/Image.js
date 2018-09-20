import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string
  };

  static defaultProps = {
    className: '',
    alt: 'Image'
  };

  getURL() {
    const { src, height, width, folder } = this.props;
    if (process.env.NODE_ENV == 'staging')
      return `http://placehold.it/${width}x${height}`;
    if (process.env.NODE_ENV == 'build') return `img/${src}`;
    return `/${folder}/img/${src}`;
  }

  render() {
    const { className, alt } = this.props;
    const imgUrl = this.getURL();

    return <img src={imgUrl} alt={alt} className={className} />;
  }
}

export default Image;
