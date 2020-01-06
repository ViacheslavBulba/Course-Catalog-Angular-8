import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthorizationService } from '../../../login/services/authorization.service';
import { AuthenticationActionTypes, Login, LoginFailure, LoginSuccess, Logout } from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private authorizationService: AuthorizationService,
    private router: Router,
  ) { }

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN))
    .pipe(
      map((action: Login) => action.payload),
      switchMap(payload => {
        return this.authorizationService.login(payload.username, payload.password)
          .pipe(
            map((user) => {
              console.log(user);
              return new LoginSuccess({ token: user.token, username: payload.username });
            }),
            catchError((error) => {
              return of(new LoginFailure({ error }));
            }));
      }));


  @Effect({ dispatch: false })
  LoginSuccess = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public Logout = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/login');
    })
  );
}
