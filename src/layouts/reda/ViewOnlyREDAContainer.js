import ViewOnlyREDA from './ViewOnlyREDA';
import { connect } from 'react-redux';
import React from 'react';

// import {
// 	requestFileUpload,

// } from '../../actions';

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

class ViewOnlyREDAContainer extends React.Component {
	render() {
		return (
			<ViewOnlyREDA { ...this.props } />
		)
	}
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.web3.accounts,
    user: state.user,
    prop: state.prop,
    listings: state.listings,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOnlyREDAContainer);
