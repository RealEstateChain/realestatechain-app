import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
//import withStyles from "@material-ui/core/styles"
import {
  ItemGrid,
  Header,
  Footer,
  TabPanel,
  PropDetails,
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

  getSelectedREDA = (redas, selected) => {
    return redas[selected]
  };

  render() {
    const { classes, listings, ...rest } = this.props;
    const prop = this.getSelectedREDA(listings.matches, listings.selected);
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
                <TabPanel images={prop.images} title={prop.name} { ...rest } />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <PropDetails 
                  prop={prop}
                  { ...rest }
                />
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
