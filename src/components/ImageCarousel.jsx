import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import { withStyles } from '@material-ui/core/styles';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class ImageCarousel extends Component {
  render() {
    const { images } = this.props;
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${images[i]}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
      { images.length ? (
        <Carousel showThumbs={false}>
          { (images || []).map((image, index) => {
            return ( 
              <div key={index}>
                <img src={(image.indexOf('http') < 0 ? require(`../${image}`) : image)} />
                <p className="legend">Placeholder</p>
              </div>
            );
          })
        }
        </Carousel>
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

export default withStyles(styles)(ImageCarousel);