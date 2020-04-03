import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
