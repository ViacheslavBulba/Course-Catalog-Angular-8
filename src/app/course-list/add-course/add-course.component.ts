import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from 'src/app/layout/services/breadcrumbs.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private router: Router, private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
  }

  onAddCourse() {
    console.log('Add Course button was clicked');
    this.router.navigate(['/course-details']);
    this.breadcrumbsService.setBreadcrumbs('Courses / New Course');
  }

}
