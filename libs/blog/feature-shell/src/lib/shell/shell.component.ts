import { Component } from '@angular/core';
import { NavItem } from '@webapp/shared/data-access';

@Component({
  selector: 'blog-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  navigation: NavItem[] = [
    {
      icon: 'angular',
      title: 'Angular',
      route: '/',
      queryParams: { keyword: 'angular' }
    },
    {
      icon: 'nx',
      title: 'NX',
      route: '/',
      queryParams: { keyword: 'nx' }
    },
    {
      icon: 'firebase',
      title: 'Firebase',
      route: '/',
      queryParams: { keyword: 'firebase' }
    },
    {
      icon: 'nestjs',
      title: 'NestJS',
      route: '/',
      queryParams: { keyword: 'nestjs' }
    }
  ];
}

/**
 *   // src = '/assets/angular.mp4';
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
