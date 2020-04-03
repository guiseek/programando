import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private _search = new Subject<string>();
  public search$ = this._search.asObservable();

  constructor() { }

  search(term = '') {
    this._search.next(term);
  }
}
