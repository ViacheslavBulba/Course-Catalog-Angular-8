import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthorizationService } from '../../../login/services/authorization.service';
import {
  AuthenticationActionTypes,
  Login, LoginSuccess, LoginFailure, Logout
} from '../actions/authentication.actions';


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
              return of(new LoginFailure({ error: error }));
            }));
      }));


  @Effect({ dispatch: false })
  LoginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/login');
    })
  );
}
