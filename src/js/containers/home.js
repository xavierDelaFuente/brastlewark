import { connect } from 'react-redux'
import { recoverAPIdata } from '../actions/creators/home'
import HomeLayout from '../components/home/index'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getAPIData: ownState => {
      console.log("dispatch")
      dispatch(recoverAPIdata())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout)
