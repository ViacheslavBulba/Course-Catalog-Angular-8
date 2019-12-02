import { Route } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { LoginComponent } from './login/login/login.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { AuthGuard } from './login/auth.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

export const ROUTES: Route[] = [
  { path: '', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'courses/new', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];
