import { Injectable } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { Author } from '../../models/author.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseList: CourseListItem[] = [];

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<CourseListItem[]>('http://localhost:3004/courses');
  }

  createCourse(courseListItem: CourseListItem) {
    return this.http.post<CourseListItem>('http://localhost:3004/courses', courseListItem);
  }

  getCourseNameById(id: number): string {
    for (const course of this.courseList) {
      if (course.id === id) {
        return course.title;
      }
    }
    return '';
  }

  getCourseById(id: number): Observable<CourseListItem> {
    return this.http.get<CourseListItem>(`http://localhost:3004/courses/${id}`);
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

  removeItem(id: number) {
    return this.http.delete<any>(`http://localhost:3004/courses/${id}`);
  }

}
