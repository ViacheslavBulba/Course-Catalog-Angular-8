import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';
import { ErrorMessagesService } from '../services/error-messages.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private errorMessageService: ErrorMessagesService
  ) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.errorMessageService.clear();
    this.authorizationService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => { },
        error => {
          this.errorMessageService.error('Username or password is incorrect');
        });
  }

}
