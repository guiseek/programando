import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavItem } from '@webapp/shared/data-access';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'webapp-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  cursos$: Observable<ScullyRoute[]>;
  navigation: NavItem[] = []

  topic: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private srs: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(events => {
        // console.log(events)

        const params = this.route.snapshot.params;
        // console.log(params);
        this.getCourses(params.topic);

      })

    // this.srs.getCurrent()
    //   .subscribe(console.log)
    // this.cursos$ = this.srs.available$.pipe(
    //   tap(console.log),
    //   map(routeList => {
    //     return routeList.filter(
    //       // prettier-ignore
    //       (route: ScullyRoute) =>
    //       route.route.startsWith(`/cursos/`)
    //     );
    //   }),
    //   tap(posts => {
    //     console.log(posts);
    //     this.navigation.push({
    //       title: 'Publicações',
    //       isOpened: true,
    //       route: '/blog',
    //       children: posts
    //     });
    //   })
    // )
  }

  getCourses(topic) {
    this.cursos$ = this.srs.available$
      .pipe(
        map((courses) => {
          return courses.filter(course => {
            return course && course.keywords && course.keywords.includes(topic)
          })
        })
      )
  }

}
