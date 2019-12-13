import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AuthorsComponent } from '../authors/authors.component';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { DurationComponent } from '../duration/duration.component';
import { CourseDetailsComponent } from './course-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule.forRoot([]),
        DatePickerModule,
        NgSelectModule,
        HttpClientTestingModule
      ],
      declarations: [
        CourseDetailsComponent,
        DateSelectorComponent,
        DurationComponent,
        AuthorsComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { url: 'new' } } },
      ]
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
