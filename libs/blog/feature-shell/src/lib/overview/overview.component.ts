import { Observable, fromEvent } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { pluck, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'blog-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit, AfterViewInit {
  keyword$: Observable<string>;
  searchString: string;
  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.keyword$ = this.route.queryParams.pipe(pluck('keyword'));
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(filter(Boolean), debounceTime(300), distinctUntilChanged())
      .subscribe((text: string) => {
        this.searchString = this.input.nativeElement.value;
      });
  }
}
