import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { sortBy } from '@webapp/shared/util/iterators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'blog-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnChanges {
  @Input() max: number;
  @Input() keyword: string;
  @Input() search: string;
  blogPostData$: Observable<ScullyRoute[]>;

  constructor(
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {
    // this.loadPosts();
  }

  ngOnChanges() {
    this.loadPosts();
  }

  private loadPosts() {
    console.log('load');

    this.blogPostData$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList
          .filter((route: ScullyRoute) => route.route.startsWith(`/posts/`))
          .filter((route: ScullyRoute) => route.published !== false)
          // .reverse();
      }),
      map(routeList => {
        if (!this.keyword) {
          return routeList;
        }
        return routeList.filter((route: ScullyRoute) =>
          route.keywords.includes(this.keyword),
        );
      }),
      map(routeList => {
        if (!this.search) {
          return routeList;
        }
        return routeList.filter((route: ScullyRoute) => {
          const searchTerm = this.search.toLowerCase();
          return (
            route.keywords.includes(this.search) ||
            route.title.toLowerCase().includes(searchTerm) ||
            route.description.toLowerCase().includes(searchTerm) ||
            route.author.toLowerCase().includes(searchTerm)
          );
        });
      }),
      map(routeList => {
        if (this.max) {
          routeList = routeList.slice(0, this.max);
        }
        return routeList;
      }),
      map(sortBy('updated'))
    );
  }
}
