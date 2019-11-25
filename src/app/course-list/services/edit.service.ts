import { Injectable } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }

  private _courseToEdit: BehaviorSubject<CourseListItem> = new BehaviorSubject(null);

  public courseToEdit$ = this._courseToEdit.asObservable();

  setCourseToEdit(courseListItem: CourseListItem) {
    this._courseToEdit.next(courseListItem);
  }

}
