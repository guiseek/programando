import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Subject } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';
import { AuthAccount } from './../models/auth-account.model';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();

  constructor(
    private afs: AngularFirestore,
    private afm: AngularFireMessaging
  ) {  }

  getPermission(user: AuthAccount) {
    this.afm.requestPermission
      .pipe(mergeMapTo(this.afm.tokenChanges))
      .subscribe((token) => {
        console.log('permissão ok: ', user.displayName, token);
        this.saveToken(user, token);
      });
    // this.messaging.requestPermission()
    //   .then(() => {
    //     console.log('permissão ok');
    //     return this.messaging.getToken();
    //   })
    //   .then(token => this.saveToken(user, token))
    //   .catch(err => console.log(err, 'Sem permissão'));
  }

  // monitorRefresh(user) {
  //   this.messaging.onTokenRefresh(() => {
  //     this.messaging.getToken()
  //       .then(refreshedToken => this.saveToken(user, refreshedToken))
  //       .catch(err => console.log(err, 'Sem novo token'));
  //   })
  // }

  receiveMessages() {
    return this.afm.messages.subscribe((message) => {
      this.messageSource.next(message);
    });
  }

  private saveToken(user: AuthAccount, token) {
    const currentTokens = user.fcmTokens || {};
    console.log(currentTokens, token);

    if (!currentTokens[token]) {
      const userRef = this.afs.collection('users').doc(user.uid);
      const tokens = { ...currentTokens, [token]: true }
      userRef.set({ fcmTokens: tokens }, { merge: true });
    }
  }
}
