import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '@webapp/env';
import { ImageElement } from './image/image.element';
import { LogoElement } from './logo/logo.element';
import { NavbarElement } from './navbar/navbar.element';
import { PostCardElement } from './post-card/post-card.element';
import { UserPollElement } from './user-poll/user-poll.element';
import { UserSubscribeElement } from './user-subscribe/user-subscribe.element';


@NgModule({
  declarations: [UserSubscribeElement, LogoElement, ImageElement, UserPollElement, PostCardElement, NavbarElement],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireMessagingModule
  ],
  // entryComponents: [UserSubscribeElement],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [LogoElement, 'web-logo'],
      [ImageElement, 'web-image'],
      [NavbarElement, 'web-navbar'],
      [UserPollElement, 'web-user-poll'],
      [PostCardElement, 'web-post-card'],
      [UserSubscribeElement, 'web-user-subscribe']
    ];

    for (const [element, name] of elements) {
      const el = createCustomElement(element, { injector: this.injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() {
    // const el = createCustomElement(UserSubscribeElement, { injector: this.injector });
    // customElements.define('web-user-subscribe', el);
  }
}
