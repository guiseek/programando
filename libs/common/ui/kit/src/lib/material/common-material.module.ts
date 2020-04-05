/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';


const MaterialModules = [
  LayoutModule,
  MatListModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatCheckboxModule
];

@NgModule({
  imports: [LayoutModule, ...MaterialModules],
  exports: [LayoutModule, ...MaterialModules]
})
export class CommonUiMaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const ICONS = ['menu','tv','tag','school','sun','moon','double-arrow','double-arrow-back','video-show'];

    ICONS.forEach(icon => {
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    });

    const LOGOS = ['google','github','pwa','nx','firebase','angular','nestjs','material'];

    LOGOS.forEach(icon => {
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/logos/${icon}.svg`)
      );
    });

    // iconRegistry.addSvgIcon(
    //   'google',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/logos/google.svg')
    // );
    // iconRegistry.addSvgIcon(
    //   'github',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/logos/github.svg')
    // );
  }
}
