import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-toolbar-button',
  template: `<ng-content></ng-content>`,
  // encapsulation: ViewEncapsulation.None,
  styles: [`:host { display: block; margin-right: 16px; }`]
})
export class ToolbarButtonContent { }
