import { connect } from 'react-redux'
import infoMenu from '../components/infoMenu/index'

const mapStateToProps = (state, ownProps) => {
  return {
  	missions: state.home.apiResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(infoMenu)
