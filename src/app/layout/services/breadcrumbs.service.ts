import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor() { }

  private _breadcrumbs: BehaviorSubject<string> = new BehaviorSubject('Courses');

  public breadcrumbs$ = this._breadcrumbs.asObservable();

  setBreadcrumbs(str: string) {
    this._breadcrumbs.next(str);
  }

}
