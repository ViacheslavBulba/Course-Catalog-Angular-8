import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';
import { DurationComponent } from '../duration/duration.component';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule.forRoot([]), DatePickerModule],
      declarations: [CourseDetailsComponent, DateSelectorComponent, DurationComponent]
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
