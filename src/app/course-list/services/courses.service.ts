import { Injectable } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseList: CourseListItem[] = [];

  constructor() {
    this.courseList = [
      {
        id: 2,
        title: 'Fresh Course #2',
        description: 'Course description #2',
        creationDate: new Date('November 22 2019'),
        durationInMinutes: 60,
        authors: new Set<User>([{
          id: 2,
          firstName: 'Author',
          lastName: 'Two'
        }]),
        topRated: false
      },
      {
        id: 1,
        title: 'Upcoming course #1',
        description: 'Course description #1',
        creationDate: new Date('December 1 2020'),
        durationInMinutes: 90,
        authors: new Set<User>([{
          id: 21,
          firstName: 'Slava',
          lastName: 'Bulba'
        },
        {
          id: 22,
          firstName: 'John',
          lastName: 'Doe'
        },
        {
          id: 33,
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
        authors: new Set<User>([{
          id: 3,
          firstName: 'Author',
          lastName: 'Three'
        }]),
        topRated: true
      },
      {
        id: 4,
        title: 'Course #4',
        description: 'Course description #4',
        creationDate: new Date('August 13 2019'),
        durationInMinutes: 45,
        authors: new Set<User>([{
          id: 4,
          firstName: 'Author',
          lastName: 'Four'
        }]),
        topRated: false
      }
    ];
  }

  getList(): Observable<CourseListItem[]> {
    return of(this.courseList);
  }

  createCourse(courseListItem: CourseListItem): void {
    this.courseList.unshift(courseListItem);
  }

  getCourseNameById(id: number): string {
    for (const course of this.courseList) {
      if (course.id === id) {
        return course.title;
      }
    }
    return '';
  }

  getCourseById(id: number): CourseListItem {
    for (const course of this.courseList) {
      if (course.id === id) {
        return course;
      }
    }
    return null;
  }

  updateItem(courseListItem: CourseListItem): void {
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
  }

  removeItem(courseListItem: CourseListItem): void {
    this.courseList = this.courseList.filter(c => c.id !== courseListItem.id);
  }

}
