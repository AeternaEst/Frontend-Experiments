import { connect } from 'react-redux'
import StrongestCharacter from './strongest-character';

const mapStateToProps = (state, props) => {
    return {
      characters: state.characters,
      labels: props.labels
    }
  }

const StrongestCharacterContainer = connect(
  mapStateToProps
)(StrongestCharacter);

export default StrongestCharacterContainer;