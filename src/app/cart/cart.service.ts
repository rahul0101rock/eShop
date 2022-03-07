import { HttpClient } from '@angular/common/http';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [];

  public totalAmnt = 0;


  constructor(private http: HttpClient) {
    this.setCartItems();
  }

  setCartItems(){
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user) {
          this.http.get<Cart[]>("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json").subscribe(
            cartItems => {
              if(cartItems){
                this.cartItems = cartItems;
              }
            }
          );
        }
      }
    );
  }

  getCartItems() {
    return this.cartItems;
  }

  addTOCart(cart: Cart) {
    this.cartItems.push(cart);
    this.updateCart();
  }

  changeCount(index: number, newcount: number) {
    this.cartItems[index].count = newcount;
    this.updateCart();
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  totalAmount() {
    let totalAmount = 0
    for (let item of this.cartItems) {
      totalAmount += item.product.price * item.count;
    }
    this.totalAmnt = totalAmount;
  }

  updateCart() {
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user) {
          this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json", this.cartItems).subscribe();
        }
      }
    );
  }
}
