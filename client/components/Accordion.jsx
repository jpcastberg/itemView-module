import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  generateClassName() {
    let className = '';
    const { isDisplayed } = this.state;
    if (isDisplayed) {
      className = 'accordian-content-displayed';
    } else {
      className = 'accordian-content-hidden';
    }
    return className;
  }

  toggleDisplay() {
    const { isDisplayed } = this.state;
    this.setState({ isDisplayed: !isDisplayed });
  }

  render() {
    return (
      <div onClick={() => {
        this.toggleDisplay();
      }}>
        CONTAINER
        <div className={this.generateClassName()}>
          This is a test!!!!
        </div>
        Test content
      </div>
    );
  }
}

Accordion.defaultProps = {
  prop: {},
};

Accordion.propTypes = {
  prop: PropTypes,
};
