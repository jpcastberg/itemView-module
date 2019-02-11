import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsView extends Component {
  generateOptions() {
    const { options } = this.props;
    return options.map(option => (
      <img
        className="option"
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
    let optionEles = null;
    if (options) {
      optionEles = this.generateOptions();
    }
    return (
      <div id="details-view">
        <h1>{name}</h1>
        <p>{`$${price}.00`}</p>
        <span>Options:</span>
        {optionEles}
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
