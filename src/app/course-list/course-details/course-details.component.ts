import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router: Router, private coursesService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      this.header = 'Edit Course';
      const id = Number(this.activatedRoute.snapshot.url);
      this.course = this.coursesService.getCourseById(id);
    }
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    if (this.course != null) {
      console.log('edit existing course');
    } else {
      console.log('create new course');
    }
    this.router.navigate(['/courses']);
  }

}
