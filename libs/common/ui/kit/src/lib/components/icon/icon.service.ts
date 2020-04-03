import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface SvgIcon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  addIcons(icons: SvgIcon[]) {
    icons.forEach( this.addIcon )
  }

  addIcon(icon: SvgIcon) {
    this.iconRegistry.addSvgIcon(
      icon.name,
      this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
    );
  }
}
