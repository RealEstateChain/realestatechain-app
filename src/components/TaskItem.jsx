import React from "react";
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Tooltip
} from "material-ui";
import { Edit, Close, Check } from "@material-ui/icons";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DoneIcon from '@material-ui/icons/Done';

//import * as _ from 'lodash'
//import * as Enums from '../Enums'


class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      secondary: true
    }
  }

  handleToggle = value => () => {
    const { done } = this.state;

    this.setState({
      done: value,
    });
  };

  render() {
    const { primary, secondary, done, action } = this.props;
    return (
      <ListItem 
        onClick={action}
        button
      >
        <ListItemAvatar>
          <Avatar>
            <CloudUploadIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={primary}
          secondary={secondary}
        />

        <ListItemSecondaryAction>
        {done &&
          <IconButton aria-label="Done">
            <DoneIcon />
          </IconButton>
        }
        </ListItemSecondaryAction> 
      </ListItem>
    )
  }
}

TaskItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  done: PropTypes.bool,
  action: PropTypes.func
}

export default TaskItem;
