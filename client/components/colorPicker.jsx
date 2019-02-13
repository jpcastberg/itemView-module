import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {

  generateOptions() {
    const { options, handleSelectOption } = this.props;
    if (options) {
      return options.map((option, idx) => (
        <img
          className="item-option"
          src={option.color.icon}
          alt=""
          onClick={() => {
            handleSelectOption(idx);
          }}
        />
      ));
    }
    return null;
  }

  render() {
    const { color } = this.props;
    const itemColors = this.generateOptions();
    return (
      <div>
        <legend>
          <strong>
            Color:
          </strong>
          <span>{` ${color.colorName}`}</span>
        </legend>
        <div className="item-colors">
          {itemColors}
        </div>
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  color: {},
};

ColorPicker.propTypes = {
  color: PropTypes.objectOf(PropTypes.string),
};
