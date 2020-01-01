import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthenticationState } from '../store/app.state';
import { Login } from '../store/actions/authentication.actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  user: User = null;
  getState: Observable<any>;
  errorMessage: string = null;

  //constructor(private authorizationService: AuthorizationService, private router: Router) {
  //}

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthenticationState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  // onLogin() {
  //   this.authorizationService.login(this.username, this.password).subscribe();
  // }

  onLogin(): void {
    const actionPayload = {
      username: this.username,
      password: this.password
    };
    this.store.dispatch(new Login(actionPayload));
  }

}
