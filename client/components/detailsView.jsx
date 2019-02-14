/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './colorPicker.jsx';
import SizeQtyPicker from './sizeQtyPicker.jsx';
import DetailsAccordion from './detailsAccordion.jsx';

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToBagWasClicked: false,
      itemAddedToBag: false,
    };
    this.handleBagButtonClick = this.handleBagButtonClick.bind(this);
  }

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

  sizeIsSelected() {
    const { selectedSize } = this.props;
    if (selectedSize) return true;
    return false;
  }

  generateAddToBagButtonText() {
    const { itemAddedToBag } = this.state;
    if (itemAddedToBag) {
      setTimeout((() => {
        this.setState({ itemAddedToBag: false, addToBagWasClicked: false });
      }).bind(this), 3000);
      return 'Added to Bag';
    }
    return 'Add to Bag';
  }

  generateSizeNotSelectedError() {
    const { addToBagWasClicked } = this.state;
    if (addToBagWasClicked && !this.sizeIsSelected()) {
      return (
        <div>
          <p id="size-not-selected-error">
            Size must be selected to add this item to your bag.
          </p>
        </div>
      );
    }
    return null;
  }

  handleBagButtonClick() {
    this.setState({ addToBagWasClicked: true });
    if (this.sizeIsSelected()) {
      this.setState({ itemAddedToBag: true });
    }
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
        {this.generateSizeNotSelectedError()}
        <button id="add-to-bag-button" type="button" onClick={this.handleBagButtonClick}>
          {this.generateAddToBagButtonText()}
        </button>
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
