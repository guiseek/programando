import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ToolbarMenuContent } from './contents/toolbar-menu.content';
import { ToolbarIconContent } from './contents/toolbar-icon.content';
import { ToolbarButtonContent } from './contents/toolbar-button.content';
import { ToolbarBrandContent } from './contents/toolbar-brand.content';

@NgModule({
  imports: [
    CommonUiKitModule,
    CommonUiMaterialModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarSearchComponent,
    ToolbarMenuContent,
    ToolbarIconContent,
    ToolbarButtonContent,
    ToolbarBrandContent
  ],
  exports: [
    ToolbarComponent,
    ToolbarSearchComponent,
    ToolbarMenuContent,
    ToolbarIconContent,
    ToolbarButtonContent,
    ToolbarBrandContent
  ]
})
export class CommonUiToolbarModule {}
