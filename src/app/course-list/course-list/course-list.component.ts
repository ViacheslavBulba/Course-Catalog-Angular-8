import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { FilterPipe } from '../pipes/filter.pipe';
import { CoursesService } from '../services/courses.service';
import { ModalService } from 'src/app/modal/services/modal.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterPipe]
})
export class CourseListComponent implements OnInit, OnChanges {

  public courseList: CourseListItem[];

  private courseToDelete: CourseListItem;

  private courseTitleToDelete = '';

  constructor(private coursesService: CoursesService, private filter: FilterPipe, private modalService: ModalService) {
  }

  ngOnInit() {
    this.coursesService.getList().subscribe(courses => {
      this.courseList = courses;
    });
  }

  ngOnChanges() {
  }

  saveCourseToBeDeleted(item: CourseListItem) {
    this.courseToDelete = item;
    this.courseTitleToDelete = this.courseToDelete.title;
    console.log('Course marked as to be deleted: course id ' + this.courseToDelete.id);
  }

  deleteCourse() {
    this.coursesService.removeItem(this.courseToDelete).subscribe();
    console.log('Course has been deleted: course id ' + this.courseToDelete.id);
    this.ngOnInit();
  }

  onSearch(search: string) {
    if (search === '') {
      this.ngOnInit();
      return;
    }
    this.courseList = this.filter.transform(this.courseList, search);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
