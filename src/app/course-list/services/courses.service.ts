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

  getCourseById(id: number): Observable<CourseListItem> {
    return this.http.get<CourseListItem>(`http://localhost:3004/courses/${id}`);
  }

  updateCourse(course: CourseListItem) {
    console.log('course to patch:');
    console.log(course);
    return this.http.patch<CourseListItem>(`http://localhost:3004/courses/${course.id}`, course);
  }

  removeItem(id: number) {
    return this.http.delete<any>(`http://localhost:3004/courses/${id}`);
  }

}
