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
  height: 100%;
  width: 100%;
  transition: box-shadow 200ms linear;
  cursor: pointer;
`

const ItemContainer = styled.a `
  display: block;
  position: relative;
  height: 15rem;
  overflow: hidden;
  box-shadow: none;
  border-radius: 2px;
  color: white;
  width: 100%;

  & > img {
    filter: saturate(30%);
  }

  &:hover{
    box-shadow: 0 0 0 2px white;

    & > img {
      filter: saturate(100%);
    }
  }
`

const ImageOverlay = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .6;
  background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 80%);
  background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 80%);
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#a6000000',GradientType=0 );
`

const ItemText = styled.div `
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: .7rem;
`

const Name = styled.a `
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
  }
`

const Age = styled.em `
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: .6rem;
`

const Location = styled.span `
  .faint {
    opacity: .5;
  }

`

const Price = styled.b `
  font-size: 1.5rem;
`

const Description = styled.span `
`

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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
                <ItemGrid xs={12} sm={6} md={4}>
                  <ItemContainer href="#" key={i}>
                    <Item src={require(`../../${listing.picture}`)} />
                    <ImageOverlay></ImageOverlay>
                    <Age>{listing.age} days on Real Estate Chain</Age>
                    <ItemText>
                      <Name href="#">{listing.name}</Name> <br />
                      <Description>{listing.descriptionShort}, {listing.source}</Description> <br />
                      <Location><b>{listing.locality}, {listing.location}</b></Location> <br />
                      <Price>USD${numberWithCommas(listing.price)}</Price> 
                    </ItemText>
                  </ItemContainer>
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
