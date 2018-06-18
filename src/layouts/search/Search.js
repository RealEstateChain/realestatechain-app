import React, { Component } from 'react'
import { Grid, InputLabel, withStyles, Typography } from "material-ui";
import styled from 'styled-components';

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

const Item = styled.img `
  object-fit: cover;
  width: 100%;
  filter: saturate(30%);
  box-shadow: none;
  transition: box-shadow 200ms linear;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    filter: saturate(100%);
    box-shadow: 0 0 0 2px white;
  }
`
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
                    <Item src={require(`../../${listing.picture}`)} />
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
