import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import {  } from '../components';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 400,
  },
  listSection: {
    width: "100%",
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    fontSize: '11px',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 4}px`,
  },
  detailsText: {
    fontSize: '0.75em',
  }
});

class PropDetails extends React.Component {
  state = {

  };

  getRedaDetails = (prop) => {
    return [
      'South Boston Developers created this listing',
      'King Street Brokers purchased this listing',
      'Jane Smith added pictures to this listing',
      'Bob Jones was the contractor for the property',
      'Steel Square Agency purchased this listing',
      'Jack and Jessica Bumpkin purchased the property',
    ]
  }

  render() {
    const { classes, prop } = this.props;
    const redaDetails = this.getRedaDetails(prop);
    return (
      <div className={classes.root}>
        
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <div>
            <Typography variant="title" className={classes.title}>
              Property Details
            </Typography>
            </div>
            <div className={classes.demo}>
              <List className={classes.root} subheader={<li />}>
                {[0, 1].map(sectionId => (
                  <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                      <ListSubheader>{`Section ${sectionId}`}</ListSubheader>
                      {redaDetails.map(item => (
                        <ListItem key={`item-${sectionId}-${item}`}>
                          <ListItemText primary={`${item}`} />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
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