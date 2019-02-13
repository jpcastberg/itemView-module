import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SizeQtyPicker extends Component {

  generateSizeOptions() {
    const { availability, selectedSize } = this.props;
    const availabilityKeys = Object.keys(availability);
    const sizeOptions = availabilityKeys.map((size) => {
      let className = 'size-option';
      if (availability[size] === 0) {
        className += ' out-of-stock';
      }
      if (size === selectedSize) {
        className += '-selected';
      }
      return (
        <li className={className}>{size.toUpperCase()}</li>
      );
    });
    return (
      <ul>
        {sizeOptions}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.generateSizeOptions()}
      </div>
    );
  }
}

SizeQtyPicker.defaultProps = {
  availability: {},
  selectedSize: '',
};

SizeQtyPicker.propTypes = {
  availability: PropTypes.objectOf(PropTypes.number),
  selectedSize: PropTypes.string,
};
