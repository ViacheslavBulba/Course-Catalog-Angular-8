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
    console.log(`${username} ${password}`);
    return this.http.post<any>('http://localhost:3004/auth/login', { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated$.next(true);
        console.log('Logged in successfully');
        this.router.navigate(['/courses']);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated$.next(false);
    console.log('Logged out');
  }

  // public get getUserInfo(): User {
  //   return this.fakeUser;
  // }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

}
