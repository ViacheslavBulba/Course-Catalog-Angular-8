import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { EditService } from '../services/edit.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  header = 'New Course';

  course: CourseListItem;

  constructor(private editService: EditService, private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
    this.editService.courseToEdit$.subscribe(course => this.course = course);
    if (this.course != null) {
      this.header = 'Edit Course';
    }
  }

  onCancel() {
    this.editService.reset();
    this.router.navigate(['/courses']);
  }

  onSave() {
    if (this.course != null) {
      console.log('edit existing course');
    } else {
      console.log('create new course');
    }
    this.router.navigate(['/courses']);
    this.editService.reset();
  }

}
