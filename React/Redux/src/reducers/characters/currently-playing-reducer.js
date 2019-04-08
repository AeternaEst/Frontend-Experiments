
function currentlyPlaying(state = null, action) {
    switch(action.type) {
        case 'NO_CHARACTER_SELECTED':
            return state;
        case 'CHARACTER_SELECTED':
            return action.character;
        default:
            return state;
    }
}

export default currentlyPlaying;