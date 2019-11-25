import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  header = 'New Course';

  course: CourseListItem;

  constructor(private editService: EditService) { }

  ngOnInit() {
    this.editService.courseToEdit$.subscribe(course => this.course = course);
    if (this.course != null) {
      this.header = 'Edit Course';
    }
  }

}
