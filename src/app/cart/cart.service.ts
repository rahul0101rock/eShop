import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Cart[] = [new Cart(new Product("Boat Rockerz 510 Bluetooth Headphones",
  "Rockerz 510 promises a battery back up of upto 20 hours and a standyby time of 250 hours. The foam inside the ear pads adapts to your ears with just the right pressure ensuring great comfort and also delivering authentic sound.It comes with dual connectivity, wireless via its bluetooth and wired with its aux port.",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsLQP3fgQVPTUkuwvkEcCNt8Y_ktED3cwOws_O9RmNrpGuEr6mvQVZbFOO3Rk0taef-h2_nW8p8thkvbYVTEbnKawRJyxM0xdbX9u6AbYGvMoaye9L_g3FFw&usqp=CAY",
  1499.00,["Headphones","Electronics","Boat"]),1,1)];

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
}
