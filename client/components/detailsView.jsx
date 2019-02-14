/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './colorPicker.jsx';
import SizeQtyPicker from './sizeQtyPicker.jsx';
import DetailsAccordion from './detailsAccordion.jsx';

export default class DetailsView extends Component {
  generateInStockMessage() {
    const { availability } = this.props.currentOption;
    if (availability === undefined) return '';
    const quantities = Object.values(availability);
    const itemIsInStock = quantities.some(quantity => quantity > 0);
    if (itemIsInStock) {
      return 'Currently in Stock';
    }
    return 'Currently Out of Stock';
  }

  generateExtendedSizesMessage() {
    const { availability } = this.props.currentOption;
    if (availability === undefined) return '';
    const extendedSizes = ['xl', 'xxl', 'xxxl'];
    const extendedSizesAreAvailable = extendedSizes.some((extendedSize) => {
      return availability[extendedSize];
    });
    if (extendedSizesAreAvailable) {
      return 'Extended Sizes Are Available';
    }
    return 'Extended Sizes Are Not Available';
  }

  render() {
    const {
      sku,
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
      optionId,
      details,
    } = this.props;
    return (
      <div id="details-view">
        <h1 className="product-meta-header">
          {name}
        </h1>
        <h1 className="product-meta-header">
          {`$${price}.00`}
        </h1>
        <div>
          <p className="product-meta">Available on orders $35.00–$1,000.00 by</p>
        </div>
        <span className="product-meta dummy-link">
          {`See All ${brand}`}
        </span>
        <p className="product-meta">{this.generateInStockMessage()}</p>
        <p className="product-meta">{this.generateExtendedSizesMessage()}</p>
        {/* REVIEWS WIDGET - NEW COMPONENT */}
        <span className="product-meta">--REVIEWS WIDGET--</span>
        {/* COLOR SELECTOR WIDGET - NEW COMPONENT */}
        <ColorPicker
          color={color}
          options={options}
          optionId={optionId}
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
        <button id="add-to-bag-button" type="button">Add to Bag</button>
        <span className="product-meta dummy-link">Add to Wish List</span>
        <button
          id="shop-related-items-button"
          type="button"
          onClick={() => {location.href='#jjc-popular'}}
        >
          Shop Related Items
        </button>
        <DetailsAccordion colorCode={color.colorCode} sku={sku} details={details} />
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
  currentOption: {
    availability: {},
  },
};

DetailsView.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onlineOnly: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.objectOf(PropTypes.string),
};
