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

import { TaskItem, UploadModal, PropDataModal } from '../components';


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

class TaskList extends React.Component {
  state = {
    secondary: true,
    uploadModalIsOpen: false,
    dataModalIsOpen: false,
  };

  handleTask = task => () => {
    if (task.indexOf('upload') > -1) {
      this.setState({ uploadModalIsOpen: true });
    }
    else if (task.indexOf('data') > -1) {
      this.setState({ dataModalIsOpen: true });
    }
  }

  handleModalClose = (modalType) => {
    switch(modalType) {
      case 'upload': this.setState({ uploadModalIsOpen: false });
        break;
      case 'data': this.setState({ dataModalIsOpen: false });
        break;
    }
    
  }

  render() {
    const { classes, user, prop, handleFileUpload, handleFieldChange, ...rest } = this.props;
    const { secondary, uploadModalIsOpen, dataModalIsOpen } = this.state;

    return (
      <div className={classes.root}>
        
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <Typography variant="title" className={classes.title}>
              Property Wallet Strength
            </Typography>
            <div className={classes.demo}>
              <List>
                  <TaskItem 
                    primary="Upload Photos"
                    secondary={this.state.secondary ? 'Show off your property, all image types accepted' : null}
                    done={user ? user.uploadedPhotos : false}
                    action={() => this.setState({ uploadModalIsOpen: true }) } />
                  <TaskItem 
                    primary="Upload Floorplan"
                    secondary={this.state.secondary ? 'Layout of your property' : null}
                    done={user ? user.uploadedFloorplan : false}
                    action={() => this.props.completeTask('uploadedFloorplan')} />
                  <TaskItem 
                    primary="Enter Property Data"
                    secondary={this.state.secondary ? 'What makes your property valuable?' : null}
                    done={user ? user.uploadedPropData : false}
                    action={() => this.setState({ dataModalIsOpen: true }) } />
                  <TaskItem 
                    primary="Get Verified"
                    secondary={this.state.secondary ? 'Prove that you are the owner or guardian of this property' : null}
                    done={user ? user.verified : false}
                    action={() => this.props.completeTask('verified')} />
              </List>
            </div>
            
            <UploadModal 
              handleClose={() => this.handleModalClose('upload')} 
              isOpen={this.state.uploadModalIsOpen} 
              handleFileUpload={handleFileUpload}
              createREDA={this.props.createREDA} />

              <PropDataModal 
                prop={prop}
                handleClose={() => this.handleModalClose('data')} 
                isOpen={this.state.dataModalIsOpen} 
                handleFileUpload={handleFieldChange}
                updateREDA={this.props.updateReda}
                { ...rest } />
          </Grid>
        </Grid>
      </div>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskList);