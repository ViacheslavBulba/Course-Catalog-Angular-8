import { Route } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { LoginComponent } from './login/login/login.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';

export const ROUTES: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: '**', redirectTo: '' }
];
