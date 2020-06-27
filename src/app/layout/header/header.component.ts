import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationService } from '../../login/services/authorization.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnChanges {

  isLoggedIn: boolean = false;
  // public currentUser: User;
  // public currentUser$ = new BehaviorSubject<User>(null);
  public firstName = '';
  public lastName = '';

  constructor(private router: Router, public authorizationService: AuthorizationService) {
    this.authorizationService.isAuthenticated().subscribe(x => {
      this.isLoggedIn = x;
      this.getUserName();
    });


  }

  ngOnChanges() {
    // this.getUserName();
  }

  ngOnInit() {
    // this.getUserName();
  }

  onLogout() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }

  getUserName() {
    if (this.isLoggedIn) {
      this.authorizationService.getUserInfo().subscribe(x => {
        this.firstName = x.firstName;
        this.lastName = x.lastName;
      });
    }
  }

}
