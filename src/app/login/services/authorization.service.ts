import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticated$ = new BehaviorSubject(false);
  private authorized = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3004/auth/login', { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated$.next(true);
        this.authorized = true;
        this.router.navigate(['/courses']);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated$.next(false);
    this.authorized = false;
  }

  getUserInfo() {

    // if (this.authorized) {
    const token = localStorage.getItem('currentUser');
    return this.http.post<any>('http://localhost:3004/auth/userinfo', JSON.parse(token))
      .pipe(map(user => {
        console.log('getting user info from http://localhost:3004/auth/userinfo');

        console.log(user);
        console.log(user.firstName);
        console.log(user.lastName);

        return user;
      }));
    // }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

}
