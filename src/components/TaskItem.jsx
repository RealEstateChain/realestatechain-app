import React from "react";
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
import FolderIcon from '@material-ui/icons/Folder';
import DoneIcon from '@material-ui/icons/Done';

//import * as _ from 'lodash'
//import * as Enums from '../Enums'


class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
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
    return (
      <ListItem 
        onClick={this.handleToggle(!this.state.done)}
        button
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Upload Photos"
          secondary={this.state.secondary ? 'Show off your property, all image types accepted' : null}
        />

        <ListItemSecondaryAction>
        {this.state.done &&
          <IconButton aria-label="Done">
            <DoneIcon />
          </IconButton>
        }
        </ListItemSecondaryAction> 
      </ListItem>
    )
  }
}

// ListItem.PropTypes= {
//   account?: User
//   type?: ListItemType
//   title: string
//   details?: string
//   subTitle?: string
//   icon?: string
//   onPress?: (e: RX.Types.SyntheticEvent) => void
//   disabled?: boolean
//   selected?: boolean
//   isOn?: boolean
//   isOff?: boolean
//   smallSeedIcon?: boolean
//   iconType?: Enums.VisualType
// }

export default TaskItem;
