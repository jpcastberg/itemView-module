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

  getDefaultItemOption(item) {
    item.options.some((option) => {
      if (option.isDefault) {
        this.setState({
          currentOption: option,
        });
        return true;
      }
      return false;
    });
  }

  handleSelectOption(optionType, selectedOption) {
    const newState = {};
    if (optionType === 'color') {
      const { currentItem } = this.state;
      newState.currentOption = currentItem.options[selectedOption];
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
    console.log(availability);
    return (
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
    );
  }
}
