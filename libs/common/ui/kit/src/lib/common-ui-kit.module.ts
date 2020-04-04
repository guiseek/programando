import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './components/icon/icon.component';
import { LogoComponent } from './components/logo/logo.component';
import { SnackMessageComponent } from './components/snack-message/snack-message.component';
import { SvgViewerComponent } from './components/svg-viewer/svg-viewer.component';
import { SvgViewerDefaultConfig } from './components/svg-viewer/svg-viewer.config';
import { SvgViewerService } from './components/svg-viewer/svg-viewer.service';
import { ToggleThemeButton } from './components/toggle-theme/toggle-theme.button';
import { TitleDirective } from './directives/title.directive';
import { HighlightService } from './services/highlight.service';

const CommonModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    ...CommonModules,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    TitleDirective,
    ToggleThemeButton,
    SvgViewerComponent,
    SnackMessageComponent,
    LogoComponent,
    IconComponent
  ],
  exports: [
    ...CommonModules,
    TitleDirective,
    ToggleThemeButton,
    SvgViewerComponent,
    SnackMessageComponent,
    LogoComponent,
    IconComponent
  ],
  providers: [
    HighlightService,
    SvgViewerService,
    { provide: SvgViewerService, useClass: SvgViewerDefaultConfig }
  ]
})
export class CommonUiKitModule { }
