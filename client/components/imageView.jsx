import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroImage: {},
    };
    this.handleImagePickerClick = this.handleImagePickerClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { images } = this.props;
    if (images !== prevProps.images) {
      this.setDefaultHero(images);
    }
  }

  setDefaultHero(images) {
    images.some(image => (
      image.isDefault ? !this.setState({
        heroImage: image,
      }) : false
    ));
  }

  handleImagePickerClick(idx) {
    const { images } = this.props;
    this.setState({ heroImage: images[idx] });
  }

  generateImagePickerOptions() {
    const { heroImage } = this.state;
    const { images } = this.props;
    const imagePickerOptions = images.map((image, idx) => {
      let imageClass = 'image-picker-option';
      if (image === heroImage) {
        imageClass += ' picker-current-hero';
      }
      return (
        <img
          key={image._id}
          src={image.url}
          alt=""
          className={imageClass}
          onClick={() => {
            this.handleImagePickerClick(idx);
          }}
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

ImageView.defaultProps = {
  images: [],
};

ImageView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
