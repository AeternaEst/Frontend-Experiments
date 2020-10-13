import { AnyAction } from "redux";
import { State } from "../reducers/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppError } from "../types/app-error";

export const fetchAndSubscribe = <T>(
  action: AnyAction,
  selector: (state: State) => T,
  isLoadingSelector: (state: State) => boolean,
  deps: React.DependencyList,
  errorSelector?: (state: State) => AppError
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action);
  }, deps);

  return {
    data: useSelector(selector),
    isLoading: useSelector(isLoadingSelector),
    error: errorSelector && useSelector(errorSelector),
  };
};

export const triggerAndSubscribe = <T>(
  action: AnyAction,
  selector: (state: State) => T,
  errorSelector: (state: State) => AppError
) => {
  const dispatch = useDispatch();

  const triggerAction = () => dispatch(action);

  return {
    trigger: triggerAction,
    data: useSelector(selector),
    error: useSelector(errorSelector),
  };
};
