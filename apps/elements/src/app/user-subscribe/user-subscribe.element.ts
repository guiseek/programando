import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'web-user-subscribe',
  templateUrl: './user-subscribe.element.html',
  styleUrls: ['./user-subscribe.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserSubscribeElement implements OnInit {

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private afm: AngularFireMessaging
  ) { }

  ngOnInit(): void {
    // this.afa.auth.signInAnonymously()
  }

  request() {
    this.afm.requestPermission
      .pipe(mergeMapTo(this.afm.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

}
