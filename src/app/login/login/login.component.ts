import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authorizationService.login(this.username, this.password);
  }

}
