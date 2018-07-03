import React from "react";
import { withStyles, Grid } from "material-ui";
import styled from 'styled-components'

const style = {
  grid: {
    padding: "0 15px 10px !important"
  }
};


function ItemGrid({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(ItemGrid);
