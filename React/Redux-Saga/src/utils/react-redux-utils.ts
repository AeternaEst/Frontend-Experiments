import { AnyAction } from "redux";
import { State } from "../reducers/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const fetchAndSubscribe = <T>(
  action: AnyAction,
  selector: (state: State) => T,
  deps: React.DependencyList,
  isLoadingSelector?: (state: State) => boolean
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action);
  }, deps);

  return {
    data: useSelector(selector),
    isLoading: isLoadingSelector ? useSelector(isLoadingSelector) : false,
  };
};
