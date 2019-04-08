import React from 'react';
import Character from './character';

const StrongestCharacter = (props) => {
    const characterLevels = props.characters.map(c => c.level);
    const strongestCharacter = props.characters.find(char => char.level === Math.max(...characterLevels));
    return (
        <div className="strongest-character">
            <h2>This is your strongest character:</h2>
            <Character {...strongestCharacter}/>
            <h2>This is your strongest character:</h2>
        </div>
    )
}

export default StrongestCharacter;