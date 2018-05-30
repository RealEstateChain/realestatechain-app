import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import React from 'react';
import { withStyles } from "material-ui";

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

class DashboardContainer extends React.Component {
	render() {
		return (
			<Dashboard { ...this.props } />
		)
	}
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    user: state.user,
    // SimpleStorage: state.contracts.SimpleStorage,
    // TutorialToken: state.contracts.TutorialToken,
    // REZToken: state.contracts.REZToken,
    // REDAToken: state.contracts.REDAToken,
    // drizzleStatus: state.drizzleStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	completeTask: (task) => { dispatch({ type: 'COMPLETE_TASK', payload: task }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

//export default DashboardContainer
