import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [
    new Product("iPhone 12",
    "A super-powerful chip. An advanced dual‑camera system. A Ceramic Shield front that’s tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000",
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

  constructor() { }
}
