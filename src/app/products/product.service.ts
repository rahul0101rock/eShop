import { CartService } from './../cart/cart.service';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [
    new Product("iPhone 12",
    "A super-powerful chip. An advanced dual‑camera system. A Ceramic Shield front that’s tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.",
    "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
    59900.00,["Mobiles","Electronics","iPhone"]),
     new Product("Boat Rockerz 510 Bluetooth Headphones",
    "Rockerz 510 promises a battery back up of upto 20 hours and a standyby time of 250 hours. The foam inside the ear pads adapts to your ears with just the right pressure ensuring great comfort and also delivering authentic sound.It comes with dual connectivity, wireless via its bluetooth and wired with its aux port.",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsLQP3fgQVPTUkuwvkEcCNt8Y_ktED3cwOws_O9RmNrpGuEr6mvQVZbFOO3Rk0taef-h2_nW8p8thkvbYVTEbnKawRJyxM0xdbX9u6AbYGvMoaye9L_g3FFw&usqp=CAY",
    1499.00,["Headphones","Electronics","Boat"])
  ];

  getProducts(){
    return this.products;
  }

  getProduct(index: number){
    return this.products[index];
  }

  producttoCart(product: Product,index: number){
    this.cartService.addTOCart(new Cart(product,1,index));
  }

  constructor(public cartService: CartService) { }
}
