import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private isAuthenticated$ = new BehaviorSubject(false);

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  fakeUser: User = { email: 'user', password: 'password' };

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  login(username: string, password: string) {
    this.fakeUser.email = username;
    this.fakeUser.password = password;
    localStorage.setItem('currentUser', JSON.stringify(this.fakeUser));
    this.isAuthenticated$.next(true);
    console.log('Logged in successfully');
    this.router.navigate(['/courses']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated$.next(false);
    console.log('Logged out');
  }

  public get getUserInfo(): string {
    return this.fakeUser.email;
  }

}
