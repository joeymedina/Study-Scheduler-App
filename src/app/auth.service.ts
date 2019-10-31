import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase';



export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  school?: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  cUid: string;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngzone: NgZone) {

      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {

          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
    );

  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    return this.updateUserDataGoogle(credential.user).then(() => { this.ngzone.run(() => this.scheduleRedirect( )); });
  }

  private updateUserDataGoogle(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    this.cUid = user.uid;

    const data: User = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    return userRef.set(data, {merge: true});
  }




  async signOut() {

    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  homeRedirect() {
    this.router.navigate(['/']);
  }

  meetingsRedirect() {
    this.router.navigate(['/meetings']);
  }

  friendsRedirect() {
    this.router.navigate(['/friends']);
  }

  accountRedirect() {
    this.router.navigate(['/account']);
  }

  scheduleRedirect() {
    this.router.navigate(['/schedule']);
  }
}

