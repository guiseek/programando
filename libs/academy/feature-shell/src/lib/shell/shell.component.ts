import { NavItem } from '@webapp/shared/data-access';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'webapp-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  cursos$: Observable<NavItem[]>;
  navigation: NavItem[] = []
  topics$: Observable<NavItem[]>;
  items = [
    {
      icon: 'angular',
      title: 'Angular',
      route: '/topico/angular'
    },
    {
      icon: 'firebase',
      title: 'Firebase',
      route: '/topico/firebase'
    },
    {
      icon: 'nestjs',
      title: 'NestJS',
      route: '/topico/nestjs'
    }
  ];
  constructor(
    private http: HttpClient,
    private srs: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    this.topics$ = this.http.get<NavItem[]>('/assets/data/topics.json')
      .pipe(
        map((topics) => {
          // console.log(topics)
          return topics.map(({icon, ...topic}) => {
            return {
              ...topic,
              svgIcon: icon.replace('.svg','')
            }
          })
        })
      )

    this.srs.available$
      .pipe(
        map(courses => {
          return courses.filter(course => course.route.startsWith('/cursos/'))
        })
      )
      // .subscribe(console.log);
  }

}
