import { NavItem } from '@webapp/shared/data-access';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  items: NavItem[] = [];

  constructor() { }

  ngOnInit(): void { }

}
