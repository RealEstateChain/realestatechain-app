import Dashboard from './Dashboard'
import { drizzleConnect } from 'drizzle-react'
import { withStyles } from "material-ui";
import actions from '../../actions';

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    user: state.user,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    REZToken: state.contracts.REZToken,
    REDAToken: state.contracts.REDAToken,
    drizzleStatus: state.drizzleStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	completeTask: (task) => { dispatch({ type: 'COMPLETE_TASK', payload: task }) },
  	handleFileUpload: (file) => { dispatch(actions.requestFileUpload(file)) },
    send: () => dispatch(actions.sendTokens()),
    startLogin: () => dispatch(actions.startLogin()),
    createNewToken: (token) => dispatch(actions.createNewToken(token)),
    setModalMessage: (config) => dispatch(actions.setModalMessage(config)),
  }
}

const DashboardContainer = drizzleConnect(Dashboard, mapStateToProps, mapDispatchToProps);

export default DashboardContainer
