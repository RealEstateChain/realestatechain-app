import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DoneIcon from '@material-ui/icons/Done';


//import {  } from '../components';


const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 4}px`,
  },
});

class PropDetails extends React.Component {
  state = {

  };

  render() {
    const { classes, prop } = this.props;

    return (
      <div className={classes.root}>
        
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Typography variant="title" className={classes.title}>
              Property Details
            </Typography>
            <div className={classes.demo}>
              <List>
                  
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PropDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  prop: PropTypes.object.isRequired,
};

export default withStyles(styles)(PropDetails);