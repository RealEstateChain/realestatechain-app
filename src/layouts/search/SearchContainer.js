import { connect } from 'react-redux';
import React from 'react';
import { withStyles } from "material-ui";
import {
	getData,
} from '../../actions';
import Search from './Search';

class SearchContainer extends React.Component {
	render() {
		return (
			<Search { ...this.props } />
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.user,
    propWallet: state.propWallet,
    listings: state.listings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getData: (type) => { dispatch(getData(type)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
