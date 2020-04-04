/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
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
