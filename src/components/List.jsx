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

import { TaskItem } from '../components';

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
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class TaskList extends React.Component {
  state = {
    secondary: true,
  };

  render() {
    const { classes } = this.props;
    const { secondary } = this.state;

    return (
      <div className={classes.root}>
        
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Typography variant="title" className={classes.title}>
              Property Wallet Strength
            </Typography>
            <div className={classes.demo}>
              <List>
                  <TaskItem />

                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Upload Floorplan"
                      secondary={secondary ? 'Let everyone know the layout of your property' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Done">
                        <DoneIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Upload Property Data"
                      secondary={secondary ? 'What makes your property valuable?' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Done">
                        <DoneIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Get Verified"
                      secondary={secondary ? 'Prove that you are the owner or guardian of this property' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Done">
                        <DoneIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);