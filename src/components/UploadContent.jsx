import React from "react";
import PropTypes from 'prop-types';
import FileInput from 'react-simple-file-input';

//import * as _ from 'lodash'
//import * as Enums from '../Enums'


class UploadContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelButtonClicked: false
    }
  }

  // showInvalidFileTypeMessage = () => {
  //   alert('Invalid file type');
  // }

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
    // const { 
    //   showProgressBar, 
    //   handleFileSelected, 
    //   updateProgressBar, 
    //   checkIfFileIsIncorrectFiletype, 
    //   cancelButtonClicked,
    //   showInvalidFileTypeMessage,
    //   resetCancelButtonClicked 
    // } = this.props;
    
    return (
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
    )
  }
}

UploadContent.propTypes = {

}

export default UploadContent;
