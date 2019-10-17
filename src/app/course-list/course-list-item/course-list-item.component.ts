import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public courseInput: CourseListItem;

  constructor() { }

  ngOnInit() {
  }

}
