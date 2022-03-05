import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string){
    return auth.signInWithEmailAndPassword(auth.getAuth(),email, password);
  }


}
