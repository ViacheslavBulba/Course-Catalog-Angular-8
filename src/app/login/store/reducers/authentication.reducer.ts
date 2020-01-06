import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../../app.state';
import { AuthenticationActions, AuthenticationActionTypes } from '../actions/authentication.actions';

interface AuthenticationCombinedState {
  authentication: AuthenticationState;
}

interface AuthenticationState extends AppState {
  isAuthenticated: boolean;
  errorMessage: string | null;
}

const initialState: AuthenticationState = {
  isAuthenticated: localStorage.getItem('currentUser') !== null,
  errorMessage: null
};

function authenticationReducer(state = initialState, action: AuthenticationActions): AuthenticationState {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: null
      };
    }
    case AuthenticationActionTypes.LOGIN_FAILURE: {
      console.log('Wrong credentials.');
      return {
        ...state,
        errorMessage: 'Wrong credentials.'
      };
    }
    case AuthenticationActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const reducers: ActionReducerMap<AuthenticationCombinedState> = {
  authentication: authenticationReducer,
};

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>('authentication');
