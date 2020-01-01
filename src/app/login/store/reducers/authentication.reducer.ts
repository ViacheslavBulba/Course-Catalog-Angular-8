import { User } from '../../../models/user.model';
import { AuthenticationActionTypes, AuthenticationActions } from '../actions/authentication.actions';

export interface State {
  isAuthenticated: boolean;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: localStorage.getItem('currentUser') !== null,
  errorMessage: null
};

export function reducer(state = initialState, action: AuthenticationActions): State {
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
