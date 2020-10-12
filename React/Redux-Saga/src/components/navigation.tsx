import React, { FC, useMemo, useState } from "react";
import { Property } from "../types/property";
import { AppUser } from "../types/app-user";
import { connect, useDispatch } from "react-redux";
import { State } from "../reducers/root-reducer";
import Loader from "./loader";
import { propertySelectors } from "../selectors/property-selectors";
import { loginActions } from "../actions/login-actions";
import { Dispatch } from "redux";

interface NavigationProps {
  numberOfComments: number;
  numberOfFavorites: number;
  isFetchingProperties: boolean;
  favoritesBeingAdded: boolean;
  isAddingComment: boolean;
  user?: AppUser;
  unsuccessfulLogin?: boolean;
  onLogout: () => void;
  onLogin: (userName: string, password: string) => void; 
}

const Navigation: FC<NavigationProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");;

  return (
    <div className="navigation">
      <h2>Property King</h2>
      <div className="navigation__actions">
        {(props.isFetchingProperties ||
          props.favoritesBeingAdded ||
          props.isAddingComment) && <Loader text="getting latest data" />}

        {!props.isFetchingProperties &&
          !props.favoritesBeingAdded &&
          !props.isAddingComment && (
            <div className="navigation__action-status">
              <div>Comments: {props.numberOfComments}</div>
              <div>Favorites: {props.numberOfFavorites}</div>
            </div>
          )}
        {props.user && (
          <>
            <div>Hello {props.user.userName}</div>
            <button onClick={props.onLogout}>
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
                onClick={() => props.onLogin(userName, password)}
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

function mapStateToProps(state: State) {
  return {
    numberOfFavorites: propertySelectors.favorites(state).length,
    numberOfComments: propertySelectors.totalComments(state),
    isFetchingProperties: propertySelectors.isFetching(state),
    user: state.loginState.activeUser,
    unsuccessfulLogin: state.loginState.unsuccessfulLogin,
    isAddingComment: state.propertyState.isAddingComment,
    favoritesBeingAdded: propertySelectors.isAddingFavorites(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onLogout: () => dispatch(loginActions.logout),
    onLogin: (userName: string, password: string) => dispatch(loginActions.login(userName, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
