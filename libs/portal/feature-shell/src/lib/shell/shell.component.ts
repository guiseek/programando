import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavItem } from '@webapp/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'wa-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  title = 'portal-open';

  navigation: NavItem[] = [];

  topics$: Observable<NavItem[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.topics$ = this.http.get<NavItem[]>('/assets/data/topics.json').pipe(
      map(topics => {
        return topics.map(({ icon, ...topic }) => ({
          ...topic,
          icon: `/assets/logos/${icon}`
        }));
      }),
      tap(topics => {
        this.navigation = topics.map(({ icon, ...nav }) => nav);

        console.log(this.navigation);
      })
    );
    // .subscribe(console.log);
  }

  addPosts(): void {
    this.navigation.push({
      title: 'Posts',
      isOpened: true,
      route: '',
      children: [
        { title: 'Aulas', route: '/aulas' },
        { title: 'Conferências', route: '/eventos/conferencias' },
        { title: 'Palestras', route: '/eventos/palestras' }
      ]
    });
  }
}

/**
 *   ngclass = 'mat-video-responsive';
  // src = '/assets/angular.mp4';
  src = 'http://192.168.15.33:8080/Migrate%20NX%208%20para%209.mp4';
  // src = 'https://nkoehler.github.io/mat-video/assets/NASA.mp4';
  width = 600;
  height = 337.5;
  currentTime = 0;
  autoplay = false;
  preload = false;
  loop = false;
  quality = true;
  download = false;
  fullscreen = true;
  showFrameByFrame = false;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/angular-firebase-nestjs.svg';
  overlay = null;
  muted = false;

 */
