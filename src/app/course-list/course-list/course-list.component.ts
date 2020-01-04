import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { ModalService } from '../../modal/services/modal.service';
import { CourseListItem } from '../../models/course-list-item.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public courseList: CourseListItem[] = [];

  public courseToDelete: CourseListItem;

  constructor(
    private coursesService: CoursesService,
    private modalService: ModalService,
  ) {
  }

  private getList() {
    this.coursesService.getList()
      .pipe(
        take(1),
      ).subscribe(courses => {
        this.courseList = courses;
      });
  }

  public ngOnInit() {
    this.getList();
  }

  public ngOnDestroy() {
    this.destroy$.next();
  }

  public saveCourseToBeDeleted(item: CourseListItem) {
    this.courseToDelete = item;
    console.log('Course marked as to be deleted: course id ' + this.courseToDelete.id);
  }

  public deleteCourse() {
    this.coursesService.removeItem((this.courseToDelete.id))
      .pipe(
        take(1),
      ).subscribe(() => {
        this.getList();
      });
  }

  public onSearch(search: string) {
    if (!search) {
      this.getList(); // to restore the list if search string is cleared
      return;
    }
    this.coursesService.searchCourses(search)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(courses => {
        this.courseList = courses;
      });
  }

  public closeModal(id: string) {
    this.modalService.close(id);
  }

}
