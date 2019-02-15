import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsAccordion extends Component {
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
    const { sku, details, colorCode } = this.props;
    return (
      <div className="accordion">
        <div className="line" />
        <div>
          <button className="accordion-button" type="button" onClick={() => { this.toggleDisplay(); }}>
          Details
            <img className={this.generateContentClassName('accordion-arrow')} src="https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/icon-accordion-arrow.svg" alt=""/>
          </button>
        </div>
        <div className={this.generateContentClassName('accordion')}>
          <div>
            <p className="product-meta">
              Product Sku: {sku} ; Color Code: {colorCode}
            </p>
            <br />
            <p className="product-meta">
              {details.description}
            </p>
          </div>
        </div>
        <div className="line" />
      </div>
    );
  }
}

DetailsAccordion.defaultProps = {
  details: {
    description: '',
  },
};

DetailsAccordion.propTypes = {
  prop: PropTypes,
};
