import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  borderRadius: '20px'
};

class Web3Console extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, history } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>REDA1 created 9/9/18 12:00:00</List>
        <Divider />
        <List>REDA1 updated 9/10/18 12:01:00</List>
        { history ? history.forEach(item => {
            return ( <List>item</List> )
        }) :
          <Divider /> }
      </div>
    );

    const fullList = (
        <div className={classes.list}>
        <List>REDA1 created 9/9/18 12:00:00</List>
        <Divider />
        <List>REDA1 updated 9/10/18 12:01:00</List>
        { history && history.forEach(item => {
            return ( <List>item</List> )
        }) }
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Web3 Console</Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Web3Console.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Web3Console);
