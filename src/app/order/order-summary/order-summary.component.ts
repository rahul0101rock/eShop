import { Router } from '@angular/router';
import { AddressService } from './../order-address/address.service';
import { OrderService } from './../order.service';
import { CartService } from './../../cart/cart.service';
import { Cart } from './../../cart/cart.model';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  cartItems!: Cart[];
  totalAmount!: number;
  message!: string | null;

  constructor(private cartService: CartService, private orderService: OrderService, private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.totalAmnt;
  }

  onOrderPlaced() {
    this.orderService.addToOrder(new Order(this.cartItems.splice(0), new Date(), this.addressService.getAddress(), this.totalAmount, "Ordered"));
    this.message = "Your order has been placed";
    
  }

  onClose(){
    this.message = null;
    this.cartService.clearCart();
    this.cartService.updateCart();
    this.router.navigate(['/myorders']);
  }
}
