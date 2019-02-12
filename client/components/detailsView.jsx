import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsView extends Component {
  generateOptions() {
    const { options } = this.props;
    return options.map(option => (
      <img
        className="item-option"
        src="https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48556245_040_s"
        alt=""
      />
    ));
  }

  render() {
    const {
      name,
      price,
      onlineOnly,
      options,
    } = this.props;
    let itemColors = null;
    if (options) {
      itemColors = this.generateOptions();
    }
    return (
      <div id="details-view">
        <span className="product-meta-header">{name}</span>
        <span className="product-meta-header">{`$${price}.00`}</span>
        <span className="product-meta">Available on orders $35.00–$1,000.00 by</span>
        <span href="">See all --BRAND--</span>
        <span>--IN STOCK--</span>
        <span>--EXTENDED SIZES AVAILABLE--</span>
        {/* REVIEWS WIDGET - NEW COMPONENT */}
        <span>--REVIEWS WIDGET--</span>
        {/* COLOR SELECTOR WIDGET - NEW COMPONENT */}
        <legend>
          Color:
          <span>--COLOR--</span>
        </legend>
        <div className="item-colors">
          {itemColors}
        </div>
        {/* SIZE SELECTOR WIDGET - NEW COMPONENT */}
        <legend>
          Size:
          <div>
            --SIZE PICKER--
          </div>
          <div>
            --SIZE GUIDE--
          </div>
        </legend>
        {/* QUANTITY SELECTOR WIDGET - NEW COMPONENT */}
        <label htmlFor="quantity-selector">Qty:</label>
        <select name="" id="quantity-selector">
          <option value="sup yo!">ayy</option>
        </select>
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
};

DetailsView.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onlineOnly: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
};
