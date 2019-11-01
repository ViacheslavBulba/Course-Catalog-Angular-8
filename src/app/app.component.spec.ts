import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './course-list/search/search.component';
import { AddCourseComponent } from './course-list/add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { LoadMoreComponent } from './course-list/load-more/load-more.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component';
import { MinutesToHoursWithMinutesPipe } from './course-list/pipes/minutes-to-hours-with-minutes.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SearchComponent,
        AddCourseComponent,
        CourseListComponent,
        CourseListItemComponent,
        LoadMoreComponent,
        FooterComponent,
        MinutesToHoursWithMinutesPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-mentoring-program'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-mentoring-program');
  });

});
