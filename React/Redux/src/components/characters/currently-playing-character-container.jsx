import { connect } from 'react-redux'
import CurrentlyPlayingCharacter from './currently-playing-character';

const mapStateToProps = (state, props) => {
    return {
      currentlyPlayingChar: state.currentlyPlaying,
      labels: props.labels
    }
  }

const CurrentlyPlayingCharacterContainer = connect(
  mapStateToProps
)(CurrentlyPlayingCharacter);

export default CurrentlyPlayingCharacterContainer;