import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ErrorMessage, ErrorMessageType } from '../models/error-message';

@Injectable({ providedIn: 'root' })
export class ErrorMessagesService {
  private subject = new Subject<ErrorMessage>();
  private defaultId = 'default-alert';

  onErrorMessage(id = this.defaultId): Observable<ErrorMessage> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, options?: any) {
    this.alert(new ErrorMessage({ ...options, type: ErrorMessageType.Success, message }));
  }

  error(message: string, options?: any) {
    this.alert(new ErrorMessage({ ...options, type: ErrorMessageType.Error, message }));
  }

  info(message: string, options?: any) {
    this.alert(new ErrorMessage({ ...options, type: ErrorMessageType.Info, message }));
  }

  warn(message: string, options?: any) {
    this.alert(new ErrorMessage({ ...options, type: ErrorMessageType.Warning, message }));
  }

  alert(alert: ErrorMessage) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId) {
    this.subject.next(new ErrorMessage({ id }));
  }
}
