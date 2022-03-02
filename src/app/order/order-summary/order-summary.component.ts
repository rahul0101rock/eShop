import { CartService } from './../../cart/cart.service';
import { Cart } from './../../cart/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  cartItems! : Cart[];
  totalAmount!: number; 

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.totalAmnt;
  }

}
