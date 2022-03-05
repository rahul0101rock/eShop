import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(auth.getAuth(), email, password);
  }

  signup(email: string, password: string, first_name: string, last_name: string) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(auth.getAuth(), email, password).then(
        response => {
          auth.updateProfile(response.user, {
            displayName: first_name + " " + last_name
          }).then(() => {
            resolve(response.user);
          }).catch((error) => {
            reject(error);
          })
        }).catch((error) => {
          reject(error);
        })

    })
  }

}
