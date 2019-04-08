
const noCharacterSelectedAction = () => {
    return {
        type: 'NO_CHARACTER_SELECTED'
    }
}

const selectedCharacterAction = (character) => {
    return {
        type: 'CHARACTER_SELECTED',
        character: character
    }
}

export { noCharacterSelectedAction, selectedCharacterAction };