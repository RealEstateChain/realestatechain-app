import React, { Component } from 'react'
import { Grid, InputLabel, withStyles, Typography } from "material-ui";

import {
  ItemGrid,
  Header,
  Footer,
} from "../../components";

import {
  Search as SearchIcon,
  Person,
} from "@material-ui/icons";

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

class Search extends Component {
  state = {

  };

  render() {
    const { classes, listings, ...rest } = this.props;
    return(
      <div className={classes.wrapper}>

        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            {...rest}
          />
          <div className={classes.content}>
            <Grid container>
            { listings.matches && listings.matches.map((listing, i) => {
              return (
                <ItemGrid xs={4} sm={4} md={4}>
                  <div key={i}>
                    <img src={require(`../../${listing.picture}`)} />
                  </div>
                </ItemGrid>
              );
            }) }
            </Grid>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}


export default withStyles(appStyle)(Search)
