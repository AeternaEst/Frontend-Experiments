import { AnyAction } from "redux";

export const actionCreator = <T extends string, P extends object>(
  type: T,
  props?: P
): { type: T } & P => {
  return Object.assign({ type }, props);
};

export type ReducerParams<S, T extends AnyAction> = (state: S, action: T) => S;
export type HandlerParams<S, T extends AnyAction> = AnyAction & {
  handle: ReducerParams<S, T>;
};

export const reducerCreator = <S, T extends AnyAction>(
  initialState: S,
  handlers: ReadonlyArray<HandlerParams<S, T>>
): ReducerParams<S, T> => {
  return function reducer(state = initialState, action) {
    const handle = handlers.find((handler) => handler.type === action.type)
      ?.handle;
    if (handle) {
      return handle(state, action);
    }
    return state;
  };
};

// taken from redux docs, implement later
// function createReducer(initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action);
//     } else {
//       return state;
//     }
//   };
// }

// export const todos = createReducer([], {
//   [ActionTypes.ADD_TODO]: (state, action) => {
//     const text = action.text.trim();
//     return [...state, text];
//   },
// });
