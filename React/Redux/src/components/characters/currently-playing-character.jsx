import React from 'react';
import Character from './character';

const CurrentlyPlayingCharacter = (props) => {
    const currentlyPlayingChar = props.currentlyPlayingChar;
    return (
        <div className="currently-playing-char">
            {
                currentlyPlayingChar ? 
                (<div><h2>{props.labels.currentlyPlayingLabel}:</h2>
                <Character {...currentlyPlayingChar} /></div>) :
                 <h2>{props.labels.noCharacterSelected}</h2>
            }
            
        </div>
    );
}

export default CurrentlyPlayingCharacter;