# Video Courses App

This project was generated with Angular CLI version 8.3.4.

## How to run the project locally

1. Download or clone the project
2. Open project folder in terminal
3. Run `ng serve --open`, it will open the project in your browser automatically

## Steps performed

1. `npm install -g @angular/cli`
2. `ng new angular-mentoring-program`
  `? Would you like to add Angular routing?` Yes
  `? Which stylesheet format would you like to use?` CSS
3. updated tslint.json
4. added the following modules and components
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
5. added models for user and course list item
  `ng generate interface models/User`
  `ng generate interface models/CourseListItem`
