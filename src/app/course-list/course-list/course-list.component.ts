import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { FilterPipe } from '../pipes/filter.pipe';
import { CoursesService } from '../services/courses.service';
import { ModalService } from '../../modal/services/modal.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterPipe]
})
export class CourseListComponent implements OnInit, OnChanges {

  public courseList: CourseListItem[];

  public courseToDelete: CourseListItem;

  constructor(private coursesService: CoursesService, private filter: FilterPipe, private modalService: ModalService) {
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

  saveCourseToBeDeleted(item: CourseListItem) {
    this.courseToDelete = item;
    console.log('Course marked as to be deleted: course id ' + this.courseToDelete.id);
  }

  deleteCourse() {
    this.coursesService.removeItem(this.courseToDelete);
    console.log('Course has been deleted: course id ' + this.courseToDelete.id);
    this.getList();
  }

  onSearch(search: string) {
    if (search === '') {
      this.getList();
      return;
    }
    this.courseList = this.filter.transform(this.courseList, search);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
