import { connect } from 'react-redux'
import CurrentlyPlayingCharacter from './currently-playing-character';

const mapStateToProps = state => {
    return {
      currentlyPlayingChar: state.currentlyPlaying
    }
  }

const CurrentlyPlayingCharacterContainer = connect(
  mapStateToProps
)(CurrentlyPlayingCharacter);

export default CurrentlyPlayingCharacterContainer;