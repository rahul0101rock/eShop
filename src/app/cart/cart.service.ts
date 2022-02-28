import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [new Cart(new Product("iPhone 12",
  "A super-powerful chip. An advanced dual‑camera system. A Ceramic Shield front that’s tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.",
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000",
  59900.00,["Mobiles","Electronics","iPhone"]),1,0)];

  constructor() { }

  getCartItems(){
    return this.cartItems;
  }
}