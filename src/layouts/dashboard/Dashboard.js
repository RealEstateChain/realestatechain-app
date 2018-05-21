import React, { Component } from 'react'
import { Grid, InputLabel, withStyles, Typography } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Table,
  Button,
  Badge,
  CustomInput,
  ItemGrid,
  Header,
  Footer,
  TabPanel,
  ProgressBar
} from "../../components";

import UserProfile from "../../user/layouts/profile/Profile.js";
import { Tasks } from "../../components";

import {
  Dashboard as DashboardIcon,
  Person,
} from "@material-ui/icons";

import logo from '../../logo.png'

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

import avatar from '../../logo.png';

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const { classes, ...rest } = this.props;
    return(
      <div className={classes.wrapper}>

        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            {...rest}
          />
          <div className={classes.content}>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={8}>
                <TabPanel />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <Tasks { ...rest } />
              </ItemGrid>
            </Grid>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default withStyles(appStyle)(Dashboard)
