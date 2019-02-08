import React, { Component } from 'react';

export default class PhotoView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      photoSet: [],
      heroPhoto: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({
        photoSet: this.props.photos,
      });
      this.setHero(this.props.photos);
    }
  }

  setHero(photos) {
    photos.some((photo) => {
      if (photo.isDefault) {
        this.setState({
          heroPhoto: photo,
        });
      }
    });
  }

  render() {
    let imagePickerOptions = this.state.photoSet.map((photo, idx) => {
      return (
        <img
          key={idx}
          src={photo.url} 
          alt="" 
          data-index={idx}
          className="image-picker-option"
        />
      );
    });
    return (
      <div>
        <div>
          React is mounted!
        </div>
        <div className="image-picker">
          {imagePickerOptions}
        </div>
      </div>
    );
  }
}
