/* eslint-disable jsx-a11y/label-has-associated-control */
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
    return sizeOptions;
  }

  generateQuantityOptions() {
    const { availability, selectedSize } = this.props;
    const quantityOptions = [];
    let stockCountOfSelected;
    if (!selectedSize) {
      stockCountOfSelected = 1;
    } else {
      stockCountOfSelected = availability[selectedSize];
    }
    for (let i = 1; i <= 10; i++) {
      const isDisabled = i > stockCountOfSelected;
      quantityOptions.push(
        <option disabled={isDisabled}>{i}</option>
      );
    }
    return quantityOptions;
  }

  render() {
    return (
      <div>
        <legend>
          Size:
        </legend>
        <ul>
          {this.generateSizeOptions()}
        </ul>
        <div>
          --SIZE GUIDE--
        </div>
        <div>Qty:</div>
        <select name="" id="quantity-selector">
          {this.generateQuantityOptions()}
        </select>
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
