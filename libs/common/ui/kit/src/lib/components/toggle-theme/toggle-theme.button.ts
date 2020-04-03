import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ui-toggle-theme',
  template: `
    <button mat-icon-button (click)="toggle()">
      <mat-icon [ngClass]="icon" [svgIcon]="icon"></mat-icon>
    </button>
  `,
  styleUrls: ['./toggle-theme.button.scss']
})
export class ToggleThemeButton {
  private classList = this.document.body.classList;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get icon() {
    return this.classList.contains('dark') ? 'sun' : 'moon';
  }

  toggle() {
    this.classList.toggle('dark');
  }
}
