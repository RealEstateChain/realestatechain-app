import React from "react";
import PropTypes from 'prop-types';
import FileInput from 'react-simple-file-input';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

//todo: move this into a jss file
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
  state = {
    cancelButtonClicked: false,
    open: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.open != state.open) {
      return {
        open: props.open
      };
    }

    return null;
  }

  handleOpen = () => {
    this.setState({ open: true });
  };


  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  };

  componentWillUnmout(state) {
    debugger;
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
    const fileName = file.name;
    const fileType = file.type;
    //this.setState({file: file, fileContents: event.target.result});
    this.props.handleFileUpload(file);
  }

  onLoad = (file) => {

  }

  render() {
    const { classes, isOpen, handleClose, handleFileUpload } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.isOpen}
          onClose={handleClose}
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
              <Button onClick={()=> {}}>Save Image</Button>
          </div>
        </Modal>
      </div>
    )
  }
}

UploadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
}

export default withStyles(styles)(UploadModal);
