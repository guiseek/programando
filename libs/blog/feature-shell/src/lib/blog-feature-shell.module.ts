/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { ObserversModule } from '@angular/cdk/observers';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { CommonUiNavModule } from '@webapp/common/ui/nav';
import { SharedAuthModule } from '@webapp/shared/auth';
import { PreviewComponent } from './components/preview/preview.component';
import { OverviewComponent } from './overview/overview.component';
import { PostComponent } from './post/post.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  imports: [
    ScullyLibModule,
    CommonUiKitModule,
    CommonUiMaterialModule,
    CommonUiNavModule,
    CommonUiCdkPopoverModule,
    SharedAuthModule,
    YouTubePlayerModule,
    ObserversModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'posts/:id', component: PostComponent },
        ]
      }
    ])
  ],
  declarations: [
    ShellComponent,
    OverviewComponent,
    PostComponent,
    PreviewComponent
  ]
})
export class BlogFeatureShellModule {}
