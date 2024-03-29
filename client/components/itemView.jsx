import React, { Component } from 'react';
import ImageView from './imageView.jsx';
import DetailsView from './detailsView.jsx';
import CurrentPagePath from './currentPagePath.jsx';
import '../styles/itemView.css';

export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      currentOption: {},
      selectedSize: null,
      selectedQty: 1,
    };
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  componentDidMount() {
    return fetch('/1').then(item => item.json(),
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
      breadcrumbs,
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
        <CurrentPagePath breadcrumbs={breadcrumbs} name={name} />
        <div id="item-view-container">
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
            currentOption={currentOption}
            selectedQty={selectedQty}
            selectedSize={selectedSize}
            handleSelectOption={this.handleSelectOption}
          />
        </div>
      </div>
    );
  }
}
