import { TestBed, ComponentFixture, async } from '@angular/core/testing';
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
import { OrderByPipe } from './course-list/pipes/order-by.pipe';
import { CoursePlateBoxShadowColorDirective } from './course-list/directives/course-plate-box-shadow-color.directive';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
        MinutesToHoursWithMinutesPipe,
        OrderByPipe,
        CoursePlateBoxShadowColorDirective
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`document.title should be the same as component.title`, () => {
    expect(document.title).toBe(component.title);
  });

});
