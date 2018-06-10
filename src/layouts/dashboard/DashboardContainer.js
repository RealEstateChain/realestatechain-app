import Dashboard from './Dashboard'
import { drizzleConnect } from 'drizzle-react'
import { withStyles } from "material-ui";
import {
	requestFileUpload,
	completeTask,
	addImageToProp,
	
	sendTokens,
	startLogin,
	createNewToken,
	setModalMessage,
} from '../../actions';

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    user: state.user,
    propWallet: state.propWallet,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    REZToken: state.contracts.REZToken,
    REDAToken: state.contracts.REDAToken,
    drizzleStatus: state.drizzleStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	completeTask: (task) => { dispatch(completeTask(task)) },
  	handleFileUpload: (file) => { dispatch(requestFileUpload(file)) },
  	addImageToProp: (image) => { dispatch(addImageToProp(image)) },
    // coming later:
    send: () => dispatch(sendTokens()),
    startLogin: () => dispatch(startLogin()),
    createNewToken: (token) => dispatch(createNewToken(token)),
    setModalMessage: (config) => dispatch(setModalMessage(config)),
  }
}

const DashboardContainer = drizzleConnect(Dashboard, mapStateToProps, mapDispatchToProps);

export default DashboardContainer
