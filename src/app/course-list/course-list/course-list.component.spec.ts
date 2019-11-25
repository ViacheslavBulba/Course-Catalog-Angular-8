import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search/search.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { By } from '@angular/platform-browser';
import { CoursePlateBoxShadowColorDirective } from '../directives/course-plate-box-shadow-color.directive';
import { ModalComponent } from '../../modal/components/modal/modal.component';
import { RouterModule } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule.forRoot([])],
      declarations: [CourseListComponent, SearchComponent, AddCourseComponent, CourseListItemComponent, LoadMoreComponent, MinutesToHoursWithMinutesPipe, OrderByPipe, CoursePlateBoxShadowColorDirective, ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('course list should not be empty', () => {
    expect(component.courseList[0]).not.toBeUndefined();
  });

  it('should show no data message if course list is empty', () => {
    const courseListToRestore = component.courseList;
    component.courseList = [];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.no-data'))).not.toBeNull();
    component.courseList = courseListToRestore;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.no-data'))).toBeNull();
  });

});
