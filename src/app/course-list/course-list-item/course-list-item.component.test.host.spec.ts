import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-course-list-item
      [courseInput] = "courseInput" (deleteCourse) = "onDelete($event)">
    </app-course-list-item>`
})
class TestHostComponent {
  courseInput: CourseListItem = {
    id: 44,
    title: 'Video course #1',
    description: 'Course description #1',
    creationDate: new Date('October 11 2019'),
    durationInMinutes: 90,
    authors: new Set<User>([{
      id: 33,
      firstName: 'Slava',
      lastName: 'Bulba'
    }]),
    topRated: true
  };
  courseToDelete: CourseListItem;
  onDelete(courseInput: CourseListItem) { this.courseToDelete = courseInput; }
}

describe('CourseListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent, TestHostComponent, MinutesToHoursWithMinutesPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test host - should raise deleteCourse event when delete button is clicked', () => {
    const deleteDe = fixture.debugElement.query(By.css('.delete button'));
    deleteDe.triggerEventHandler('click', null);
    expect(component.courseToDelete).toBe(component.courseInput);
  });

  it('should remove star if topRated becomes false', () => {
    // set up pre-conditions
    component.courseInput.topRated = true;
    fixture.detectChanges();
    // should be rendered initially
    expect(fixture.debugElement.query(By.css('.fa.fa-star'))).not.toBeNull();
    // trigger change
    component.courseInput.topRated = false;
    fixture.detectChanges();
    // should not be rendered
    expect(fixture.debugElement.query(By.css('.fa.fa-star'))).toBeNull();
  });

});
