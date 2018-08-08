import { connect } from 'react-redux'
import { setCurrentCharacter } from '../actions/creators/home'
import panelInfoMenu from '../components/infoMenu/index'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentCharacter: character => {
      dispatch(setCurrentCharacter(character))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(panelInfoMenu)
