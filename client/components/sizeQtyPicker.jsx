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
        className += ' size-option-out-of-stock';
      }
      if (size === selectedSize) {
        className += ' size-option-selected';
      }
      return (
        <li className={className}>
          <span>
            {size.toUpperCase()}
          </span>
        </li>
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
        <strong className="label">
          Size:
        </strong>
        <ul id="size-list">
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
