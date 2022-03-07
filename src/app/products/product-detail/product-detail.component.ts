import { Cart } from './../../cart/cart.model';
import { CartService } from './../../cart/cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  id!: number;
  addedToCart = false;
  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.productService.getProduct(this.id);
      }
    );
    
    for (let cartItem of this.cartService.getCartItems()) {
      if (cartItem.product.name == this.product.name){
        this.addedToCart = true;
      }
    }
  }

  onAddToCart() {
    this.productService.producttoCart(this.product, this.id);
    this.addedToCart = true;
  }
}
