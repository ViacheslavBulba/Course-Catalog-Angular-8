import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../login/services/authorization.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private router: Router, public authorizationService: AuthorizationService, public translate: TranslateService) {
    this.authorizationService.isAuthenticated().subscribe(x => this.isLoggedIn = x);
    translate.addLangs(['en', 'pl']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
    } else {
      localStorage.setItem('locale', 'pl');
      translate.setDefaultLang('pl');
      translate.use('pl');
    }
  }

  public changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }

  ngOnInit() {
  }

  onLogout() {
    this.authorizationService.logout();
    this.router.navigate(['/login']);
  }

}
