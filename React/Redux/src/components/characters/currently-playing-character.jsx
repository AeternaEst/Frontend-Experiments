import React from 'react';
import Character from './character';

const CurrentlyPlayingCharacter = (props) => {
    const currentlyPlayingChar = props.currentlyPlayingChar;
    return (
        <div className="currently-playing-char">
            {
                currentlyPlayingChar ? 
                (<div><h2>You are currently playing:</h2>
                <Character {...currentlyPlayingChar} /></div>) :
                 <h2>No character selected</h2>
            }
            
        </div>
    );
}

export default CurrentlyPlayingCharacter;