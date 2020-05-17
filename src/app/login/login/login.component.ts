import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';
import { ErrorMessagesService } from '../services/error-messages.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private errorMessageService: ErrorMessagesService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; } // convenience getter for easy access to form fields

  onSubmit() {
    this.submitted = true;
    this.errorMessageService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authorizationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => { },
        error => {
          this.errorMessageService.error('Username or password is incorrect');
          this.loading = false;
        });
  }

}
