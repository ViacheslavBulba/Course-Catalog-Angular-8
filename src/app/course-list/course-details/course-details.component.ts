import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { CoursesService } from '../services/courses.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseForm: FormGroup;
  submitted = false;

  header = 'New Course';

  course: CourseListItem;

  private tempDuration: number = null;

  private tempDate: Date = null;

  private tempAuthors: Set<Author> = null;

  constructor(private router: Router, private coursesService: CoursesService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.courseForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      authors: new FormControl('', [Validators.required])
    });

    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      this.header = 'Edit Course';
      const id = Number(this.activatedRoute.snapshot.url);
      this.course = this.coursesService.getCourseById(id);
      this.courseForm.controls['title'].setValue(this.course.title);
      this.courseForm.controls['description'].setValue(this.course.description);
      this.courseForm.controls['duration'].setValue(this.course.durationInMinutes);
      this.courseForm.controls['date'].setValue(this.course.creationDate);
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
    if (this.activatedRoute.snapshot.url.toString() !== 'new') {
      console.log('edit existing course');

      this.course.title = this.courseForm.controls['title'].value;
      this.course.description = this.courseForm.controls['description'].value;
      this.course.durationInMinutes = this.courseForm.get('duration').value;
      this.course.creationDate = this.courseForm.get('date').value;
      // this.course.authors = this.courseForm.get('authors').value;

      this.coursesService.updateItem(this.course);
    } else {
      console.log('create new course');
      this.course.title = this.courseForm.controls['title'].value;
      this.course.description = this.courseForm.controls['description'].value;
      this.course.durationInMinutes = this.courseForm.get('duration').value;
      this.course.creationDate = this.courseForm.get('date').value;

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

  onSubmit() {
    console.log(this.courseForm.value);
    this.submitted = true;
    if (this.courseForm.invalid) {
      return;
    }
    this.onSave();
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

}
