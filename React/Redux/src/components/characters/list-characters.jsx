import React from 'react';
import Character from './character';

const ListCharacters = (props) => {
    {console.log(props.currentlyPlaying)}
    return (
    <div className="characters">
        {
            props.characters.map(character => (
                <div key={character.id}>
                    <Character {...character} />
                    <span>{props.labels.setCharacterLevel}</span>
                    <button onClick={event => props.increaseLevel(character.id)}>+</button>
                    <button onClick={event => props.decreaseLevel(character.id)}>-</button>
                    
                    <input type="checkbox" name="currentlyPlaying" value="Play" checked={props.currentlyPlaying && props.currentlyPlaying.id === character.id} 
                        onChange={event => props.setCurrentlySelected(character)}/>
                </div>
            ))
        }
    </div>
)}

export default ListCharacters;