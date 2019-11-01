import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  const simpleAuthor: User = {
    id: 1,
    firstName: 'Slava',
    lastName: 'Bulba'
  };
  const simpleAuthorSet = new Set<User>();
  const courseInput: CourseListItem = {
    id: 1,
    title: 'Video course #1',
    description: 'Course description #1',
    creationDate: new Date('October 11 2019'),
    durationInMinutes: 90,
    authors: simpleAuthorSet
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent, MinutesToHoursWithMinutesPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    simpleAuthorSet.add(simpleAuthor);
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.courseInput = courseInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
