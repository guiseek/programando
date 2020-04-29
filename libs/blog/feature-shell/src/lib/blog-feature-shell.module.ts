/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
// import { ObserversModule } from '@angular/cdk/observers';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { CommonUiNavModule } from '@webapp/common/ui/nav';
import { SharedAuthModule } from '@webapp/shared/auth';
import { SharedUserFeatureModule } from '@webapp/shared/user/feature';
import { PreviewComponent } from './components/preview/preview.component';
import { StayTunedComponent } from './components/stay-tuned/stay-tuned.component';
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
    SharedUserFeatureModule,
    YouTubePlayerModule,
    // ObserversModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'posts/:id', component: PostComponent },
          { path: 'tags/:tag', component: OverviewComponent },
        ]
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ShellComponent,
    OverviewComponent,
    PostComponent,
    PreviewComponent,
    StayTunedComponent
  ]
})
export class BlogFeatureShellModule {}
