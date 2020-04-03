import { PopoverComponent } from './../popover/popover.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@webapp/shared/data-access';
import { UiPopoverService } from '@webapp/common/ui/cdk/popover';
import { User } from 'firebase/app';

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
