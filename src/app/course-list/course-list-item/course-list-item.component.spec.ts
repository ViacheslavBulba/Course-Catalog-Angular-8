import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../../models/course-list-item.model';
import { Author } from '../../models/author.model';
import { By } from '@angular/platform-browser';
import { CoursePlateBoxShadowColorDirective } from '../directives/course-plate-box-shadow-color.directive';
import { RouterModule } from '@angular/router';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  const simpleAuthor: Author = {
    id: 1,
    firstName: 'Slava',
    lastName: 'Bulba'
  };
  const simpleAuthorSet = new Set<Author>();
  const courseInput: CourseListItem = {
    id: 55,
    title: 'Video course #1',
    description: 'Course description #1',
    creationDate: new Date('October 11 2019'),
    durationInMinutes: 90,
    authors: simpleAuthorSet,
    topRated: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CourseListItemComponent, MinutesToHoursWithMinutesPipe, CoursePlateBoxShadowColorDirective]
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
    expect(compiled.querySelector('.course-name').textContent.trim().toLowerCase()).toBe(courseInput.title.toLowerCase());
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
