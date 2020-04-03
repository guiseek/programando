import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@webapp/portal/feature-shell').then(
              m => m.PortalFeatureShellModule
            )
        },
        {
          path: 'blog',
          loadChildren: () =>
            import('@webapp/blog/feature-shell').then(
              m => m.BlogFeatureShellModule
            )
        }
      ],
      {
        initialNavigation: 'enabled',
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
