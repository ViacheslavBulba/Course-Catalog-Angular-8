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

  ngOnInit() {
    this.coursesService.getList().subscribe(courses => {
      this.courseList = courses;
    });
  }

  ngOnChanges() {
  }

  onDelete(item: CourseListItem) {
    console.log('Output from the child to the parent --> delete course id ' + item.id);
  }

  onSearch(search: string) {
    if (search === '') {
      this.ngOnInit();
      return;
    }
    this.courseList = this.filter.transform(this.courseList, search);
  }

}
