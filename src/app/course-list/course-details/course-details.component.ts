import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { CourseListItem } from 'src/app/models/course-list-item.model';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsComponent implements OnInit {

  public header = 'New Course';

  public course$ = new BehaviorSubject<CourseListItem>({
    id: Number(new Date()),
    title: '',
    description: '',
    creationDate: null,
    durationInMinutes: null,
    authors: null,
    topRated: false
  });

  private tempDuration: number = null;

  private tempDate: Date = null;

  private tempAuthors: Author[] = null;

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.url.toString() === 'new') {
      return;
    }

    this.header = 'Edit Course';

    const id = Number(this.activatedRoute.snapshot.url);
    this.coursesService
      .getCourseById(id)
      .subscribe(course => {
        console.log('course from backend:');
        console.log(course);
        this.course$.next(course);
      });
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

  saveAuthorsOutput(users: Author[]) {
    this.tempAuthors = users;
  }

  onSave(course: CourseListItem) {

    if (this.tempDuration !== null) {
      course.durationInMinutes = this.tempDuration;
    }
    if (this.tempDate !== null) {
      course.creationDate = this.tempDate;
    }
    if (this.tempAuthors !== null) {
      course.authors = this.tempAuthors;
    }

    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      console.log('edit existing course - save was clicked');
      console.log(course);
      console.log('json version');
      console.log(JSON.stringify(course));



      this.coursesService
        .updateCourse(course)
        .subscribe((response) => {
          console.log('response from backend for update');
          console.log(response);
          this.router.navigate(['/courses']);
        });
    } else {
      console.log('create new course');
      if (course.title === '') {
        course.title = String(new Date());
      }
      if (course.description === '') {
        course.description = 'Test course description';
      }
      if (course.creationDate === null) {
        course.creationDate = new Date();
      }
      if (course.durationInMinutes === null) {
        course.durationInMinutes = 60;
      }
      if (course.authors === null) {
        course.authors = [{
          id: 999,
          firstName: 'Auto',
          lastName: 'One'
        }];
      }
      this.coursesService
        .createCourse(course)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/courses']);
        });
    }
  }

}
