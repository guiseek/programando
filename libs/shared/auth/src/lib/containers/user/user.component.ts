/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component, OnInit } from '@angular/core';
import { UiPopoverService } from '@webapp/common/ui/cdk/popover';
import { AuthService } from '@webapp/shared/data-access';
import { User } from 'firebase/app';
import { PopoverComponent } from './../popover/popover.component';

@Component({
  selector: 'auth-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(public auth: AuthService, private popover: UiPopoverService) {}

  ngOnInit(): void {}

  open(target: HTMLElement, data: User) {
    this.popover.open(PopoverComponent, target, { data });
  }

  onAuth(auth) {
    console.log('user: ', auth);
  }

  signOut() {
    this.auth.signOut();
  }
}
