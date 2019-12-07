import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  isLoggedIn: boolean;

  constructor(private router: Router, private authorizationService: AuthorizationService) {
    this.authorizationService.isAuthenticated().subscribe(x => this.isLoggedIn = x);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
