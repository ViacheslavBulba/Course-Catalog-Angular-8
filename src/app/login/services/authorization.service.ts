import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Account } from '../../models/account.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUserSubject: BehaviorSubject<Account>;
  public currentUser: Observable<Account>;

  fakeUser: Account = { email: 'user', password: 'password' };

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    if (localStorage.getItem('currentUser') === null) {
      return of(false);
    } else {
      return of(true);
    }
  }

  login(username: string, password: string) {
    this.fakeUser.email = username;
    this.fakeUser.password = password;
    localStorage.setItem('currentUser', JSON.stringify(this.fakeUser));
    console.log('Logged in successfully');
    this.router.navigate(['/courses']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    console.log('Logged out');
  }

  public get getUserInfo(): string {
    return this.fakeUser.email;
  }

}
