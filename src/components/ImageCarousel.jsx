import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const { images, title } = this.props;
    const galleryImages = images.map((image, index) => {
      return {
        src: image,
        width: 4, 
        height: 3 
      }
    });

    return (
      <div>
      { images.length ? (
        <div>
        <Gallery photos={galleryImages} onClick={this.openLightbox} />
        <Lightbox images={galleryImages}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        </div>
      ) : (
        <span> No images </span>
      )}
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageCarousel;