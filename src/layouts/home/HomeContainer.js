import Home from './Home'
import { connect } from 'react-redux'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    user: state.user,
    SimpleStorage: state.contracts.SimpleStorage,
  }
}

const HomeContainer = connect(Home, mapStateToProps);

export default HomeContainer
