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
import PropWallet from "../prop-wallet/PropWallet.js"

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
    if (!selected) {
      selected = 0
    }
    return redas[selected]
  };

  render() {
    const { classes, listings, redaId, ...rest } = this.props;
    const prop = this.getSelectedREDA(listings.matches, redaId);
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

export default withStyles(appStyle)(ViewOnlyREDA)
