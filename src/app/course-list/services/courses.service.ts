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

  courseList: CourseListItem[] = [];

  constructor() {
  }

  saveCoursesToLocalStorage() {
    localStorage.setItem('video-courses', JSON.stringify(this.courseList));
  }

  getCoursesFromLocalStorage() {
    if (localStorage.getItem('video-courses') === null) {
      this.courseList = [
        {
          id: 2,
          title: 'Fresh Course #2',
          description: 'Course description #2',
          creationDate: new Date('November 22 2019'),
          durationInMinutes: 60,
          authors: this.simpleAuthorSet,
          topRated: false
        },
        {
          id: 1,
          title: 'Upcoming course #1',
          description: 'Course description #1',
          creationDate: new Date('December 1 2020'),
          durationInMinutes: 90,
          authors: new Set<User>([{
            id: 1,
            firstName: 'Slava',
            lastName: 'Bulba'
          },
          {
            id: 2,
            firstName: 'John',
            lastName: 'Doe'
          },
          {
            id: 3,
            firstName: 'Joseph',
            lastName: 'Smith'
          }]),
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
          title: 'Course #4',
          description: 'Course description #4',
          creationDate: new Date('August 13 2019'),
          durationInMinutes: 45,
          authors: this.simpleAuthorSet,
          topRated: false
        }
      ];
    } else {
      this.courseList = JSON.parse(localStorage.getItem('video-courses'));
    }
  }

  getList(): Observable<CourseListItem[]> {
    this.getCoursesFromLocalStorage();
    return of(this.courseList);
  }

  createCourse(courseListItem: CourseListItem): Observable<CourseListItem[]> {
    this.courseList.unshift(courseListItem);
    this.saveCoursesToLocalStorage();
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
    this.saveCoursesToLocalStorage();
    return of(this.courseList);
  }

  removeItem(courseListItem: CourseListItem): Observable<CourseListItem[]> {
    this.courseList = this.courseList.filter(c => c.id !== courseListItem.id);
    this.saveCoursesToLocalStorage();
    return of(this.courseList);
  }

}
