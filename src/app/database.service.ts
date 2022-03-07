import { CartService } from './cart/cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private cartService: CartService) { }

  updateCart(){
    const cartItems = this.cartService.getCartItems();
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user){
          return this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/"+user.uid+".json",cartItems);
        }
      }
    );
  }

}
