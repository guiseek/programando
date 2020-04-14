import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService, AuthUser } from '@webapp/shared/data-access';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<User>;
  constructor(
    private auth: AuthService,
    readonly afs: AngularFirestore,
  ) {
    // this.
  }

  setUser({ uid, ...user }: AuthUser) {
    this.afs.collection('users').doc(uid)
      .set({ uid, ...user }, { merge: true });
  }
  getUser(uid: string) {
    return this.afs.collection('users').doc(uid);
  }

}
