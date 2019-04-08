import mockCharacters from './../../mock-data/characters/mock-characters';

function characters(state = mockCharacters, action) {
    switch (action.type) {
      case 'INCREASE_LEVEL':
        return state.map(character => {
            if(character.id === action.id) {
                return {...character, ...{ level: character.level + 1}};
            }

            return character;
        });
      case 'DECREASE_LEVEL':
      return state.map(character => {
        if(character.id === action.id) {
            return {...character, ...{ level: character.level - 1}};
        }

        return character;
    });
      default:
        return state
    }
  }
  
  export default characters;
  
