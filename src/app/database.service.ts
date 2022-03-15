import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as auth from 'firebase/auth';
import * as fromApp from './store/app.reducer'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private store: Store<fromApp.AppState>) { }

  updateCart(){
    const cartItems = this.store.select('cart');
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user){
          this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/"+user.uid+".json",cartItems);
        }
      }
    );
  }

}
