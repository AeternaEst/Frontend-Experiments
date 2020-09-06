const increment = {
    type: "INCREMENT"
}

const decrement = {
    type: "INCREMENT"
}

export const deprecatedReducerOneActions = {
    increment: increment,
    decrement: decrement
}

interface DeprecatedReducerOneState {
    counter: number; 
}

const defaultState: DeprecatedReducerOneState = {
    counter: 0
}

const deprecatedReducerOne = (state = defaultState, action: { type: string }) => {
    console.log("dispatch deprecatedReducerOne", action);
    switch(action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                counter: state.counter - 1 
            }
        default:
            return state;
    }
}

export default deprecatedReducerOne;