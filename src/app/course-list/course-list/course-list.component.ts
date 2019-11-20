import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { FilterPipe } from '../pipes/filter.pipe';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterPipe]
})
export class CourseListComponent implements OnInit, OnChanges {

  public courseList: CourseListItem[];

  constructor(private coursesService: CoursesService, private filter: FilterPipe) {
  }

  getList() {
    this.coursesService.getList().subscribe(courses => {
      this.courseList = courses;
    });
  }

  ngOnInit() {
    this.getList();
  }

  ngOnChanges() {
  }

  onDelete(course: CourseListItem) {
    console.log('output from course to list: ' + course.id);
    this.getList();
  }

  onSearch(search: string) {
    if (search === '') {
      this.getList();
      return;
    }
    this.courseList = this.filter.transform(this.courseList, search);
  }

}
