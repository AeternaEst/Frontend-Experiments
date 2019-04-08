import { connect } from 'react-redux'
import StrongestCharacter from './strongest-character';

const mapStateToProps = state => {
    return {
      characters: state.characters
    }
  }

const StrongestCharacterContainer = connect(
  mapStateToProps
)(StrongestCharacter);

export default StrongestCharacterContainer;