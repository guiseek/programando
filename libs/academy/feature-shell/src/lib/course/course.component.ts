import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  isScullyGenerated,
  ScullyRoute,
  ScullyRoutesService
} from '@scullyio/ng-lib';
import { Observable, merge } from 'rxjs';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { HighlightService } from '@webapp/common/ui/kit';

@Component({
  selector: 'webapp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class CourseComponent implements OnInit, AfterViewChecked {
  curso$: Observable<any>;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private srs: ScullyRoutesService,
    private highlightService: HighlightService
  ) {
    // this.showComments = isScullyGenerated();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
    this.curso$ = merge(
      this.srs.getCurrent(),
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    ).pipe(
      switchMap(ev => this.srs.getCurrent()),
      tap(curso => {
        console.log(curso)
      })
    );
  }

}
