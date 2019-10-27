import { Route } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';

export const ROUTES: Route[] = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent }
];
