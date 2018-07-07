import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Grid } from 'material-ui';

import Typography from 'material-ui/Typography';
import { greenCardColor, darkModeColor } from "../../assets/jss/material-dashboard-react.jsx";

import ItemGrid from '../Grid/ItemGrid.jsx';
import ImageCarousel from "../ImageCarousel.jsx";

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
  title: {
    margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 4}px`,
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
    const { classes, images, title } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="title"  className={classes.title}>
          {title ? title : '\u00A0'}
        </Typography>
        <ImageCarousel images={images} />
      </div>
    );
  }
}

TabPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

export default withStyles(styles)(TabPanel);
