import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HighlightService } from './services/highlight.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDirective } from './directives/title.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToggleThemeButton } from './components/toggle-theme/toggle-theme.button';
import { SvgViewerComponent } from './components/svg-viewer/svg-viewer.component';
import { SvgViewerService } from './components/svg-viewer/svg-viewer.service';
import { SvgViewerDefaultConfig } from './components/svg-viewer/svg-viewer.config';
import { SnackMessageComponent } from './components/snack-message/snack-message.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchService } from './services/search.service';
import { SeoService } from './services/seo.service';

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
    IconComponent
  ],
  exports: [
    ...CommonModules,
    TitleDirective,
    ToggleThemeButton,
    SvgViewerComponent,
    SnackMessageComponent,
    IconComponent
  ],
  providers: [
    HighlightService,
    SeoService,
    SearchService,
    SvgViewerService,
    { provide: SvgViewerService, useClass: SvgViewerDefaultConfig }
  ]
})
export class CommonUiKitModule { }
