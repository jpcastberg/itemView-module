import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {

  generateOptions() {
    const { options, handleSelectOption, optionId } = this.props;
    if (options) {
      return options.map((option, idx) => {
        let spanClass = 'item-option-wrapper';
        if (option.optionId === optionId) {
          spanClass += ' item-option-wrapper-selected';
        }
        return (
          <span className={spanClass}>
            <img
              className="item-option"
              src={option.color.icon}
              alt=""
              onClick={() => {
                handleSelectOption('color', idx);
              }}
            />
          </span>
        );
      });
    }
    return null;
  }

  render() {
    const { color } = this.props;
    const itemColors = this.generateOptions();
    return (
      <div>
        <strong className="label">
          Color:
        </strong>
        <span>{` ${color.colorName}`}</span>
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
