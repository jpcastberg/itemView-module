/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './colorPicker.jsx';
import SizeQtyPicker from './sizeQtyPicker.jsx';

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      selectedQty: null,
    };
  }

  generateInStockMessage() {
    const { options } = this.props;
    const itemIsInStock = options.some((option) => {
      const quantities = Object.values(option.availability);
      return quantities.some(quantity => quantity > 0);
    });
    if (itemIsInStock) {
      return 'Currently in Stock';
    }
    return 'Currently Out of Stock';
  }

  render() {
    const {
      name,
      price,
      brand,
      color,
      onlineOnly,
      options,
      handleSelectOption,
      availability,
      selectedQty,
      selectedSize,
    } = this.props;
    return (
      <div id="details-view">
        <span className="product-meta-header">{name}</span>
        <span className="product-meta-header">{`$${price}.00`}</span>
        <span className="product-meta">Available on orders $35.00–$1,000.00 by</span>
        <span>
          {`See All ${brand}`}
        </span>
        <span>{this.generateInStockMessage()}</span>
        <span>--EXTENDED SIZES AVAILABLE--</span>
        {/* REVIEWS WIDGET - NEW COMPONENT */}
        <span>--REVIEWS WIDGET--</span>
        {/* COLOR SELECTOR WIDGET - NEW COMPONENT */}
        <ColorPicker
          color={color}
          options={options}
          handleSelectOption={handleSelectOption}
        />
        {/* SIZE/QUANTITY SELECTOR WIDGET - NEW COMPONENT */}
        <SizeQtyPicker
          handleSelectOption={handleSelectOption}
          availability={availability}
          selectedQty={selectedQty}
          selectedSize={selectedSize}
        />
        {/* SHIPPING OPTIONS WIDGET - NEW COMPONENT */}
        <div>
          --SHIPPING OPTIONS--
        </div>
        <button type="button">Add to Bag</button>
        <span>Add to Wish List</span>
        <button type="button">Shop Related Items</button>
        {/* ADDITIONAL DETAILS WIDGET - NEW COMPONENT */}
        <div>--ADDITIONAL DETAILS--</div>
      </div>
    );
  }
}

DetailsView.defaultProps = {
  name: '',
  price: 0,
  onlineOnly: false,
  options: [],
  color: {
    colorName: 'default',
  },
};

DetailsView.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onlineOnly: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.objectOf(PropTypes.string),
};
