import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumbs } from './breadcrumbs.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { CoursesService } from 'src/app/course-list/services/courses.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs$ = new BehaviorSubject<Breadcrumbs[]>(null);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {
    this.breadcrumbs$.next(this.buildBreadcrumbs(this.activatedRoute.root));
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), distinctUntilChanged())
      .subscribe(() => {
        this.breadcrumbs$.next(this.buildBreadcrumbs(this.activatedRoute.root));
      });
  }

  buildBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs: Breadcrumbs[] = []): Breadcrumbs[] {
    let textForBreadcrumb =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data.breadcrumb
        : '';
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      this.coursesService.getCourseById(Number(route.snapshot.params[paramName])).subscribe(course => {
        textForBreadcrumb = course.title;
        const urlForDynamicBreadcrumb = path ? `${url}/${path}` : url;
        const dynamicBreadcrumb: Breadcrumbs = {
          label: textForBreadcrumb,
          url: urlForDynamicBreadcrumb
        };
        this.breadcrumbs$.next([...breadcrumbs, dynamicBreadcrumb]);
      });
    }
    const urlForBreadcrumb = path ? `${url}/${path}` : url;
    const breadcrumb: Breadcrumbs = {
      label: textForBreadcrumb,
      url: urlForBreadcrumb
    };
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, urlForBreadcrumb, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
