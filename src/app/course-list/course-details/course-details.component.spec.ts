import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';
import { DurationComponent } from '../duration/duration.component';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AuthorsComponent } from '../authors/authors.component';
import { NgSelectModule } from '@ng-select/ng-select';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule.forRoot([]), DatePickerModule, NgSelectModule],
      declarations: [CourseDetailsComponent, DateSelectorComponent, DurationComponent, AuthorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
