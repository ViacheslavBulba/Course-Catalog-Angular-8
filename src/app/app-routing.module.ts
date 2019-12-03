import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { LoginComponent } from './login/login/login.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { AuthGuard } from './login/auth.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CourseListComponent, canActivate: [AuthGuard] },
  {
    path: 'courses', canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: 'new', component: CourseDetailsComponent, canActivate: [AuthGuard],
        data: {
          breadcrumb: 'New Course'
        }
      },
      {
        path: ':id', component: CourseDetailsComponent, canActivate: [AuthGuard],
        data: {
          breadcrumb: ''
        }
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
