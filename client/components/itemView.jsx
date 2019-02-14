import React, { Component } from 'react';
import ImageView from './imageView.jsx';
import DetailsView from './detailsView.jsx';
import './itemView.css';

export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      currentOption: {},
      selectedSize: null,
      selectedQty: null,
    };
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3002/41385576').then(item => item.json(),
      error => console.error(error)).then((item) => {
      this.setState({ currentItem: item });
      this.getDefaultItemOption(item);
    });
  }

  // Finds and selects the first option labelled 'isDefault' from the item object
  getDefaultItemOption(item) {
    item.options.some(option => (
      option.isDefault ? !this.setState({
        currentOption: option,
      }) : false
    ));
  }

  handleSelectOption(optionType, selectedOption) {
    const newState = {};
    if (optionType === 'color') {
      const { currentItem, selectedSize } = this.state;
      newState.currentOption = currentItem.options[selectedOption];
      // If the newly selected color is out of stock on the chosen size, deselect it
      if (newState.currentOption.availability[selectedSize] === 0) {
        this.setState({ selectedSize: null });
      }
    } else if (optionType === 'size') {
      newState.selectedSize = selectedOption;
    } else if (optionType === 'qty') {
      newState.selectedQty = selectedOption;
    }
    this.setState(newState);
  }

  render() {
    const {
      currentItem,
      currentOption,
      selectedQty,
      selectedSize,
    } = this.state;
    const {
      id,
      brand,
      name,
      onlineOnly,
      reviews,
      details,
      price,
      options,
    } = currentItem;
    const {
      images,
      optionId,
      color,
      availability,
    } = currentOption;
    return (
      <div>
        <img
          src="https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/above.png"
          alt=""
          className="dummy-image"
        />
        <div id="item-view">
          <ImageView images={images} />
          <DetailsView
            sku={id}
            brand={brand}
            reviews={reviews}
            details={details}
            color={color}
            availability={availability}
            optionId={optionId}
            name={name}
            onlineOnly={onlineOnly}
            price={price}
            options={options}
            selectedQty={selectedQty}
            selectedSize={selectedSize}
            handleSelectOption={this.handleSelectOption}
          />
        </div>
        <img
          src="https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/below.png"
          alt=""
          className="dummy-image"
        />
      </div>
    );
  }
}
