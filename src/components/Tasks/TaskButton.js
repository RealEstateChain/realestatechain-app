import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    textAlign: "left"
  },
});

function TaskButton(props) {
  const { classes, buttonAction, buttonContent } = props;

  return (
    <Button className={classes.button} onClick={buttonAction || ( () => {})} data-something="something">
      { buttonContent }
    </Button>
  );
}

TaskButton.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonContent: PropTypes.string.isRequired,
  buttonAction: PropTypes.func,
};

export default withStyles(styles)(TaskButton);