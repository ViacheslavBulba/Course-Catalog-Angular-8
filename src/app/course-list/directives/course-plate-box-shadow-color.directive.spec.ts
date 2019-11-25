import { CourseListItemComponent } from '../../course-list/course-list-item/course-list-item.component';
import { Component } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoursePlateBoxShadowColorDirective } from './course-plate-box-shadow-color.directive';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    <app-course-list-item
      [courseInput] = "courseInput">
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

}

describe('CoursePlateBoxShadowColorDirective', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule.forRoot([])
      ],
      declarations: [TestHostComponent, CourseListItemComponent, CoursePlateBoxShadowColorDirective, MinutesToHoursWithMinutesPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change course box shadow color to blue if creationDate > today', () => {
    const today = new Date();
    const newDate = new Date();
    newDate.setDate(today.getDate() + 1);
    const testCourse: CourseListItem = {
      id: 44,
      title: 'Video course #1',
      description: 'Course description #1',
      creationDate: new Date(newDate),
      durationInMinutes: 90,
      authors: new Set<User>([{
        id: 33,
        firstName: 'Slava',
        lastName: 'Bulba'
      }]),
      topRated: true
    };
    testHostComponent.courseInput = testCourse;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const boxShadow = window.getComputedStyle(container.nativeElement).boxShadow;
    expect(boxShadow).toBe('rgb(60, 116, 199) 0px 1px 24px 0px');
  });

  it('should change course box shadow color to green if creationDate <= 14 days (1 day)', () => {
    const today = new Date();
    const newDate = new Date();
    newDate.setDate(today.getDate() - 1);
    const testCourse: CourseListItem = {
      id: 44,
      title: 'Video course #1',
      description: 'Course description #1',
      creationDate: new Date(newDate),
      durationInMinutes: 90,
      authors: new Set<User>([{
        id: 33,
        firstName: 'Slava',
        lastName: 'Bulba'
      }]),
      topRated: true
    };
    testHostComponent.courseInput = testCourse;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const boxShadow = window.getComputedStyle(container.nativeElement).boxShadow;
    expect(boxShadow).toBe('rgb(76, 199, 60) 0px 1px 24px 0px');
  });

  it('should change course box shadow color to green if creationDate <= 14 days (14 days)', () => {
    const today = new Date();
    const newDate = new Date();
    newDate.setDate(today.getDate() - 14);
    const testCourse: CourseListItem = {
      id: 44,
      title: 'Video course #1',
      description: 'Course description #1',
      creationDate: new Date(newDate),
      durationInMinutes: 90,
      authors: new Set<User>([{
        id: 33,
        firstName: 'Slava',
        lastName: 'Bulba'
      }]),
      topRated: true
    };
    testHostComponent.courseInput = testCourse;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const boxShadow = window.getComputedStyle(container.nativeElement).boxShadow;
    expect(boxShadow).toBe('rgb(76, 199, 60) 0px 1px 24px 0px');
  });

  it('should change course box shadow color to black if creationDate > 14 days', () => {
    const today = new Date();
    const newDate = new Date();
    newDate.setDate(today.getDate() - 15);
    const testCourse: CourseListItem = {
      id: 44,
      title: 'Video course #1',
      description: 'Course description #1',
      creationDate: new Date(newDate),
      durationInMinutes: 90,
      authors: new Set<User>([{
        id: 33,
        firstName: 'Slava',
        lastName: 'Bulba'
      }]),
      topRated: true
    };
    testHostComponent.courseInput = testCourse;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const boxShadow = window.getComputedStyle(container.nativeElement).boxShadow;
    expect(boxShadow).toBe('rgba(18, 21, 35, 0.08) 0px 1px 24px 0px');
  });

});
