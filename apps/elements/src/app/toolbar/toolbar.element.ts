import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'web-toolbar',
  templateUrl: './toolbar.element.html',
  styleUrls: ['./toolbar.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarElement implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
