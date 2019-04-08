import { connect } from 'react-redux'
import { increaseLevelAction, decreaseLevelAction } from './../../actions/characters/character-actions';
import { selectedCharacterAction } from './../../actions/characters/currently-playing-actions';
import ListCharacters from './list-characters';

const mapStateToProps = state => {
    return {
      characters: state.characters,
      currentlyPlaying: state.currentlyPlaying
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        increaseLevel: id => {
            dispatch(increaseLevelAction(id))
      },
      decreaseLevel: id => {
        dispatch(decreaseLevelAction(id))
      },
      setCurrentlySelected: character => {
        dispatch(selectedCharacterAction(character))
      }
    }
  }

const ListCharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCharacters);

export default ListCharactersContainer;