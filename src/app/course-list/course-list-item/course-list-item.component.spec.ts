import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';

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
    id: 55,
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

  it('should render course name ' + courseInput.title, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.course-name').textContent).toBe(courseInput.title);
  });

  it('should render course description ' + courseInput.description, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.description').textContent).toBe(courseInput.description);
  });

  it('should render course date 11 Oct, 2019', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.date span').textContent).toBe('11 Oct, 2019');
  });

  it('should render course duration 1 h 30 min', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.duration span').textContent).toBe('1 h 30 min');
  });

  it('edit button text should be Edit', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.edit button').textContent).toBe('Edit');
  });

  it('delete button text should be Delete', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.delete button').textContent).toBe('Delete');
  });

  it('output event returns course on which delete was clicked', () => {
    const deleteDe = fixture.debugElement.query(By.css('.delete button'));
    let courseToDelete: CourseListItem;
    component.deleteCourse.subscribe((course: CourseListItem) => courseToDelete = course);
    deleteDe.triggerEventHandler('click', null);
    expect(courseToDelete).toBe(courseInput);
  });

});
