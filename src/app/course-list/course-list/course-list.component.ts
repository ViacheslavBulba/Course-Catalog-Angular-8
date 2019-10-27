import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {

  private simpleAuthor: User = {
    id: 1,
    firstName: 'Slava',
    lastName: 'Bulba'
  };

  private simpleAuthorSet = new Set<User>();

  public courseList: CourseListItem[];

  constructor() {
    console.log('Message from constructor()');
    this.simpleAuthorSet.add(this.simpleAuthor);
  }

  ngOnInit() {
    console.log('Message from ngOnInit()');
    this.courseList = [
      {
        id: 1,
        title: 'Video course #1',
        description: 'Course description #1',
        creationDate: new Date('October 11 2019'),
        durationInMinutes: 90,
        authors: this.simpleAuthorSet
      },
      {
        id: 2,
        title: 'Video course #2',
        description: 'Course description #2',
        creationDate: new Date('October 12 2019'),
        durationInMinutes: 60,
        authors: this.simpleAuthorSet
      },
      {
        id: 3,
        title: 'Video course #3',
        description: 'Course description #3',
        creationDate: new Date('October 13 2019'),
        durationInMinutes: 125,
        authors: this.simpleAuthorSet
      }
    ];
  }

  ngOnChanges() {
    console.log('Message from ngOnChanges()');
  }

  onDelete(item: CourseListItem) {
    console.log('Output from the child to the parent --> delete course id ' + item.id);
  }

}
