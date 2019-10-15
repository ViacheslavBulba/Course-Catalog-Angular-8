# Video Courses App

This project was generated with Angular CLI version 8.3.4.

## How to run the project locally

1. Download and install NodeJS from https://nodejs.org/en/
2. Download or clone the project
3. Open project folder in terminal
4. Run `npm install -g @angular/cli`
5. Run `npm install` inside the folder to install all dependencies
6. Run `ng serve --open`, it will open the project in your browser automatically

## Steps performed

1. `npm install -g @angular/cli`

2. `ng new angular-mentoring-program`

`? Would you like to add Angular routing?` Yes

`? Which stylesheet format would you like to use?` CSS

3. **Updated tslint.json**

4. **Added the following modules and components**

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

5. **Added models for user and course list item**

`ng generate interface models/User`

`ng generate interface models/CourseListItem`
