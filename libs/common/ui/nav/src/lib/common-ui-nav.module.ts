import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarButtonContent } from './toolbar/contents/toolbar-button.content';
import { ToolbarIconContent } from './toolbar/contents/toolbar-icon.content';
import { ToolbarLogoContent } from './toolbar/contents/toolbar-logo.content';
import { ToolbarMenuContent } from './toolbar/contents/toolbar-menu.content';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    CommonUiKitModule,
    CommonUiMaterialModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    ToolbarMenuContent,
    ToolbarIconContent,
    ToolbarButtonContent,
    ToolbarLogoContent
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    ToolbarMenuContent,
    ToolbarIconContent,
    ToolbarButtonContent,
    ToolbarLogoContent
  ]
})
export class CommonUiNavModule {}
