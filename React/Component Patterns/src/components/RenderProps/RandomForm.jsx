import React from 'react';

const RandomForm = ({onSubmit, render}) => {
    
    const randomSubmit = (event) => {
        const result = Math.random(10) * 100;
        console.log(`The result was ${result}`);
        if(result < 50) {
            alert("Sorry no dice");
        } else {
            onSubmit(event);
        }
    }

    return render(randomSubmit);
}

export default RandomForm;