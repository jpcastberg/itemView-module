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
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/714917').then((data) => {
      return data.json();
    }).then((item) => {
      this.setState({currentItem: item});
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

  render() {
    const { name, onlineOnly, price, options } = this.state.currentItem;
    const { images } = this.state.currentOption;
    return (
      <div id="item-view">
        <ImageView images={images} />
        <DetailsView 
          name={name} 
          onlineOnly={onlineOnly}
          price={price}
          options={options} />
      </div>
    );
  }
}
