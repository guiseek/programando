import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ImageElement } from './image/image.element';
import { LogoElement } from './logo/logo.element';
import { NavLinkElement } from './navbar/nav-link/nav-link.element';
import { NavbarElement } from './navbar/navbar.element';
import { PostCardElement } from './post-card/post-card.element';


@NgModule({
  declarations: [
    // UserSubscribeElement,
    LogoElement,
    ImageElement,
    // UserPollElement,
    PostCardElement,
    NavbarElement,
    NavLinkElement,
    // DropdownElement
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireMessagingModule
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
      [NavLinkElement, 'web-nav-link'],
      // [DropdownElement, 'web-dropdown'],
      // [UserPollElement, 'web-user-poll'],
      [PostCardElement, 'web-post-card'],
      // [UserSubscribeElement, 'web-user-subscribe']
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
