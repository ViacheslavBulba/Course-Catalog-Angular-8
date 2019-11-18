import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthorizationService } from './login/services/authorization.service';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Video Courses';
  isLoggedIn: boolean;

  public constructor(private titleService: Title, public authorizationService: AuthorizationService) {
    this.authorizationService.isAuthenticated().subscribe(x => this.isLoggedIn = x);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle(this.title);
  }

  ngOnChanges() {
  }

}
