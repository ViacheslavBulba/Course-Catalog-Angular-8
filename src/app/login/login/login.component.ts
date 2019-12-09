import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authorizationService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authorizationService.login(this.username, this.password).subscribe((response) => {
      console.log(response);
    });
  }

}
