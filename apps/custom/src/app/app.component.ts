import { Component } from '@angular/core';

export interface NavItem {
  title: string;
  route: string;
  queryParams?: {
    [k: string]: string;
  } | string;
  icon?: string;
  externalUrl?: boolean;
}

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom';
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
