# Home Task 2

## Steps performed

**1. Added responsive design for video courses page**

There is a minor issue with search component responsiveness on small screen, will fix later

**2. Added sticky footer**

Simple sticky footer solution through min-height: calc(100vh - 3*64px); 

**3. Added transform pipes for duration and date values**

**4. Added console out for clicks on target elements**

**5. Added simple routing base - I will add <router-outlet></router-outlet> later when we have other page, otherwise it is not clear where to place it**

Create new file app.routes.ts

`import { Route } from '@angular/router';`

`import { CourseListComponent } from './course-list/course-list/course-list.component';`

`export const ROUTES: Route[] = [`

`  { path: '', redirectTo: 'courses', pathMatch: 'full' },`

`  { path: 'courses', component: CourseListComponent }`

`];`

Add imports in app.module.ts

`import { RouterModule } from '@angular/router';`

`import { ROUTES } from './app.routes';`

`@NgModule({`

`  declarations: [`

`    AppComponent`

`  ],`

`  imports: [`

`    RouterModule.forRoot(ROUTES)`

`  ],`

`  providers: [],`

`  bootstrap: [AppComponent]`

`})`

**6. For Delete button - used @Output to call method on parent component. Console logged course id in video courses page component**

**7. Assigned fake values on ngOnInit hook**

# Home Task 1

This project was generated with Angular CLI version 8.3.4.

## How to run the project locally

1. Download and install NodeJS from https://nodejs.org/en/
2. Download or clone the project
3. Open project folder in terminal
4. Run `npm install -g @angular/cli`
5. Run `npm install` inside the folder to install all dependencies
6. Run `ng serve --open`, it will open the project in your browser automatically

## Steps performed

**1.** `npm install -g @angular/cli`

**2.** `ng new angular-mentoring-program`

`? Would you like to add Angular routing?` Yes

`? Which stylesheet format would you like to use?` CSS

**3. Updated tslint.json**

**4. Added the following modules and components**

`ng generate module layout`

`ng generate component layout/header`

`ng generate component layout/footer`

`ng generate component layout/breadcrumbs`

`ng generate module course-list`

`ng generate component course-list/search`

`ng generate component course-list/add-course`

`ng generate component course-list/course-list`

`ng generate component course-list/course-list-item`

`ng generate component course-list/load-more`

**5. Added models for user and course list item**

`ng generate interface models/User`

`ng generate interface models/CourseListItem`

**6. Revealed components to app.component.html**

**7. Added showing on the page video courses titles from component data**
