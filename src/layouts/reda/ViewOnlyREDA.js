import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
//import withStyles from "@material-ui/core/styles"
import {
  ItemGrid,
  Header,
  Footer,
  TabPanel,
} from "../../components";
import Dashboard from "../dashboard/Dashboard.js"

import UserProfile from "../../user/layouts/profile/Profile.js";

import {
  Dashboard as DashboardIcon,
  Person,
} from "@material-ui/icons";

import logo from '../../logo.png'
import { withStyles } from "material-ui";
import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

import avatar from '../../logo.png';

class ViewOnlyREDA extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, prop, ...rest } = this.props;
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
                <TabPanel images={prop.images} title={prop.title} { ...rest } />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                
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

export default withStyles(appStyle)(ViewOnlyREDA)
