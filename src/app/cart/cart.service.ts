import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [];

  public totalAmnt = 0;

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addTOCart(cart: Cart) {
    this.cartItems.push(cart);
  }

  changeCount(index: number, newcount: number) {
    this.cartItems[index].count = newcount;
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  totalAmount() {
    let totalAmount = 0
    for (let item of this.cartItems) {
      totalAmount += item.product.price * item.count;
    }
    this.totalAmnt = totalAmount;
  }
}
