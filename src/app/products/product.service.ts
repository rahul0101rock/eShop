import { CartService } from './../cart/cart.service';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product("Boat Rockerz 510 Bluetooth Headphones",
      "Rockerz 510 promises a battery back up of upto 20 hours and a standyby time of 250 hours. The foam inside the ear pads adapts to your ears with just the right pressure ensuring great comfort and also delivering authentic sound.It comes with dual connectivity, wireless via its bluetooth and wired with its aux port.",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsLQP3fgQVPTUkuwvkEcCNt8Y_ktED3cwOws_O9RmNrpGuEr6mvQVZbFOO3Rk0taef-h2_nW8p8thkvbYVTEbnKawRJyxM0xdbX9u6AbYGvMoaye9L_g3FFw&usqp=CAY",
      1499.00, ["Headphones", "Electronics", "Boat", "Wireless"]),
    new Product("Boat Rockerz 255 Neckband sport high bass headphone",
      "While being lightweight in design pumps out your favorite tunes with powerful HD sound and deep boosted bass. The 10mm drivers installed to ensure that you get an exceptional sound experience with articulate audio reproduction with a blend of pitch-perfect frequency response. The sound produced by the boAt Rockerz 255 ensures that you differentiate music from noise and hear your favorite artists the way they were meant to be heard.",
      "https://cf.shopee.in/file/bde4af11c0f54e3db8174be9b9717d9f",
      1299, ["Neckband", "Electronics", "Boat", "Wireless"]),
    new Product("Philips Multigroom series 3000",
      "Includes a steel trimmer, a steel precision trimmer, a nose and ear hair trimmer, 3 hair trimming guards, 3 beard trimming guards, a stubble guard, an accessory storage bag, and a cleaning brush.",
      "https://images.philips.com/is/image/PhilipsConsumer/MG3730_15-IMS-en_IN?wid=420&hei=360&$jpglarge$",
      3931, ["Trimmer", "Electronics", "Philips"]
    ),
    new Product("Logitech M331 Silent Plus Wireless Optical Mouse, Black",
      "M331 is a result of Logitech's expertise and innovative approach designing comfortable solutions for over 25 years. Its asymmetric shape is meticulously crafted to guide your right hand to a natural position, while the soft rubber surface with distinctive patterns improves touch feeling. All that allows you to work or study comfortably for hours.",
      "https://www.reliancedigital.in/medias/Logitech-M331-Silent-Plus-Wireless-Optical-Mouse-Black-491315724-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjM1NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRmL2hmNC84OTMwODIxMDEzNTM0LmpwZ3w0ZTZiMGJiNzNmMDg2ZDM3Mjg1NGY3MDM5NzMxZDNhYTBmZTViY2Q5YWQ0MDVhZjM0MWViMjg4Y2U0OGFiNzQ1",
      1099, ["Mouse", "Electronics", "Logitech", "Wireless"])
  ];

  getProducts() {
    return this.products;
  }

  getProduct(index: number) {
    return this.products[index];
  }

  producttoCart(product: Product, index: number) {
    this.cartService.addTOCart(new Cart(product, 1, index));
  }

  constructor(public cartService: CartService) { }
}
