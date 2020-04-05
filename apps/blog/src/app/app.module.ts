/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeBrExtra from '@angular/common/locales/extra/br';
import localeBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { environment } from '@webapp/env';
import { AppComponent } from './app.component';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireMessagingModule,
    BrowserAnimationsModule,
    ScullyLibModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@webapp/blog/feature-shell').then(
              m => m.BlogFeatureShellModule
            ),
          data: { preload: true }
        },
        {
          path: 'conta',
          loadChildren: () =>
            import('@webapp/shared/account/feature').then(
              module => module.SharedAccountFeatureModule
            )
        }
      ],
      {
        initialNavigation: 'enabled'
        // onSameUrlNavigation: 'reload'
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
