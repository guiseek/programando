import { AuthAccount } from './models/auth-account.model';
import { AuthUser } from './models/auth-user.model';
import { firebaseError } from './messages/firebase-errors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

export type authProviders = 'google' | 'github';
// export type authProviderIDs = 'google.com' | 'github';
const getProvider = (provider: authProviders | string) => {
  switch (true) {
    case provider.indexOf('google') > -1: return new auth.GoogleAuthProvider();
    case provider.indexOf('github') > -1: return new auth.GithubAuthProvider();
  }
}

const identifyProvider = (providerID: string) => {
  switch (providerID) {
    case 'google.com': return new auth.GoogleAuthProvider();
    case 'github.com': return new auth.GithubAuthProvider();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<AuthAccount>;

  constructor(
    private fireAuth: AngularFireAuth
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      map(user => user ? user : null)
    );
  }

  async refresh() {
    const user = this.hasCurrentUser();
    const provider = user.providerData.shift();

    return user.reauthenticateWithPopup(
      getProvider(provider.providerId)
    );
  }
  async removeAccount() {
    const user = this.hasCurrentUser();

    return await this.refresh()
      .then(() => user.delete());
  }

  async updatePassword({ newer }) {
    const user = this.hasCurrentUser();

    return await this.refresh()
      .then(() => user.updatePassword(newer));
  }

  async updateProfile({ displayName, photoURL }: AuthUser) {
    this.hasCurrentUser();

    return this.fireAuth.auth.currentUser
      .updateProfile({ displayName, photoURL });
  }
  async withProvider(provider: authProviders) {
    return this.fireAuth.auth
      .signInWithPopup(getProvider(provider))
      .catch(({ code, message }) => {
        const errors = firebaseError;
        return Promise.reject({
          code, message: errors[code]
            ? errors[code] : message
        })
      });
  }
  hasCurrentUser() {
    if (!this.fireAuth.auth.currentUser) {
      throw new Error('Sem usuário');
    }
    return this.fireAuth.auth.currentUser;
  }
  signOut() {
    return this.fireAuth.auth.signOut();
  }
}
