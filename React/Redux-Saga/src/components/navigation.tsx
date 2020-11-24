/* eslint-disable max-len */
import React, { FC, useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { AppUser } from '../types/app-user';
import { State } from '../reducers/root-reducer';
import propertySelectors from '../selectors/property-selectors';
import { loginActions } from '../actions/login-actions';
import Loader from './widgets/loader';
import loginSelectors from '../selectors/login-selectors';

interface NavigationProps {
  texts: {
    favoritePropertiesMessage: string;
  };
  numberOfComments: number;
  numberOfFavorites: number;
  isFetchingProperties: boolean;
  favoritesBeingAdded: boolean;
  isAddingComment: boolean;
  user?: AppUser;
  unsuccessfulLogin?: boolean;
  onLogout: () => void;
  onLogin: (userName: string, password: string) => void;
  showFavoritePropertiesMessage: boolean;
  isLoginInProgress: boolean;
}

const Navigation: FC<NavigationProps> = ({
  unsuccessfulLogin, onLogin, onLogout, user,
  isLoginInProgress, showFavoritePropertiesMessage, favoritesBeingAdded, texts,
  isFetchingProperties, isAddingComment, numberOfComments, numberOfFavorites,
}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatchUserNameUpdate = useDispatch();

  useEffect(() => {
    if (!unsuccessfulLogin && user) {
      setUserName('');
      setPassword('');
    }
  }, [unsuccessfulLogin, user]);

  const renderLogin = (): React.ReactElement => {
    if (isLoginInProgress) {
      return <Loader text="Login in progress..." />;
    }
    if (user) {
      return (
        <>
          <div>
            Hello
            {user.userName}
          </div>
          <button type="button" onClick={onLogout}>Logout</button>
        </>
      );
    }
    if (!user) {
      return (
        <div>
          <div className="navigation__login">
            <input
              onChange={(event) => {
                setUserName(event.currentTarget.value);
                dispatchUserNameUpdate(
                  loginActions.newUserNameTyping(event.currentTarget.value),
                );
              }}
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
            <button type="button" onClick={() => onLogin(userName, password)}>
              Login
            </button>
            {unsuccessfulLogin && (
              <span>Incorrect username or password</span>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__left">
        <h2>Property King</h2>
      </div>
      <div className="navigation__right">
        <div>
          {showFavoritePropertiesMessage
            && !favoritesBeingAdded
            && texts.favoritePropertiesMessage}
        </div>
        <div className="navigation__actions">
          {(isFetchingProperties
            || favoritesBeingAdded
            || isAddingComment) && <Loader text="getting latest data" />}

          {!isFetchingProperties
            && !favoritesBeingAdded
            && !isAddingComment && (
              <div className="navigation__action-status">
                <div>
                  Comments:
                  {' '}
                  {numberOfComments}
                </div>
                <div>
                  Favorites:
                  {' '}
                  {numberOfFavorites}
                </div>
              </div>
          )}
        </div>
        {renderLogin()}
      </div>
    </div>
  );
};

function mapStateToProps(state: State) {
  return {
    numberOfFavorites: propertySelectors.favorites(state).length,
    numberOfComments: propertySelectors.totalComments(state),
    isFetchingProperties: propertySelectors.isFetching(state),
    user: loginSelectors.activeUser(state),
    unsuccessfulLogin: loginSelectors.unsuccessfulLogin(state),
    isAddingComment: state.propertyState.isAddingComment,
    favoritesBeingAdded: propertySelectors.isAddingFavorites(state),
    showFavoritePropertiesMessage: propertySelectors.showFavoritePropertiesMessage(
      state,
    ),
    isLoginInProgress: loginSelectors.isLoginInProgress(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onLogout: () => dispatch(loginActions.logout),
    onLogin: (userName: string, password: string) => dispatch(loginActions.login(userName, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
