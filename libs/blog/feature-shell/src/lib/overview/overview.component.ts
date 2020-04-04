/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, pluck } from 'rxjs/operators';

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
