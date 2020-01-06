import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import { Login } from '../store/actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  onLogin(): void {
    const actionPayload = {
      username: this.username,
      password: this.password
    };
    this.store.dispatch(new Login(actionPayload));
  }

}
