import React, { Component } from 'react';

export default class ImageView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      imageSet: [],
      heroImage: {},
    };
    this.handleImagePickerClick = this.handleImagePickerClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        imageSet: this.props.images,
      });
      this.setHero(this.props.images);
    }
  }

  setHero(images) {
    images.some((image) => {
      if (image.isDefault) {
        this.setState({
          heroImage: image,
        });
        return true;
      }
      return false;
    });
  }

  handleImagePickerClick(event) {
    let index = event.nativeEvent.target.getAttribute('data-index');
    this.setState({heroImage: this.state.imageSet[index]});
  }

  generateImagePickerOptions() {
    const imagePickerOptions = this.state.imageSet.map((image, idx) => {
      let imageClass = 'image-picker-option';
      if (image === this.state.heroImage) {
        imageClass += ' hero-image';
      }
      return (
        <img
          key={idx}
          src={image.url}
          alt=""
          data-index={idx}
          className={imageClass}
          onClick={this.handleImagePickerClick}
        />
      );
    });
    return imagePickerOptions;
  }

  render() {
    const imagePickerOptions = this.generateImagePickerOptions();
    const { heroImage } = this.state;
    return (
      <div id="image-view">
        <div className="image-picker">
          {imagePickerOptions}
        </div>
        <img src={heroImage.url} alt="" id="hero-image" />
      </div>
    );
  }
}
