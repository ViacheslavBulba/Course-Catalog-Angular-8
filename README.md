# _Course Catalog Angular 8 Project_

<img width="1415" alt="Screen Shot 2021-10-25 at 8 26 30 PM" src="https://user-images.githubusercontent.com/29576017/138804693-5034da5e-382e-4b99-b080-6bc4f7eb20be.png">
<img width="1420" alt="Screen Shot 2021-10-25 at 8 27 52 PM" src="https://user-images.githubusercontent.com/29576017/138804703-651487b7-efba-46a6-81d8-c260a5a27d7d.png">
<img width="1430" alt="Screen Shot 2021-10-25 at 8 28 09 PM" src="https://user-images.githubusercontent.com/29576017/138804719-34d7d5a9-dcf0-4d70-a6a4-595ba35043e9.png">

# Project Goal

In this project I was provided with a backend (returns list of courses) and the goal was to build frontend part using Angular 8.

# How to run the project

1. Download and install NodeJS with NPM from https://nodejs.org/en/

2. Download or clone the project source code

3. Install all required npm packages (dependencies) and run the backend in a separate terminal window:

`cd [path-to-project-folder]/backend`

`npm install`

`npm run start`

4. Install all required npm packages (dependencies) and run the frontend in a separate terminal window (it will open the project in your default browser automatically):

`cd [path-to-project-folder]`

`npm install`

`sudo npm install -g @angular/cli@8.3.9`

`ng serve --aot --open`

5. Use `test/test` credentials to login

# Features

1. Login Form with required fields validation and integration with simple backend
2. Routing with Auth guard and authorization service
3. Async breadcrumbs
4. Server side course search
5. Directives and Pipes
6. Sticky footer