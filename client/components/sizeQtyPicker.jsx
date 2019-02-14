/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SizeQtyPicker extends Component {
  generateSizeOptions() {
    const { availability, selectedSize, handleSelectOption } = this.props;
    const availabilityKeys = Object.keys(availability);
    const sizeOptions = availabilityKeys.map((size) => {
      let clickHandler = () => {
        handleSelectOption('size', size);
      };
      let className = 'product-meta size-option';
      if (availability[size] === 0) {
        className += ' size-option-out-of-stock';
        clickHandler = () => {};
      }
      if (size === selectedSize) {
        className += ' size-option-selected';
      }
      return (
        <li className={className} onClick={clickHandler}>
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
        <option disabled={isDisabled}>{i}</option>,
      );
    }
    return quantityOptions;
  }

  render() {
    return (
      <div>
        <div className="product-meta sub-component-header">
          <strong className="label">
            Size:
          </strong>
        </div>
        <ul id="size-list">
          {this.generateSizeOptions()}
        </ul>
        <div>
          --SIZE GUIDE--
        </div>
        <div className="product-meta sub-component-header">
          <strong className="label">
          Qty:
          </strong>
        </div>
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
  handleSelectOption: () => {},
};

SizeQtyPicker.propTypes = {
  handleSelectOption: PropTypes.func,
  availability: PropTypes.objectOf(PropTypes.number),
  selectedSize: PropTypes.string,
};
