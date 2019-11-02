# Home Task 3

## Fix all generated specs to pass ng test

**1. Failed: Template parse errors: 'app-search' is not a known element**

Add import and declaration, like here

```
import { SearchComponent } from '../search/search.component';
...
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, SearchComponent]
    })
      .compileComponents();
  }));
...
```

**2. TypeError: Cannot read property 'title' of undefined**

Add variables for @Input fields, like here:

```
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../../models/course-list-item.model';
import { User } from '../../models/user.model';

describe('CourseListItemComponent', () => {

  const simpleAuthor: User = {
    id: 1,
    firstName: 'Slava',
    lastName: 'Bulba'
  };
  const simpleAuthorSet = new Set<User>();
  const courseInput: CourseListItem = {
    id: 1,
    title: 'Video course #1',
    description: 'Course description #1',
    creationDate: new Date('October 11 2019'),
    durationInMinutes: 90,
    authors: simpleAuthorSet
  };

  beforeEach(() => {
    simpleAuthorSet.add(simpleAuthor);
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.courseInput = courseInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

**3. Failed: Template parse errors: Can't bind to 'courseInput' since it isn't a known property of 'app-course-list-item'**

Try to add forms module, like here:

```
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        ...
      ],
    }).compileComponents();
  }));
```

# Home Task 2

## Steps performed

**1. Added responsive design for video courses page**

There is a minor issue with search component responsiveness on small screen, will fix later

**2. Added sticky footer**

Simple sticky footer solution through min-height: calc(100vh - 3*64px); 

**3. Added transform pipes for duration and date values**

Added pipes for duration and date {{ courseInput.creationDate | date : 'd MMM, y' }} 

`ng g p course-list/pipes/MinutesToHoursWithMinutes`

Now write some code inside the minutes-to-hours-with-minutes.pipe.ts file

Don't forget to import our custom pipe in module.ts file and add it to the declarations: [...MinutesToHoursWithMinutes] array (do this if you did not use the Angular CLI to generate the Date Pipe, otherwise, the import should already be there as Angular CLI does it for you).

Remove pipe import from app.module.ts and add it to course-list-module.ts

```
import { MinutesToHoursWithMinutesPipe } from '../pipes/minutes-to-hours-with-minutes.pipe';

@NgModule({
  declarations: [...MinutesToHoursWithMinutesPipe]
```

Update HTML:

```
<span>{{ courseInput.durationInMinutes | minutesToHoursWithMinutes }}</span>
```

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
