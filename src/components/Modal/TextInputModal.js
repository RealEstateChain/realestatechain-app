import React from "react";
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import { TextFields } from '../../components';

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
  top: 150,
  left: 150,
  transform: `translate(-400, -400)`,
  color: 'white',
};

class TextInputModal extends React.Component {
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

  render() {
    const { classes, isOpen, handleClose, handleFieldChange } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.isOpen}
          onClose={handleClose}
          >
          <div style={modalStyle} className={classes.paper}>
            <TextFields handleFieldChange={this.handleFieldChange} />
              
          </div>
        </Modal>
      </div>
    )
  }
}

TextInputModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
}

export default withStyles(styles)(TextInputModal);
