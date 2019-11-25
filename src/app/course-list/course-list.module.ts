import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { MinutesToHoursWithMinutesPipe } from './pipes/minutes-to-hours-with-minutes.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CoursePlateBoxShadowColorDirective } from './directives/course-plate-box-shadow-color.directive';
import { ModalModule } from '../modal/modal.module';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    SearchComponent,
    AddCourseComponent,
    CourseListComponent,
    CourseListItemComponent,
    LoadMoreComponent,
    MinutesToHoursWithMinutesPipe,
    OrderByPipe,
    FilterPipe,
    CoursePlateBoxShadowColorDirective,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  exports: [SearchComponent, AddCourseComponent, CourseListComponent, LoadMoreComponent]
})
export class CourseListModule { }
