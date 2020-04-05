import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserSubjects } from '../../forms/user-subjects.form';

@Component({
  selector: 'user-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  @Input() form = new UserSubjects();

  subjects$: Observable<any[]>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.subjects$ = this.http.get<any>('/assets/data/topics.json')
      .pipe(map(subjects => {
        return subjects.map(({ title, ...s }) => {
          const name = title.toLowerCase();
          return { ...s, title, name }
        })
      }));
  }
}
