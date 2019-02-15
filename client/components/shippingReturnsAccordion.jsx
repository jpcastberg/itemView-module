import React, { Component } from 'react';

export default class ShippingReturnsAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  generateContentClassName(contentName) {
    let className = contentName;
    const { isDisplayed } = this.state;
    if (isDisplayed) {
      className += '-content-displayed';
    } else {
      className += '-content-hidden';
    }
    return className;
  }

  toggleDisplay() {
    const { isDisplayed } = this.state;
    this.setState({ isDisplayed: !isDisplayed });
  }

  render() {
    return (
      <div className="accordion">
        <div>
          <button className="accordion-button" type="button" onClick={() => { this.toggleDisplay(); }}>
          Shipping + Returns
            <img className={this.generateContentClassName('accordion-arrow')} src="https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/icon-accordion-arrow.svg" alt="" />
          </button>
        </div>
        <div className={this.generateContentClassName('accordion')}>
          <img id="shipping-returns-image" src="https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/shipping%2Breturns+accordion+content.png" alt="" />
        </div>
        <div className="line" />
      </div>
    );
  }
}
