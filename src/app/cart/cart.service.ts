import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [];

  constructor() { }

  getCartItems(){
    return this.cartItems;
  }

  addTOCart(cart: Cart){
    this.cartItems.push(cart);
  }

  changeCount(index: number, newcount: number){
    this.cartItems[index].count = newcount;
  }

  removeCartItem(index: number){
    this.cartItems.splice(index,1);
  }
}
