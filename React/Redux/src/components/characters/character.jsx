import React from 'react';

const Character = (props) => {
    const { id, classs, level } = props;
    return (
        <div className="character">
            <p>ID: {id}</p>
            <p>Class: {classs}</p>
            <p>Level: {level}</p>
        </div>
    );
}

export default Character;