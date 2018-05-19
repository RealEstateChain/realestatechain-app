// ##############################
// // // Header styles
// #############################

import {
  container,
  defaultFont,
  darkModeColor,
  primaryColor,
  greyColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../material-dashboard-react.jsx";

const headerStyle = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: greyColor,
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: {
    ...container,
    minHeight: "50px",
  },
  flex: {
    flex: 1
  },
  walletInfo: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    "& > div": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      "& > p": {
        margin: "15px"
      }
    }
  },
  headerRight: {
    display: "flex",
  },
  accountInfo: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px"
  },
  rezTokenLabel: {
    marginLeft: "0.3em"
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  grey: {
    backgroundColor: darkModeColor,
    color: greyColor,
    ...defaultBoxShadow
  }
});

export default headerStyle;
