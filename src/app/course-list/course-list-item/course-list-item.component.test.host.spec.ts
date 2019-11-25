import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CoursePlateBoxShadowColorDirective } from '../directives/course-plate-box-shadow-color.directive';
import { RouterModule } from '@angular/router';

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

describe('CourseListItemComponent via test host', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CourseListItemComponent, TestHostComponent, MinutesToHoursWithMinutesPipe, CoursePlateBoxShadowColorDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test host - should raise deleteCourse event when delete button is clicked', () => {
    const deleteDe = fixture.debugElement.query(By.css('.delete button'));
    deleteDe.triggerEventHandler('click', null);
    expect(testHostComponent.courseToDelete).toBe(testHostComponent.courseInput);
  });

  it('should remove star if topRated becomes false', () => {
    const testCourse1: CourseListItem = {
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
    testHostComponent.courseInput = testCourse1;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.fa.fa-star'))).not.toBeNull();
    const testCourse2: CourseListItem = {
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
      topRated: false
    };
    testHostComponent.courseInput = testCourse2;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.fa.fa-star'))).toBeNull();
  });

  it('should change course box color to yellow for top rated courses', () => {
    const courseTopRatedValueToRestore = testHostComponent.courseInput.topRated;
    testHostComponent.courseInput.topRated = true;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const backgroundColor = window.getComputedStyle(container.nativeElement).backgroundColor;
    expect(backgroundColor).toBe('rgb(250, 252, 170)');
    testHostComponent.courseInput.topRated = courseTopRatedValueToRestore;
  });

});
