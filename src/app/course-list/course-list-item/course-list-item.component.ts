import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { ModalService } from 'src/app/modal/services/modal.service';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public courseInput: CourseListItem;
  @Output() public deleteCourse = new EventEmitter<CourseListItem>();

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit course id ' + this.courseInput.id);
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
