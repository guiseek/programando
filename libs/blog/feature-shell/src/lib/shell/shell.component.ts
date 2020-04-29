import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  ngOnInit() {

    // this.auth.user$.pipe(take(1))
    //   .subscribe((user) => {
    //     console.log(user);
    //     if (user) {
    //       this.msg.getPermission(user);
    //       // this.msg.monitorRefresh(user);
    //       this.msg.receiveMessages();
    //     }
    //   })
  }
  onOnLoad(t) {
    console.log('load', t);

  }
  // openSettings(user) {
  //   // this.dialog.open(SettingsDialog, { data: user });
  // }
}
