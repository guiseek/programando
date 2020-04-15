import { AuthService } from '@webapp/shared/data-access';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[authLoginHero]'
})
export class LoginHeroDirective {
  @HostBinding('click')
  login() {
    // this.auth.
  }
  constructor(private auth: AuthService) { }

}
