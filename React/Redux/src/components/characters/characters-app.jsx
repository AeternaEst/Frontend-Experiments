import React from 'react';
import ListCharactersContainer from './list-characters-container';
import StrongestCharacterContainer from './strongest-character-container';
import CurrentlyPlayingCharacterContainer from './currently-playing-character-container';
import ShowSpecialAbilityContainer from './show-special-ability-container';

const labels = {
    currentlyPlayingLabels: {
        currentlyPlayingLabel: 'You are currently playing',
        noCharacterSelected: 'No character selected'
    },
    strongestCharacterLabels: {
        strongestCharacter: 'This is your strongest character:'
    },
    listCharactersLabels: {
        setCharacterLevel: 'Set the character level here'
    }
}

const CharacterApp = () => (
    <div className="character-app">
        <ShowSpecialAbilityContainer />
        <CurrentlyPlayingCharacterContainer labels={labels.currentlyPlayingLabels}/>
        <StrongestCharacterContainer labels={labels.strongestCharacterLabels}/> 
        <ListCharactersContainer labels={labels.listCharactersLabels} />
    </div>
);

export default CharacterApp;

