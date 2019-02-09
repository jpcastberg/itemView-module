import React, { Component } from 'react'

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      onlineOnly: false,
      price: 0,
      options: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        name: this.props.name,
        onlineOnly: this.props.onlineOnly,
        price: this.props.price,
        options: this.props.options,
      });
    }
  }

  render() {
    const { name, onlineOnly, price, options } = this.props;
    return (
      <div id="details-view">
        <h1>{name}</h1>
      </div>
    );
  }
}
