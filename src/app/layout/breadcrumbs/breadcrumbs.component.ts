import { Component, OnInit } from '@angular/core';
import { Breadcrumbs } from './breadcrumbs.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { CoursesService } from 'src/app/course-list/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: Breadcrumbs[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), distinctUntilChanged())
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      });
  }

  buildBreadCrumb(route: ActivatedRoute, url = '', breadcrumbs: Breadcrumbs[] = []): Breadcrumbs[] {
    let label =
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
      label = route.snapshot.params[paramName];
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: Breadcrumbs = {
      label,
      url: nextUrl
    };
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
