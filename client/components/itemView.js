import React, { Component } from 'react';
import PhotoView from './photoView.js';

export default class ItemView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       item: {}
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3002/656884').then((data) => {
  //     return data.json();
  //   }).then((json) => {
  //     console.log(json);
  //   });
  // }
  
  render() {
    return (
      <div>
        <PhotoView/>
      </div>
    )
  }
}
