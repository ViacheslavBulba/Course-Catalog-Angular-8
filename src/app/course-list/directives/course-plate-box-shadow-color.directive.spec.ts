import { CourseListItemComponent } from '../../course-list/course-list-item/course-list-item.component';
import { Component } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoursePlateBoxShadowColorDirective } from './course-plate-box-shadow-color.directive';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';

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
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [TestHostComponent, CourseListItemComponent, CoursePlateBoxShadowColorDirective, MinutesToHoursWithMinutesPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change course box shadow color to blue if creationDate > today (is not working)', () => {
    const courseDateToRestore = component.courseInput.creationDate;
    const today = new Date();
    const newDate = new Date();
    newDate.setDate(today.getDate() - 30);
    component.courseInput.creationDate = newDate;
    // component.courseInput.creationDate.setDate(today.getDate() + 1);
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.course-container'));
    const boxShadow = window.getComputedStyle(container.nativeElement).boxShadow;
    expect(boxShadow).toBe('rgba(18, 21, 35, 0.08) 0px 1px 24px 0px'); // should be rgba(60, 116, 199, 1)
    // expect(fixture.nativeElement.querySelector('.course-container').style.boxShadow).toBe('0 1px 24px 0 rgb(60, 116, 199)');
    // expect(fixture.debugElement.query(By.css('.course-container')).styles['box-shadow']).toBe('0 1px 24px 0 rgb(60, 116, 199)');
    // expect(fixture.nativeElement.querySelector('.course-container').styles['box-shadow']).toBe('0 1px 24px 0 rgb(60, 116, 199)');
    // expect(fixture.debugElement.query(By.css('.course-container')).nativeElement.styles['box-shadow']).toBe('0 1px 24px 0 rgb(60, 116, 199)');
    component.courseInput.creationDate = courseDateToRestore;
  });

});
