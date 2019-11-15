import { Injectable } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private simpleAuthor: User = {
    id: 1,
    firstName: 'Slava',
    lastName: 'Bulba'
  };

  private simpleAuthorSet = new Set<User>([this.simpleAuthor]);

  courseList: CourseListItem[] = [
    {
      id: 2,
      title: 'Fresh course #2',
      description: 'Course description #2',
      creationDate: new Date('November 1 2019'),
      durationInMinutes: 60,
      authors: this.simpleAuthorSet,
      topRated: false
    },
    {
      id: 1,
      title: 'Upcoming course #1',
      description: 'Course description #1',
      creationDate: new Date('December 11 2019'),
      durationInMinutes: 90,
      authors: this.simpleAuthorSet,
      topRated: false
    },
    {
      id: 3,
      title: 'Top Rated Video course #3',
      description: 'Course description #3',
      creationDate: new Date('October 13 2019'),
      durationInMinutes: 59,
      authors: this.simpleAuthorSet,
      topRated: true
    },
    {
      id: 4,
      title: 'Regular Video course #4',
      description: 'Course description #4',
      creationDate: new Date('August 13 2019'),
      durationInMinutes: 45,
      authors: this.simpleAuthorSet,
      topRated: false
    }
  ];

  constructor() {
  }

  getList(): Observable<CourseListItem[]> {
    return of(this.courseList);
  }

  createCourse(courseListItem: CourseListItem): Observable<CourseListItem[]> {
    this.courseList.unshift(courseListItem);
    return of(this.courseList);
  }

  getItemById(id: number): Observable<CourseListItem> {
    return of(this.courseList.find(it => {
      return it.id === id;
    }));
  }

  updateItem(courseListItem: CourseListItem): Observable<CourseListItem[]> {
    for (const course of this.courseList) {
      if (course.id === courseListItem.id) {
        course.title = courseListItem.title;
        course.description = courseListItem.description;
        course.creationDate = courseListItem.creationDate;
        course.durationInMinutes = courseListItem.durationInMinutes;
        course.authors = courseListItem.authors;
        course.topRated = courseListItem.topRated;
      }
    }
    return of(this.courseList);
  }

  removeItem(courseListItem: CourseListItem): Observable<CourseListItem[]> {
    this.courseList = this.courseList.filter(c => c.id !== courseListItem.id);
    return of(this.courseList);
  }

}
