import React, { FC, useMemo, useState } from "react";
import { Property } from "../types/property";
import { AppUser } from "../types/app-user";
import { connect, useDispatch } from "react-redux";
import { State } from "../reducers/root-reducer";
import { loginActions } from "../sagas/login-saga";
import Loader from "./loader";

interface NavigationProps {
  properties: Property[];
  isFetchingProperties: boolean;
  isAddingFavorite: boolean;
  isAddingComment: boolean;
  user?: AppUser;
  unsuccessfulLogin?: boolean;
}

const Navigation: FC<NavigationProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const numberOfComments = useMemo(
    () =>
      props.properties.reduce<number>(
        (prev, current) => prev + current.comments.length,
        0
      ),
    [props.properties]
  );
  const numberOfFavorites = useMemo(
    () => props.properties.filter((property) => property.isFavorite).length,
    [props.properties]
  );

  return (
    <div className="navigation">
      <h2>Property King</h2>
      <div className="navigation__actions">
        {props.isFetchingProperties && <Loader text="data not ready" />}
        {!props.isFetchingProperties && (
          <div className="navigation__action-status">
            <div>
              Comments:{" "}
              {props.isAddingComment ? (
                <Loader text="...loading" />
              ) : (
                numberOfComments
              )}
            </div>
            <div>
              Favorites:{" "}
              {props.isAddingFavorite ? (
                <Loader text="...loading" />
              ) : (
                numberOfFavorites
              )}
            </div>
          </div>
        )}
        {props.user && (
          <>
            <div>Hello {props.user.userName}</div>
            <button onClick={() => dispatch(loginActions.logout)}>
              Logout
            </button>
          </>
        )}
        <div>
          {!props.user && (
            <div className="navigation__login">
              <input
                onChange={(event) => setUserName(event.currentTarget.value)}
                type="text"
                value={userName}
                placeholder="username"
              />
              <input
                onChange={(event) => setPassword(event.currentTarget.value)}
                type="text"
                value={password}
                placeholder="password"
              />
              <button
                onClick={() => dispatch(loginActions.login(userName, password))}
              >
                Login
              </button>
              {props.unsuccessfulLogin && (
                <span>Incorrect username or password</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: State): NavigationProps {
  return {
    properties: state.propertyState.properties,
    isFetchingProperties: state.propertyState.isFetching,
    user: state.loginState.activeUser,
    unsuccessfulLogin: state.loginState.unsuccessfulLogin,
    isAddingComment: state.propertyState.isAddingComment,
    isAddingFavorite: state.propertyState.isAddingFavorite,
  };
}

export default connect(mapStateToProps)(Navigation);
