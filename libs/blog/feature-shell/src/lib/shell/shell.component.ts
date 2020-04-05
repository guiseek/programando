import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, MessagingService, NavItem } from '@webapp/shared/data-access';
import { SettingsDialog } from '@webapp/shared/user/feature';
import { take } from 'rxjs/operators';

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
    public msg: MessagingService,
    public auth: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const not = new Notification('title', {
      body: 'oiue'
    });
    console.log(not);

    // not.dispatchEvent(new Event('notify'))
    this.auth.user$.pipe(take(1))
      .subscribe((user) => {
        console.log(user);

        this.msg.getPermission(user);
        // this.msg.monitorRefresh(user);
        this.msg.receiveMessages();
      })
  }
  openSettings(user) {
    this.dialog.open(SettingsDialog, { data: user });
  }
  notifyMe() {
    // Let's check if the browser supports notifications
    var notification = new Notification("Hi there!");

    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
      // notification.
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }

    // Finally, if the user has denied notifications and you
    // want to be respectful there is no need to bother them any more.
  }
}
