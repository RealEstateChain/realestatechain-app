import React from "react";
import PropTypes from 'prop-types';
import FileInput from 'react-simple-file-input';

import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

//import * as _ from 'lodash'
//import * as Enums from '../Enums'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const modalStyle = {
  top: 400,
  left: 400,
  transform: `translate(-400, -400)`,
  color: 'white',
};

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelButtonClicked: false,
      open: props.open,
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidUpdate = (props, state) => {
    if (props.open != state.open) {
      this.setState({ open: props.open });
    }
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  };

  handleClose = () => {
    this.setState({open: false});
  }

  cancelButtonClicked = () => {
    return this.state.cancelButtonClicked;
  }

  resetCancelButtonClicked = () => {
    this.setState({ cancelButtonClicked: false });
  }

  showInvalidFileTypeMessage = (file) => {
    window.alert("Tried to upload invalid filetype " + file.type);
  }

  showProgressBar = () => {
    //this.setState({ progressBarVisible: true});
  }

  updateProgressBar = (event) => {
    this.setState({
      progressPercent: (event.loaded / event.total) * 100
    });
  }

  handleFileSelected = (event, file) => {
    this.setState({file: file, fileContents: event.target.result});
  }

  onLoad = (file) => {

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          >
          <div style={modalStyle} className={classes.paper}>
            <FileInput
              readAs='binary'
              multiple
             
              onLoadStart={ this.showProgressBar }
              onLoad={ this.handleFileSelected }
              onProgress={ this.updateProgressBar }
             
              abortIf={ this.cancelButtonClicked }
             
              onCancel={ this.showInvalidFileTypeMessage }
              onAbort={ this.resetCancelButtonClicked }
             />
          </div>
        </Modal>
      </div>
    )
  }
}

UploadModal.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default withStyles(styles)(UploadModal);
