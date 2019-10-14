import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';



@NgModule({
  declarations: [SearchComponent, AddCourseComponent, CourseListComponent, CourseListItemComponent, LoadMoreComponent],
  imports: [
    CommonModule
  ]
})
export class CourseListModule { }
