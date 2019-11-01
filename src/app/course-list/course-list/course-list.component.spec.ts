import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search/search.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CourseListComponent, SearchComponent, AddCourseComponent, CourseListItemComponent, LoadMoreComponent, MinutesToHoursWithMinutesPipe]
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
});
