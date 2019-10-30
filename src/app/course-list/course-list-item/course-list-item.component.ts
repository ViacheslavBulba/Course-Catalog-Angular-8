import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public courseInput: CourseListItem;
  @Output() public deleteCourse: EventEmitter<CourseListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit course id ' + this.courseInput.id);
  }

  onDelete() {
    this.deleteCourse.emit(this.courseInput);
  }

}
