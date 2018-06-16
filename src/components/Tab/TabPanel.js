import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Grid } from 'material-ui';

import Typography from 'material-ui/Typography';
import { greenCardColor, darkModeColor } from "../../assets/jss/material-dashboard-react.jsx";

import ItemGrid from '../Grid/ItemGrid.jsx';
import ImageCarousel from "../ImageCarousel.jsx"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: darkModeColor,
  },
  tabsRoot: {
    
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    color: "#fff",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});


class TabPanel extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, images } = this.props;
    const { value } = this.state;
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
      <div className={classes.root}>
        <div>
          <h3>Pictures of this property</h3>
          <ImageCarousel images={images} />
        </div>
      </div>
    );
  }
}

TabPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

export default withStyles(styles)(TabPanel);
