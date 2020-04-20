import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Packages } from './packages.interfaces';

@Component({
  selector: 'web-packages',
  templateUrl: './packages.element.html',
  styleUrls: ['./packages.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackagesElement implements OnInit {
  api = 'https://api.npms.io/v2/search?q=author:guiseek';
  packages$: Observable<Packages>;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.packages$ = this.http.get<Packages>(this.api);
    // this.packages$.subscribe(console.log);
  }

}
