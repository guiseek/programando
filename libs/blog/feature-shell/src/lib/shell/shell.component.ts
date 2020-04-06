import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import {
  // AuthService,
  // MessagingService,
  NavItem
} from '@webapp/shared/data-access';
// import { SettingsDialog } from '@webapp/shared/user/feature';
// import { take } from 'rxjs/operators';

@Component({
  selector: 'blog-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  navigation: NavItem[] = [
    {
      icon: 'angular',
      title: 'Angular',
      route: '/',
      queryParams: { keyword: 'angular' }
    },
    {
      icon: 'nx',
      title: 'NX',
      route: '/',
      queryParams: { keyword: 'nx' }
    },
    {
      icon: 'firebase',
      title: 'Firebase',
      route: '/',
      queryParams: { keyword: 'firebase' }
    },
    {
      icon: 'nestjs',
      title: 'NestJS',
      route: '/',
      queryParams: { keyword: 'nestjs' }
    }
  ];

  constructor(
    // public msg: MessagingService,
    // public auth: AuthService,
    // private dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.auth.user$.pipe(take(1))
    //   .subscribe((user) => {
    //     console.log(user);

    //     this.msg.getPermission(user);
    //     // this.msg.monitorRefresh(user);
    //     this.msg.receiveMessages();
    //   })
  }
  openSettings(user) {
    // this.dialog.open(SettingsDialog, { data: user });
  }
}
