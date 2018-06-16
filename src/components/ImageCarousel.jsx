import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { withStyles } from '@material-ui/core/styles';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

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
      <div className="content">
        <Slider {...settings}>
          { (images || []).map((image, index) => {
             return (
              <div key={index} >
                <img src={image} />
              </div>
             );
            }) 
          }
        </Slider>
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageCarousel;