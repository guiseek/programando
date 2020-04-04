import { ObserversModule } from '@angular/cdk/observers';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { CommonUiNavbarModule } from '@webapp/common/ui/navbar';
import { CommonUiToolbarModule } from '@webapp/common/ui/toolbar';
import { SharedAuthModule } from '@webapp/shared/auth';
import { PreviewComponent } from './components/preview/preview.component';
import { OverviewComponent } from './overview/overview.component';
import { PostComponent } from './post/post.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  imports: [
    ScullyLibModule,
    CommonUiKitModule,
    // CommonUiBrandModule,
    CommonUiMaterialModule,
    CommonUiToolbarModule,
    CommonUiNavbarModule,
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
          // {
          //   path: '**',
          //   redirectTo: ''
          // }
        ]
      },
      {
        path: 'conta',
        loadChildren: () =>
          import('@webapp/shared/account/feature-account').then(
            module => module.SharedAccountFeatureAccountModule
          )
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
