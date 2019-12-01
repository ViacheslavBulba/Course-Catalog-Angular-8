import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { ModalService } from '../../modal/services/modal.service';
import { Router } from '@angular/router';
import { EditService } from '../services/edit.service';
import { BreadcrumbsService } from 'src/app/layout/services/breadcrumbs.service';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {

  @Input() public courseInput: CourseListItem;
  @Output() public deleteCourse = new EventEmitter<CourseListItem>();

  constructor(private modalService: ModalService, private router: Router, private editService: EditService, private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit course id ' + this.courseInput.id);
    this.editService.setCourseToEdit(this.courseInput);
    this.router.navigate(['/courses', this.courseInput.id]);
    this.breadcrumbsService.setBreadcrumbs('Courses / Edit Course');
  }

  onDelete() {
    this.deleteCourse.emit(this.courseInput);
  }

  isTopRated() {
    const classes = {
      'is-top-rated': this.courseInput.topRated
    };
    return classes;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
