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

@NgModule({
  declarations: [SearchComponent, AddCourseComponent, CourseListComponent, CourseListItemComponent, LoadMoreComponent, MinutesToHoursWithMinutesPipe, OrderByPipe, FilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchComponent, AddCourseComponent, CourseListComponent, LoadMoreComponent]
})
export class CourseListModule { }
