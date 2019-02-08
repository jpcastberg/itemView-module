import React, { Component } from 'react';
import PhotoView from './photoView.jsx';

export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewedItem: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/656884').then((data) => {
      return data.json();
    }).then((item) => {
      this.setState({viewedItem: item});
    });
  }

  render() {
    return (
      <div>
        <PhotoView />
      </div>
    );
  }
}
