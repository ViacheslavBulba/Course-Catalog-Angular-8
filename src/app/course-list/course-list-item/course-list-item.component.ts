import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public courseInput: CourseListItem;
  @Output() public deleteCourse = new EventEmitter<CourseListItem>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit course id ' + this.courseInput.id);
  }

  onDelete() {
    this.deleteCourse.emit(this.courseInput);
  }

  setClasses() {
    const today = new Date();
    const freshLimitDate = new Date();
    freshLimitDate.setDate(today.getDate() - 14);
    const classes = {
      'course-container': true,
      'is-fresh': (this.courseInput.creationDate <= today) && (this.courseInput.creationDate >= freshLimitDate),
      'is-upcoming': this.courseInput.creationDate > today,
      'is-top-rated': this.courseInput.topRated
    };
    return classes;
  }

}
