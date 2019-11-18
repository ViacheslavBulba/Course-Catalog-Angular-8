import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../login/services/authorization.service';
import { Account } from '../../models/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private router: Router, public authorizationService: AuthorizationService) {
    this.authorizationService.isAuthenticated().subscribe(x => this.isLoggedIn = x);
  }

  ngOnInit() {
  }

  onLogout() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }

}
