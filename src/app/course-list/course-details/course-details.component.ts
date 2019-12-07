import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  header = 'New Course';

  course: CourseListItem;

  private tempDuration: number = null;

  private tempDate: Date = null;

  private tempAuthors: Set<Author> = null;

  constructor(private router: Router, private coursesService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      this.header = 'Edit Course';
      const id = Number(this.activatedRoute.snapshot.url);
      this.course = this.coursesService.getCourseById(id);
    } else {
      this.course = {
        id: Number(new Date()),
        title: '',
        description: '',
        creationDate: null,
        durationInMinutes: null,
        authors: null,
        topRated: false
      };
    }
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  saveDurationOutput(duration: number) {
    this.tempDuration = duration;
  }

  saveDateOutput(date: Date) {
    this.tempDate = date;
  }

  saveAuthorsOutput(users: Set<Author>) {
    this.tempAuthors = users;
  }

  onSave() {

    if (this.tempDuration !== null) {
      this.course.durationInMinutes = this.tempDuration;
    }
    if (this.tempDate !== null) {
      this.course.creationDate = this.tempDate;
    }
    if (this.tempAuthors !== null) {
      this.course.authors = this.tempAuthors;
    }

    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      console.log('edit existing course');
      this.coursesService.updateItem(this.course);
    } else {
      console.log('create new course');
      if (this.course.title === '') {
        this.course.title = String(new Date());
      }
      if (this.course.description === '') {
        this.course.description = 'Test course description';
      }
      if (this.course.creationDate === null) {
        this.course.creationDate = new Date();
      }
      if (this.course.durationInMinutes === null) {
        this.course.durationInMinutes = 60;
      }
      if (this.course.authors === null) {
        this.course.authors = new Set<Author>([{
          id: 999,
          firstName: 'Auto',
          lastName: 'One'
        }]);
      }
      this.coursesService.createCourse(this.course);
    }
    this.router.navigate(['/courses']);
  }

}
