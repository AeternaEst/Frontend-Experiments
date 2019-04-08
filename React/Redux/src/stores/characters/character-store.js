import { combineReducers, createStore } from 'redux'
import characters from './../../reducers/characters/character-reducer';
import currentlyPlaying from './../../reducers/characters/currently-playing-reducer';
  
// const combinedCharacterReducer = (state, action) => {
//     return {
//         characters: characterReducer(state.characters, action),
//         currentlyPlayingChar: currentlyPlayingReducer(state.currentlyPlayingChar, action)
//     }
// }

const combinedCharacterReducer = combineReducers( {characters, currentlyPlaying});

let characterStore = createStore(combinedCharacterReducer);
  
export default characterStore;