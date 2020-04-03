import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class IconComponent {

  public fontSet: string;
  public fontIcon: string;
  public matIcon = "code";
  public svgIcon: string;

  @HostBinding('class.ui-icon')
  class = true;

  @Input('inline') set inlining(value: boolean) { this.inline = coerceBooleanProperty(value); }
  public inline = false;

  @Input() color: ThemePalette;

  @Input('svgIcon') set setSvgIcon(descriptor: string) {

    this.fontSet = this.fontIcon = undefined;
    this.svgIcon = descriptor;
  }

  @Input('icon') set setIcon(descriptor: string) {

    const segments = descriptor ? descriptor.split(':') : [];

    if (segments.length > 1) {

      this.matIcon = undefined;
      this.fontSet = segments[0];
      this.fontIcon = segments[1];
    }
    else {

      this.fontSet = this.fontIcon = undefined;
      this.matIcon = segments[0];
    }
  }
}
