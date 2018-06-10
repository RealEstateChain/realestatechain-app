import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Grid } from 'material-ui';

import Typography from 'material-ui/Typography';
import { greenCardColor, darkModeColor } from "../../assets/jss/material-dashboard-react.jsx";

import ItemGrid from '../Grid/ItemGrid.jsx';

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

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Pictures"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Floorplan"
          />
        </Tabs>
        {value === 0 && 
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <img width="100%" src={images[0]}/> 
            </ItemGrid>
          </Grid>}
        {value === 1 && <Typography component="div" style={{ padding: 8 * 3 }}>No floor plan exists yet. Upload one now!</Typography>}
      </div>
    );
  }
}

TabPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabPanel);
