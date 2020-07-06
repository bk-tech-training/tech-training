import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import * as firebase from 'firebase';

export interface User {
  uid: string;
  email: string;
  display_name: string;
  image_url: string;
  roles: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly currentUser: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
  ) {}

  public async signnInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);

    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(
      `users/${credential.user.uid}`
    );

    // need to be change⛔
    const userData: User = {
      uid: credential.user.uid,
      display_name: credential.user.displayName,
      email: credential.user.email,
      image_url: credential.user.photoURL,
      roles: { admin: true }, // ⛔⛔⛔
    };

    return userRef.set(userData, {merge: true});
  }

  public async signout() {
    await this.afAuth.signOut();
  }
}
