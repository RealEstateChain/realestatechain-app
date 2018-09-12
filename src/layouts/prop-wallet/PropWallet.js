import React, { Component } from 'react'
import { Grid, InputLabel, withStyles, Typography } from "material-ui";

import {
  ItemGrid,
  Header,
  Footer,
  TabPanel,
  Tasks,
  Web3Console
} from "../../components";

import UserProfile from "../../user/layouts/profile/Profile";

import {
  Dashboard as DashboardIcon,
  Person,
} from "@material-ui/icons";

import logo from '../../logo.png'

import appStyle from "../../assets/jss/material-dashboard-react/appStyle";

import avatar from '../../logo.png';

class PropWallet extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const { classes, prop, ...rest } = this.props;
    return(
      <div className={classes.wrapper}>

        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={headerRoutes}
            {...rest}
          />
          <div className={classes.content}>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={8}>
                <TabPanel images={prop.images} title={prop.title} { ...rest } />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <Tasks prop={prop} { ...rest } />
              </ItemGrid>
            </Grid>
          </div>
          <Footer />
          <Web3Console feed={prop.history} />
        </div>
      </div>
    )
  }
}

const headerRoutes = [
  {
    path: "/prop-wallet",
    sidebarName: "PropWallet",
    navbarName: "PropWallet",
    icon: DashboardIcon,
    component: PropWallet
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/prop-wallet", navbarName: "Redirect" }
];

export default withStyles(appStyle)(PropWallet)
