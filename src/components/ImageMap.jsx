

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageMap extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
  }

  showDetails = (target) => {
    // show details page for the corresponding image area selected
    console.log(target);
    alert(target);
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <img src="https://thumbs.dreamstime.com/b/cartoon-family-house-interior-living-rooms-furniture-51914830.jpg" usemap="#image-map" />

        <map name="image-map">
            <area target="_blank" alt="Storage Space" title="Storage Space" name="storage" href="#" onClick={(target) => this.showDetails("storage")} coords="274,312,116,153" shape="rect" />
            <area target="_blank" alt="Kitchen" title="Kitchen" name="kitchen" onClick={(target) => this.showDetails("kitchen")} coords="332,512,2,316" shape="rect" />
            <area target="_blank" alt="Living Room" title="Living Room" name="living-room" onClick={(target) => this.showDetails("living-room")} coords="336,318,618,514" shape="rect" />
            <area target="_blank" alt="Bathrooms" title="Bathrooms" name="bathrooms" onClick={(target) => this.showDetails("bathrooms")} coords="572,146,797,316" shape="rect" />
            <area target="_blank" alt="Bedrooms" title="Bedrooms" name="bedrooms" onClick={(target) => this.showDetails("bedrooms")} coords="278,144,566,313" shape="rect" />
            <area target="_blank" alt="Outdoor Space" title="Outdoor Space" name="outdoors" onClick={(target) => this.showDetails("outdoors")} name="outdoor" coords="117,314,2,76" shape="rect" />
            <area target="_blank" alt="Garage" title="Garage" name="garage" onClick={(target) => this.showDetails("garage")} coords="619,318,798,515" shape="rect" />
        </map>
      </div>
    )
  }
}

ImageMap.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageMap;