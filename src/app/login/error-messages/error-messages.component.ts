import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorMessage, ErrorMessageType } from '../models/error-message';
import { ErrorMessagesService } from '../services/error-messages.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  errorMessages: ErrorMessage[] = [];
  errorMessageSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(private router: Router, private errorMessageService: ErrorMessagesService, private el: ElementRef) { }

  ngOnInit() {
    this.errorMessageSubscription = this.errorMessageService.onErrorMessage(this.id)
      .subscribe(alert => {
        if (!alert.message) {
          this.errorMessages = this.errorMessages.filter(x => x.keepAfterRouteChange);
          this.errorMessages.forEach(x => delete x.keepAfterRouteChange);
          return;
        }
        this.errorMessages.push(alert);
        if (alert.autoClose) {
          setTimeout(() => this.removeMessage(alert), 3000);
        }
      });
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.errorMessageService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeMessage(message: ErrorMessage) {
    if (!this.errorMessages.includes(message)) { return; }
    if (this.fade) {
      this.errorMessages.find(x => x === message).fade = true;
    }
    this.errorMessages = this.errorMessages.filter(x => x !== message);
  }

  cssClass(alert: ErrorMessage) {
    if (!alert) { return; }
    const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
    const alertTypeClass = {
      [ErrorMessageType.Success]: 'alert alert-success',
      [ErrorMessageType.Error]: 'alert alert-danger',
      [ErrorMessageType.Info]: 'alert alert-info',
      [ErrorMessageType.Warning]: 'alert alert-warning'
    };
    classes.push(alertTypeClass[alert.type]);
    if (alert.fade) {
      classes.push('fade');
    }
    return classes.join(' ');
  }

}
