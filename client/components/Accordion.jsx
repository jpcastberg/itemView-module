import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
    };
  }

  render() {
    return (
      <div>
        This is a test!!!!
      </div>
    )
  }
}

Accordion.defaultProps = {
  prop: {},
};

Accordion.propTypes = {
  prop: PropTypes,
};
