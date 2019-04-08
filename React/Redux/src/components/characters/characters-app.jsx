import React from 'react';
import ListCharactersContainer from './list-characters-container';
import StrongestCharacterContainer from './strongest-character-container';
import CurrentlyPlayingCharacterContainer from './currently-playing-character-container';

/* TODO: connect StrongestCharacter to the store*/

const CharacterApp = () => (
    <div className="character-app">
        <CurrentlyPlayingCharacterContainer />
        <StrongestCharacterContainer /> 
        <ListCharactersContainer  />
    </div>
);

export default CharacterApp;

