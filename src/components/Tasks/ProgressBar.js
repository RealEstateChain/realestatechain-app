import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    maxWidth: 420,
    flexGrow: 1
  },
  dotActive: {
    background: "#27ae5f"
  }
};

class ProgressBar extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const { classes, theme, progress } = this.props;

    return (
      <div>
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={progress}
        classes={classes}
      />  
      <span>{this.props.progress}</span>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.number
};

export default withStyles(styles)(ProgressBar);