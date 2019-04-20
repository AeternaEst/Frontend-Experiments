import React from 'react';

const ShowSpecialAbility = (props) => {
    const { currentlyPlaying } = props;
    return (
        <div className="show-special-ability">
            {currentlyPlaying && (<p>Your selected hero have special ability: {abilityMap[currentlyPlaying.classs]}</p>)}
        </div>
    )
}

const abilityMap = {
    Ranger: 'Arrow Storm',
    Warrior: 'Bladestorm',
    Wizard: 'Fireball',
    Rogue: 'Stealth'
}

export default ShowSpecialAbility;