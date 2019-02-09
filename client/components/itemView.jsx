import React, { Component } from 'react';
import ImageView from './imageView.jsx';
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
    fetch('http://localhost:3002/656884').then((data) => {
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
    const { images } = this.state.currentOption;
    return (
      <div id="item-view">
        <ImageView images={images} />
      </div>
    );
  }
}
