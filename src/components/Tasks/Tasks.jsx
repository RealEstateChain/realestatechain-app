import React from "react";
import {
  withStyles,
} from "material-ui";
import { Edit, Close, Check } from "@material-ui/icons";

import PropTypes from "prop-types";

import {
  TaskList
} from "../../components";

import tasksStyle from "../../assets/jss/material-dashboard-react/tasksStyle.jsx";

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      checked: this.props.checkedIndexes,
      progress: this.props.user.walletProgress
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev)  {
    ev.preventDefault();
    
    console.log(this.props)
    let url = 'https://localhost:3000/upload'

    if (this.props.file) {
      const data = new FormData();
      data.append('file', this.uploadInput.files[0]);
      data.append('filename', "testUpload");

      fetch(url, {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((body) => {
          this.setState({ imageURL: `http://localhost:3000/${body.file}` });
        });
      });
    }
    
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
      progress: this.state.progress + 1
    });
  };

  render() {
    const { classes, tasksIndexes, tasks, accounts, user } = this.props;
    return (
      <TaskList user={user} completeTask={this.props.completeTask} handleFileUpload={this.props.handleFileUpload} />
      
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  user: PropTypes.object,
  completeTask: PropTypes.func
};

export default withStyles(tasksStyle)(Tasks);
