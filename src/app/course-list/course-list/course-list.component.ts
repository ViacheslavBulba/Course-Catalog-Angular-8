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
    this.simpleAuthorSet.add(this.simpleAuthor);
  }

  ngOnInit() {
    this.courseList = [
      {
        id: 1,
        title: 'Upcoming course #1',
        description: 'Course description #1',
        creationDate: new Date('December 11 2019'),
        durationInMinutes: 90,
        authors: this.simpleAuthorSet,
        topRated: false
      },
      {
        id: 2,
        title: 'Fresh course #2',
        description: 'Course description #2',
        creationDate: new Date('November 1 2019'),
        durationInMinutes: 60,
        authors: this.simpleAuthorSet,
        topRated: false
      },
      {
        id: 3,
        title: 'Top Rated Video course #3',
        description: 'Course description #3',
        creationDate: new Date('October 13 2019'),
        durationInMinutes: 59,
        authors: this.simpleAuthorSet,
        topRated: true
      }
    ];
  }

  ngOnChanges() {
  }

  onDelete(item: CourseListItem) {
    console.log('Output from the child to the parent --> delete course id ' + item.id);
  }

}
