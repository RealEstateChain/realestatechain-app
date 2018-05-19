import React from "react";
import PropTypes from "prop-types";
import { Menu } from "@material-ui/icons";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "material-ui";
import cx from "classnames";
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components';

import headerStyle from "../../assets/jss/material-dashboard-react/headerStyle.jsx";
import logo from "../../assets/img/rec-logo.png";

import HeaderLinks from "./HeaderLinks";

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.walletInfo}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title}>
           <img src={logo} />
          </Button>
          <AccountData accountIndex="0" units="ether" precision="3" />
        </div>
        <Hidden smDown implementation="css" className={classes.headerRight}>
          <div className={classes.accountInfo}>
            <ContractData contract="REZToken" method="balanceOf" methodArgs={[props.accounts[0]]} />
            <span className={classes.rezTokenLabel}>REZ</span>
          </div>
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {}}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "grey"]),
  accounts: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
